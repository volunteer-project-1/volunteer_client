import React from "react";

import Editor from "@/components/editor";

const ActivitySection = () => {
  const handleClickAdd = () => {};

  return (
    <Editor>
      <Editor.Title>대외활동</Editor.Title>
      <Editor.Row>
        <Editor.Cell>
          <Editor.LargeInput label="활동구분" />
        </Editor.Cell>
        <Editor.Cell fill>
          <Editor.LargeInput label="활동기관/단체/회사명" />
        </Editor.Cell>
        <Editor.Cell>
          <Editor.LargeInput label="시작년월" />
        </Editor.Cell>
        <Editor.Cell>
          <Editor.LargeInput label="종료년월" />
        </Editor.Cell>
      </Editor.Row>
      <Editor.Row>
        <Editor.Cell fill>
          <Editor.LargeInput label="활동내용" />
        </Editor.Cell>
      </Editor.Row>
      <Editor.AddButton onClick={handleClickAdd} />
    </Editor>
  );
};

export default ActivitySection;
