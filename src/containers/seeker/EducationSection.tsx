import React from "react";

import Editor from "@/components/editor";

const EducationSection = () => {
  const handleClickAdd = () => {};

  return (
    <Editor>
      <Editor.Title>학력</Editor.Title>
      <Editor.Row>
        <Editor.Cell>
          <Editor.Input label="학교구분" />
        </Editor.Cell>
        <Editor.Cell fill>
          <Editor.Input label="학교명" />
        </Editor.Cell>
        <Editor.Cell>
          <Editor.Input label="졸업년도" />
        </Editor.Cell>
        <Editor.Cell>
          <Editor.Input label="졸업상태" />
        </Editor.Cell>
        <Editor.Cell>
          <Editor.Checkbox>대입검정고시</Editor.Checkbox>
        </Editor.Cell>
      </Editor.Row>
      <Editor.AddButton onClick={handleClickAdd} />
    </Editor>
  );
};

export default EducationSection;
