import React, { Fragment } from "react";

import { useStoreSelector, useStoreDispatch } from "@/store";
import { addActivity, updateActivity } from "@/store/resume";
import Editor from "@/components/editor";

const ActivitySection = () => {
  const activities = useStoreSelector(state => state.resume.activities);
  const dispatch = useStoreDispatch();

  return (
    <Editor>
      <Editor.Title>대외활동</Editor.Title>
      {activities.map((activity, index) => (
        <Fragment key={index}>
          <Editor.Row>
            {/*
            <Editor.Cell>
              <Editor.LargeInput label="활동구분"/>
            </Editor.Cell>
            */}
            <Editor.Cell fill>
              <Editor.LargeInput
                label="활동기관/단체/회사명"
                value={activity.organization}
                onChange={value => {
                  dispatch(updateActivity([index, { organization: value }]));
                }}
              />
            </Editor.Cell>
            {/*
            <Editor.Cell>
              <Editor.LargeInput label="시작년월"
                value={activity.}
                onChange={value => {
                  dispatch(updateActivity([index, { organization: value }]));
                }}
              />
            </Editor.Cell>
            */}
            {/*
            <Editor.Cell>
              <Editor.LargeInput label="종료년월" />
            </Editor.Cell>
            */}
          </Editor.Row>
          <Editor.Row>
            <Editor.Cell fill>
              <Editor.LargeInput
                label="활동내용"
                value={activity.description}
                onChange={value => {
                  dispatch(updateActivity([index, { description: value }]));
                }}
              />
            </Editor.Cell>
          </Editor.Row>
        </Fragment>
      ))}
      <Editor.AddButton
        onClick={() => {
          dispatch(addActivity());
        }}
      />
    </Editor>
  );
};

export default ActivitySection;
