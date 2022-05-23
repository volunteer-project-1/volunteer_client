import React from "react";

import ResumeAPI from "@/api/ResumeAPI";
import { useRequest } from "@/utils/APIUtils";
import { useStoreSelector, useStoreDispatch } from "@/store";
import { updateMyVideo } from "@/store/resume";
import Editor from "@/components/editor";

const MyVideoSection = () => {
  const myVideo = useStoreSelector(state => state.resume.myVideo);
  const dispatch = useStoreDispatch();
  const doRequest = useRequest();

  return (
    <Editor>
      <Editor.Title>나를 소개합니다.</Editor.Title>
      <Editor.FileUploader
        extensions={["mp4"]}
        results={myVideo.url ? [{ name: "포트폴리오 파일", url: myVideo.url }] : []}
        onUpload={async files => {
          const output = await doRequest(ResumeAPI.uploadVideo({ file: files[0] }));
          dispatch(updateMyVideo({ url: output.url }));
        }}
      />
    </Editor>
  );
};

export default MyVideoSection;
