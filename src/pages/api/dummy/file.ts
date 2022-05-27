import nextConnect from "next-connect";
import AWS from "aws-sdk";
import multer from "multer";
import multerS3 from "multer-s3";

const s3 = new AWS.S3({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
});

const s3Storage = multerS3({
  s3,
  bucket: "seeme-user-files",
  key: (request, file, callback) => {
    callback(null, `userFiles/${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({
  storage: s3Storage,
});

const handler = nextConnect();

handler.post(upload.single("file"), (request, response) => {
  const url = (request.file as any).location;

  if (url) {
    response.status(200).json({ url });
  } else {
    response.status(500).json({ message: "Failed to get the file!" });
  }
});

export const config = {
  api: {
    bodyParser: false,
    sizeLimit: "1gb",
  },
};

export default handler;
