import React from "react";

import ResumeAPI from "@/api/ResumeAPI";
import { useStoreSelector, useStoreDispatch } from "@/store";
import Editor from "@/components/editor";
import { updatePortfolio } from "@/store/resume";

const PortfolioSection = () => {
  const portfolio = useStoreSelector(state => state.resume.portfolio);
  const dispatch = useStoreDispatch();

  return (
    <Editor>
      <Editor.Title>포트폴리오</Editor.Title>
      <Editor.FileUploader
        extensions={["pdf"]}
        results={portfolio.url ? [{ name: "포트폴리오 파일", url: portfolio.url }] : []}
        onUpload={async files => {
          const outputs = await Promise.all(files.map(file => ResumeAPI.uploadPDF({ file })));
          dispatch(updatePortfolio({ url: outputs[0].url }));
        }}
      />
    </Editor>
  );
};

export default PortfolioSection;
