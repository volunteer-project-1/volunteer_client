import React from "react";

import FormSection from "@/containers/seeker/FormSection";

const ActivitySection = () => {
  const handleClickAdd = () => {};

  return (
    <FormSection title="대외활동">
      <FormSection.AddButton onClick={handleClickAdd} />
    </FormSection>
  );
};

export default ActivitySection;
