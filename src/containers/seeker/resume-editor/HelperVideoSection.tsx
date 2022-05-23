import React from "react";

import ResumeAPI from "@/api/ResumeAPI";
import { useRequest } from "@/utils/APIUtils";
import { useStoreSelector, useStoreDispatch } from "@/store";
import { updateHelperVideo } from "@/store/resume";
import Editor from "@/components/editor";

const HelperVideoSection = () => {
  const helperVideo = useStoreSelector(state => state.resume.helperVideo);
  const dispatch = useStoreDispatch();
  const doRequest = useRequest();

  return (
    <Editor>
      <Editor.Title>대신 소개해드려요.</Editor.Title>
      <Editor.FileUploader
        extensions={["mp4"]}
        results={helperVideo.url ? [{ name: "포트폴리오 파일", url: helperVideo.url }] : []}
        onUpload={async files => {
          const output = await doRequest(ResumeAPI.uploadVideo({ file: files[0] }));
          dispatch(updateHelperVideo({ url: output.url }));
        }}
      />
    </Editor>
  );
};

export default HelperVideoSection;
