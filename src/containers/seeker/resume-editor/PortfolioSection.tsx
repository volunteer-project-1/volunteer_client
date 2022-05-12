import React, { useState } from "react";

import ResumeAPI from "@/api/ResumeAPI";
import Editor from "@/components/editor";

const PortfolioSection = () => {
  // 테스트용. (Store로 대체 예정)
  const [uploadResults, setUploadResults] = useState<Array<{ name: string; url: string }>>([]);

  const handleUpload = async (files: Array<File>) => {
    const outputs = await Promise.all(files.map(file => ResumeAPI.uploadPDF({ file })));

    setUploadResults([
      ...uploadResults,
      ...outputs.map(output => ({ name: output.file.originalname, url: output.url })),
    ]);
  };

  return (
    <Editor>
      <Editor.Title>포트폴리오</Editor.Title>
      <Editor.FileUploader extensions={["pdf"]} onUpload={handleUpload} results={uploadResults} />
    </Editor>
  );
};

export default PortfolioSection;
