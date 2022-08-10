import React, { Fragment } from "react";

import { useStoreSelector, useStoreDispatch } from "@/common/store";
import { updateIntroduction } from "@/seeker/store/resume";
import Editor from "@/common/components/editor";

const IntroductionSection = () => {
  const introductions = useStoreSelector(state => state.resume.introductions);
  const dispatch = useStoreDispatch();

  return (
    <Editor>
      <Editor.Title>자기소개서</Editor.Title>
      {introductions.map((introduction, index) => (
        <Fragment key={index}>
          <Editor.TextArea
            placeholder="제목을 입력해주세요."
            rowCount={1}
            value={introduction.title}
            onChange={value => {
              dispatch(updateIntroduction([index, { title: value }]));
            }}
          />
          <Editor.TextArea
            placeholder="내용을 입력해주세요."
            rowCount={12}
            value={introduction.content}
            onChange={value => {
              dispatch(updateIntroduction([index, { content: value }]));
            }}
          />
        </Fragment>
      ))}
    </Editor>
  );
};

export default IntroductionSection;
