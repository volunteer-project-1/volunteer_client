import React from "react";

import Editor from "@/components/editor";

const IntroductionSection = () => (
  <Editor>
    <Editor.Title>기업소개글을 입력해주세요.</Editor.Title>
    <Editor.TextArea placeholder="내용을 입력해주세요." rowCount={12} />
  </Editor>
);

export default IntroductionSection;
