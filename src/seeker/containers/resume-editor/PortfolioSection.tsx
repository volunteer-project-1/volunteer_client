import React from "react";

import ResumeAPI from "@/seeker/api/ResumeAPI";
import { useRequest } from "@/common/utils/APIUtils";
import { useStoreSelector, useStoreDispatch } from "@/common/store";
import { updatePortfolio } from "@/seeker/store/resume";
import Editor from "@/common/components/editor";

const PortfolioSection = () => {
  const portfolio = useStoreSelector(state => state.resume.portfolio);
  const dispatch = useStoreDispatch();
  const doRequest = useRequest();

  return (
    <Editor>
      <Editor.Title>포트폴리오</Editor.Title>
      <Editor.FileUploader
        type="document"
        results={portfolio.url ? [{ url: portfolio.url }] : []}
        onUpload={async files => {
          const output = await doRequest(ResumeAPI.uploadPDF({ file: files[0] }));
          dispatch(updatePortfolio({ url: output.url }));
        }}
      />
    </Editor>
  );
};

export default PortfolioSection;
