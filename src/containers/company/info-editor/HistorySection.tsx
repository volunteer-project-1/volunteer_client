import React, { Fragment } from "react";

import { useStoreDispatch, useStoreSelector } from "@/store";
import { addCompanyHistory, updateCompanyHistory } from "@/store/company";
import Editor from "@/components/editor";

const HistorySection = () => {
  const companyHistories = useStoreSelector(state => state.company.companyHistories);
  const dispatch = useStoreDispatch();

  return (
    <Editor>
      <Editor.Title>기업연혁을 입력해주세요.</Editor.Title>
      {companyHistories.map((history, index) => (
        <Fragment key={index}>
          {/* index > 0 && <Editor.Separator /> */}
          <Editor.Row>
            <Editor.Cell>
              <Editor.SmallInput
                type="number"
                placeholder="년도"
                value={history.history_at}
                onChange={value => {
                  dispatch(updateCompanyHistory([index, { history_at: value }]));
                }}
              />
            </Editor.Cell>
            <Editor.Cell fill>
              <Editor.SmallInput
                type="number"
                placeholder="내용을 입력해주세요."
                value={history.content}
                onChange={value => {
                  dispatch(updateCompanyHistory([index, { content: value }]));
                }}
              />
            </Editor.Cell>
          </Editor.Row>
        </Fragment>
      ))}
      <Editor.LargeAddButton
        onClick={() => {
          dispatch(addCompanyHistory());
        }}
      />
    </Editor>
  );
};

export default HistorySection;
