import React from "react";

import ResumeAPI from "@/api/ResumeAPI";
import { useRequest } from "@/utils/APIUtils";
import { useStoreSelector, useStoreDispatch } from "@/states";
import { updateHelperVideo } from "@/states/resume";
import Editor from "@/components/editor";

const HelperVideoSection = () => {
  const helperVideo = useStoreSelector(state => state.resume.helperVideo);
  const dispatch = useStoreDispatch();
  const doRequest = useRequest();

  return (
    <Editor>
      <Editor.Title>대신 소개해드려요.</Editor.Title>
      <Editor.FileUploader
        type="video"
        results={helperVideo.url ? [{ url: helperVideo.url }] : []}
        onUpload={async files => {
          const output = await doRequest(ResumeAPI.uploadVideo({ file: files[0] }));
          dispatch(updateHelperVideo({ url: output.url }));
        }}
      />
    </Editor>
  );
};

export default HelperVideoSection;
