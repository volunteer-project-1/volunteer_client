import React, { Fragment } from "react";

import { useStoreSelector, useStoreDispatch } from "@/common/store";
import { addTraining, updateTraining } from "@/seeker/store/resume";
import Editor from "@/common/components/editor";

const TrainingSection = () => {
  const trainings = useStoreSelector(state => state.resume.trainings);
  const dispatch = useStoreDispatch();

  return (
    <Editor>
      <Editor.Title>교육이수</Editor.Title>
      {trainings.map((training, index) => (
        <Fragment key={index}>
          <Editor.Row>
            <Editor.Cell>
              <Editor.LargeInput
                label="교육명"
                value={training.name}
                onChange={value => {
                  dispatch(updateTraining([index, { name: value }]));
                }}
              />
            </Editor.Cell>
            <Editor.Cell fill>
              <Editor.LargeInput
                label="교육기관"
                value={training.institute}
                onChange={value => {
                  dispatch(updateTraining([index, { institute: value }]));
                }}
              />
            </Editor.Cell>
            <Editor.Cell>
              <Editor.LargeInput
                label="시작년월"
                value={training.started_at}
                onChange={value => {
                  dispatch(updateTraining([index, { started_at: value }]));
                }}
              />
            </Editor.Cell>
            <Editor.Cell>
              <Editor.LargeInput
                label="종료년월"
                value={training.finished_at}
                onChange={value => {
                  dispatch(updateTraining([index, { finished_at: value }]));
                }}
              />
            </Editor.Cell>
          </Editor.Row>
          <Editor.Row>
            <Editor.Cell fill>
              <Editor.LargeInput
                label="교육내용"
                value={training.content}
                onChange={value => {
                  dispatch(updateTraining([index, { content: value }]));
                }}
              />
            </Editor.Cell>
          </Editor.Row>
        </Fragment>
      ))}
      <Editor.LargeAddButton
        onClick={() => {
          dispatch(addTraining());
        }}
      />
    </Editor>
  );
};

export default TrainingSection;
