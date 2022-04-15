import React from "react";

import FormSection from "@/containers/seeker/FormSection";

const ActivitySection = () => {
  const handleClickAdd = () => {};

  return (
    <FormSection>
      <FormSection.Title>대외활동</FormSection.Title>
      <FormSection.Row>
        <FormSection.Cell>
          <FormSection.Input placeholder="활동구분" />
        </FormSection.Cell>
        <FormSection.Cell span={3}>
          <FormSection.Input placeholder="활동기관/단체/회사명" />
        </FormSection.Cell>
        <FormSection.Cell>
          <FormSection.Input placeholder="시작년월" />
        </FormSection.Cell>
        <FormSection.Cell>
          <FormSection.Input placeholder="종료년월" />
        </FormSection.Cell>
      </FormSection.Row>
      <FormSection.Row>
        <FormSection.Cell>
          <FormSection.Input placeholder="활동내용" />
        </FormSection.Cell>
      </FormSection.Row>
      <FormSection.AddButton onClick={handleClickAdd} />
    </FormSection>
  );
};

export default ActivitySection;
