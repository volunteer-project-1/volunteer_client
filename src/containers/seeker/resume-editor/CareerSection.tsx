import React from "react";

import Editor from "@/components/editor";

const CareerSection = () => {
  const handleClickAdd = () => {};

  return (
    <Editor>
      <Editor.Title>경력</Editor.Title>
      <Editor.Row>
        <Editor.Cell fill>
          <Editor.LargeInput label="회사명" />
        </Editor.Cell>
        <Editor.Cell fill>
          <Editor.LargeInput label="부서명" />
        </Editor.Cell>
        <Editor.Cell fill>
          <Editor.LargeInput label="직급/직책" />
        </Editor.Cell>
        <Editor.Cell>
          <Editor.LargeInput label="연봉" />
        </Editor.Cell>
      </Editor.Row>
      <Editor.Row>
        <Editor.Cell fill>
          <Editor.LargeInput label="담당업무" />
        </Editor.Cell>
        <Editor.Cell>
          <Editor.LargeInput label="입사년월" />
        </Editor.Cell>
        <Editor.Cell>
          <Editor.LargeInput label="퇴사년월" />
        </Editor.Cell>
        <Editor.Cell>
          <Editor.Checkbox>재직중</Editor.Checkbox>
        </Editor.Cell>
      </Editor.Row>
      <Editor.AddButton onClick={handleClickAdd} />
    </Editor>
  );
};

export default CareerSection;
