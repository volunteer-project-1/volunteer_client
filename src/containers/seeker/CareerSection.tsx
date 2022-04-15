import React from "react";

import FormSection from "@/containers/seeker/FormSection";

const CareerSection = () => {
  const handleClickAdd = () => {};

  return (
    <FormSection title="경력">
      <FormSection.AddButton onClick={handleClickAdd} />
    </FormSection>
  );
};

export default CareerSection;
