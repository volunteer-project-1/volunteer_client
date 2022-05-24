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
        type="video"
        results={myVideo.url ? [{ url: myVideo.url }] : []}
        onUpload={async files => {
          const output = await doRequest(ResumeAPI.uploadVideo({ file: files[0] }));
          dispatch(updateMyVideo({ url: output.url }));
        }}
      />
    </Editor>
  );
};

export default MyVideoSection;
