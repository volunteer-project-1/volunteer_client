import React, { Fragment } from "react";

import { useStoreSelector, useStoreDispatch } from "@/store";
import { addCareer, updateCareer } from "@/store/resume";
import Editor from "@/components/editor";

const CareerSection = () => {
  const careers = useStoreSelector(state => state.resume.careers);
  const dispatch = useStoreDispatch();

  return (
    <Editor>
      <Editor.Title>경력</Editor.Title>
      {careers.map((career, index) => (
        <Fragment key={index}>
          <Editor.Row>
            <Editor.Cell fill>
              <Editor.LargeInput
                label="회사명"
                value={career.company}
                onChange={value => {
                  dispatch(updateCareer([index, { company: value }]));
                }}
              />
            </Editor.Cell>
            <Editor.Cell fill>
              <Editor.LargeInput
                label="부서명"
                value={career.department}
                onChange={value => {
                  dispatch(updateCareer([index, { department: value }]));
                }}
              />
            </Editor.Cell>
            <Editor.Cell fill>
              <Editor.LargeInput
                label="직급/직책"
                value={career.position}
                onChange={value => {
                  dispatch(updateCareer([index, { position: value }]));
                }}
              />
            </Editor.Cell>
            {/*
            <Editor.Cell>
              <Editor.LargeInput label="연봉" />
            </Editor.Cell>
            */}
          </Editor.Row>
          <Editor.Row>
            <Editor.Cell fill>
              <Editor.LargeInput
                label="담당업무"
                value={career.task}
                onChange={value => {
                  dispatch(updateCareer([index, { task: value }]));
                }}
              />
            </Editor.Cell>
            <Editor.Cell fill>
              <Editor.LargeInput
                type="date"
                label="입사년월"
                value={career.joined_at}
                onChange={value => {
                  dispatch(updateCareer([index, { joined_at: value }]));
                }}
              />
            </Editor.Cell>
            {/*
            <Editor.Cell>
              <Editor.LargeInput label="퇴사년월" />
            </Editor.Cell>
            */}
            {/*
            <Editor.Cell>
              <Editor.Checkbox>재직중</Editor.Checkbox>
            </Editor.Cell>
            */}
          </Editor.Row>
        </Fragment>
      ))}
      <Editor.AddButton
        onClick={() => {
          dispatch(addCareer());
        }}
      />
    </Editor>
  );
};

export default CareerSection;
