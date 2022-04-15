import React from "react";

import FormSection from "@/containers/seeker/FormSection";

const EducationSection = () => {
  const handleClickAdd = () => {};

  return (
    <FormSection>
      <FormSection.Title>학력</FormSection.Title>
      <FormSection.Row>
        <FormSection.Cell>
          <FormSection.Input placeholder="학교구분" />
        </FormSection.Cell>
        <FormSection.Cell fill>
          <FormSection.Input placeholder="학교명" />
        </FormSection.Cell>
        <FormSection.Cell>
          <FormSection.Input placeholder="졸업년도" />
        </FormSection.Cell>
        <FormSection.Cell>
          <FormSection.Input placeholder="졸업상태" />
        </FormSection.Cell>
        <FormSection.Cell>
          <FormSection.Checkbox>대입검정고시</FormSection.Checkbox>
        </FormSection.Cell>
      </FormSection.Row>
      <FormSection.AddButton onClick={handleClickAdd} />
    </FormSection>
  );
};

export default EducationSection;
