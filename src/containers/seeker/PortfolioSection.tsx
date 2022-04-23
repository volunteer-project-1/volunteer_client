import React from "react";

import FormSection from "@/containers/seeker/FormSection";

const PortfolioSection = () => {
  const handleUpload = (files: Array<File>) => {};

  return (
    <FormSection>
      <FormSection.Title>포트폴리오</FormSection.Title>
      <FormSection.FileUploader onUpload={handleUpload} />
    </FormSection>
  );
};

export default PortfolioSection;
