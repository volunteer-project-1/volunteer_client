import React from "react";

import FormSection from "@/containers/seeker/FormSection";

const EducationSection = () => {
  const handleClickAdd = () => {};

  return (
    <FormSection title="학력">
      <FormSection.AddButton onClick={handleClickAdd} />
    </FormSection>
  );
};

export default EducationSection;
