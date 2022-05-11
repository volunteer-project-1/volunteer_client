import React from "react";

import Editor from "@/components/editor";

const PortfolioSection = () => {
  const handleUpload = (files: Array<File>) => {};

  return (
    <Editor>
      <Editor.Title>포트폴리오</Editor.Title>
      <Editor.FileUploader onUpload={handleUpload} />
    </Editor>
  );
};

export default PortfolioSection;
