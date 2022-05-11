import React from "react";

import Editor from "@/components/editor";

const IntroductionSection = () => (
  <Editor>
    <Editor.Title>자기소개서</Editor.Title>
    <Editor.TextArea placeholder="제목을 입력해주세요." rowCount={1} />
    <Editor.TextArea placeholder="내용을 입력해주세요." rowCount={12} />
  </Editor>
);

export default IntroductionSection;
