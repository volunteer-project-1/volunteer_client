import React from "react";

import { useStoreDispatch, useStoreSelector } from "@/states";
import { updateCompany } from "@/states/company";
import Editor from "@/components/editor";

const IntroductionSection = () => {
  const company = useStoreSelector(state => state.company.company);
  const dispatch = useStoreDispatch();

  return (
    <Editor>
      <Editor.Title>기업소개글을 입력해주세요.</Editor.Title>
      <Editor.TextArea
        placeholder="내용을 입력해주세요."
        rowCount={12}
        value={company.introduce}
        onChange={value => {
          dispatch(updateCompany({ introduce: value }));
        }}
      />
    </Editor>
  );
};

export default IntroductionSection;
