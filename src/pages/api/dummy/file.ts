import nextConnect from "next-connect";
import AWS from "aws-sdk";

const s3 = new AWS.S3({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  signatureVersion: "v4",
  region: "ap-northeast-2",
});

const handler = nextConnect({ attachParams: true });

handler.get((request: any, response: any) => {
  const fileName = request.query.fileName;

  if (!fileName) {
    response.status(404).json({ message: "filename or urlType are wrong!" });
    return;
  }

  const filePath = `userFiles/${Date.now()}-${fileName}`;

  const uploadURL = s3.getSignedUrl("putObject", {
    Bucket: "seeme-user-files",
    Key: filePath,
    Expires: 180,
    ContentType: "video/mp4",
  });

  const downloadURL = `https://seeme-user-files.s3.ap-northeast-2.amazonaws.com/${filePath}`;
  response.status(200).json({ uploadURL, downloadURL });
});

export default handler;
