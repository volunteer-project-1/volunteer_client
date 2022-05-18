import React from "react";

import { useStoreSelector, useStoreDispatch } from "@/store";
import { updateResume } from "@/store/resume";
import Editor from "@/components/editor";

const IntroductionSection = () => {
  const resume = useStoreSelector(state => state.resume.resume);
  const dispatch = useStoreDispatch();

  return (
    <Editor>
      <Editor.Title>자기소개서</Editor.Title>
      <Editor.TextArea
        placeholder="제목을 입력해주세요."
        rowCount={1}
        value={resume.title}
        onChange={value => {
          dispatch(updateResume({ title: value }));
        }}
      />
      <Editor.TextArea
        placeholder="내용을 입력해주세요."
        rowCount={12}
        value={resume.content}
        onChange={value => {
          dispatch(updateResume({ content: value }));
        }}
      />
    </Editor>
  );
};

export default IntroductionSection;
