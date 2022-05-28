import React from "react";

import Editor from "@/components/editor";

const HistorySection = () => (
  <Editor>
    <Editor.Title>기업연혁을 입력해주세요.</Editor.Title>
    <Editor.Row>
      <Editor.Cell>
        <Editor.SmallInput placeholder="년도" />
      </Editor.Cell>
      <Editor.Cell fill>
        <Editor.SmallInput placeholder="내용을 입력해주세요." />
      </Editor.Cell>
    </Editor.Row>
  </Editor>
);

export default HistorySection;
