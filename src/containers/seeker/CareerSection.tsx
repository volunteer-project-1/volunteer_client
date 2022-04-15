import React from "react";

import FormSection from "@/containers/seeker/FormSection";

const CareerSection = () => {
  const handleClickAdd = () => {};

  return (
    <FormSection>
      <FormSection.Title>경력</FormSection.Title>
      <FormSection.Row>
        <FormSection.Cell fill>
          <FormSection.Input placeholder="회사명" />
        </FormSection.Cell>
        <FormSection.Cell fill>
          <FormSection.Input placeholder="부서명" />
        </FormSection.Cell>
        <FormSection.Cell fill>
          <FormSection.Input placeholder="직급/직책" />
        </FormSection.Cell>
        <FormSection.Cell>
          <FormSection.Input placeholder="연봉" />
        </FormSection.Cell>
      </FormSection.Row>
      <FormSection.Row>
        <FormSection.Cell fill>
          <FormSection.Input placeholder="담당업무" />
        </FormSection.Cell>
        <FormSection.Cell>
          <FormSection.Input placeholder="입사년월" />
        </FormSection.Cell>
        <FormSection.Cell>
          <FormSection.Input placeholder="퇴사년월" />
        </FormSection.Cell>
        <FormSection.Cell>
          <FormSection.Checkbox>재직중</FormSection.Checkbox>
        </FormSection.Cell>
      </FormSection.Row>
      <FormSection.AddButton onClick={handleClickAdd} />
    </FormSection>
  );
};

export default CareerSection;
