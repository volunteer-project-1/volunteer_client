import React, { Fragment } from "react";

import { useStoreDispatch, useStoreSelector } from "@/common/store";
import { addAward, updateAward } from "@/seeker/store/resume";
import Editor from "@/common/components/editor";

const AwardSection = () => {
  const awards = useStoreSelector(state => state.resume.awards);
  const dispatch = useStoreDispatch();

  return (
    <Editor>
      <Editor.Title>수상경력</Editor.Title>
      {awards.map((award, index) => (
        <Fragment key={index}>
          <Editor.Row>
            {/*
            <Editor.Cell fill>
              <Editor.LargeInput label="수상명"/>
            </Editor.Cell>
            */}
            <Editor.Cell fill>
              <Editor.LargeInput
                label="수상기관"
                value={award.institute}
                onChange={value => {
                  dispatch(updateAward([index, { institute: value }]));
                }}
              />
            </Editor.Cell>
            <Editor.Cell fill>
              <Editor.LargeInput
                type="date"
                label="수상년월"
                value={award.started_at}
                onChange={value => {
                  dispatch(updateAward([index, { started_at: value }]));
                }}
              />
            </Editor.Cell>
            {/*
            <Editor.Cell>
              <Editor.LargeInput label="수상내용" />
            </Editor.Cell>
            */}
          </Editor.Row>
        </Fragment>
      ))}
      <Editor.LargeAddButton
        onClick={() => {
          dispatch(addAward());
        }}
      />
    </Editor>
  );
};

export default AwardSection;
