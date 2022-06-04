import React from "react";

import { useStoreDispatch, useStoreSelector } from "@/store";
import { updateCompanyHistory } from "@/store/company";
import Editor from "@/components/editor";

const HistorySection = () => {
  const companyHistory = useStoreSelector(state => state.company.companyHistory);
  const dispatch = useStoreDispatch();

  return (
    <Editor>
      <Editor.Title>기업연혁을 입력해주세요.</Editor.Title>
      <Editor.Row>
        <Editor.Cell>
          <Editor.SmallInput
            placeholder="년도"
            value={companyHistory.history_at}
            onChange={value => {
              dispatch(updateCompanyHistory({ history_at: value }));
            }}
          />
        </Editor.Cell>
        <Editor.Cell fill>
          <Editor.SmallInput
            placeholder="내용을 입력해주세요."
            value={companyHistory.content}
            onChange={value => {
              dispatch(updateCompanyHistory({ content: value }));
            }}
          />
        </Editor.Cell>
      </Editor.Row>
    </Editor>
  );
};

export default HistorySection;
