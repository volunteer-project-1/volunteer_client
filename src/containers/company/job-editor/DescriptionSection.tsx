import React from "react";

import Editor from "@/components/editor";

const DescriptionSection = () => (
  <Editor>
    <Editor.Title>채용공고</Editor.Title>
    <Editor.Title>모집분야</Editor.Title>
    <Editor.Row>
      <Editor.Cell fill>
        <Editor.TextArea placeholder="모집분야를 입력해주세요." rowCount={1} />
      </Editor.Cell>
    </Editor.Row>
    <Editor.Title>담당업무</Editor.Title>
    <Editor.Row>
      <Editor.Cell fill>
        <Editor.TextArea placeholder="담당업무를 입력해주세요." />
      </Editor.Cell>
    </Editor.Row>
    <Editor.Title>자격요건</Editor.Title>
    <Editor.Row>
      <Editor.Cell fill>
        <Editor.TextArea placeholder="자격요건을 입력해주세요." />
      </Editor.Cell>
    </Editor.Row>
    <Editor.Title>우대사항</Editor.Title>
    <Editor.Row>
      <Editor.Cell fill>
        <Editor.TextArea placeholder="우대사항을 입력해주세요." />
      </Editor.Cell>
    </Editor.Row>
  </Editor>
);

export default DescriptionSection;
