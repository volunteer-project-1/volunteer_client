import React from "react";

import FormSection from "@/containers/seeker/FormSection";

const AwardSection = () => {
  const handleClickAdd = () => {};

  return (
    <FormSection>
      <FormSection.Title>수상경력</FormSection.Title>
      <FormSection.Row>
        <FormSection.Cell span={3}>
          <FormSection.Input placeholder="수상명" />
        </FormSection.Cell>
        <FormSection.Cell span={3}>
          <FormSection.Input placeholder="수상기관" />
        </FormSection.Cell>
        <FormSection.Cell>
          <FormSection.Input placeholder="수상년월" />
        </FormSection.Cell>
        <FormSection.Cell>
          <FormSection.Input placeholder="수상내용" />
        </FormSection.Cell>
      </FormSection.Row>
      <FormSection.AddButton onClick={handleClickAdd} />
    </FormSection>
  );
};

export default AwardSection;
