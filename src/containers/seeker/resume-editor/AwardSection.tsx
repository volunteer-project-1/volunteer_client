import React from "react";

import Editor from "@/components/editor";

const AwardSection = () => {
  const handleClickAdd = () => {};

  return (
    <Editor>
      <Editor.Title>수상경력</Editor.Title>
      <Editor.Row>
        <Editor.Cell fill>
          <Editor.LargeInput label="수상명" />
        </Editor.Cell>
        <Editor.Cell fill>
          <Editor.LargeInput label="수상기관" />
        </Editor.Cell>
        <Editor.Cell>
          <Editor.LargeInput label="수상년월" />
        </Editor.Cell>
        <Editor.Cell>
          <Editor.LargeInput label="수상내용" />
        </Editor.Cell>
      </Editor.Row>
      <Editor.AddButton onClick={handleClickAdd} />
    </Editor>
  );
};

export default AwardSection;
