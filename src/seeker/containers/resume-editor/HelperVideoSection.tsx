import React from "react";

import ResumeAPI from "@/seeker/api/ResumeAPI";
import { useRequest } from "@/common/utils/APIUtils";
import { useStoreSelector, useStoreDispatch } from "@/common/store";
import { updateHelperVideo } from "@/seeker/store/resume";
import Editor from "@/common/components/editor";

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
