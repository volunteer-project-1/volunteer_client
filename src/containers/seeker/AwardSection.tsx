import React from "react";

import FormSection from "@/containers/seeker/FormSection";

const AwardSection = () => {
  const handleClickAdd = () => {};

  return (
    <FormSection title="수상경력">
      <FormSection.AddButton onClick={handleClickAdd} />
    </FormSection>
  );
};

export default AwardSection;
