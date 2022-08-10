import React, { Fragment } from "react";

import { useStoreDispatch, useStoreSelector } from "@/common/store";
import { addEducation, updateEducation } from "@/seeker/store/resume";
import Editor from "@/common/components/editor";

const EducationSection = () => {
  const educations = useStoreSelector(state => state.resume.educations);
  const dispatch = useStoreDispatch();

  return (
    <Editor>
      <Editor.Title>학력</Editor.Title>
      {educations.map((education, index) => (
        <Fragment key={index}>
          {index > 0 && <Editor.Separator />}
          <Editor.Row>
            <Editor.Cell>
              <Editor.LargeSelect
                label="학교구분"
                value={education.type}
                options={[
                  { name: "초등학교", value: "초등학교" },
                  { name: "중학교", value: "중학교" },
                  { name: "고등학교", value: "고등학교" },
                  { name: "대학교", value: "대학교" },
                  { name: "전문대학", value: "전문대학" },
                  { name: "대학원", value: "대학원" },
                  { name: "기타", value: "기타" },
                ]}
                onChange={value => {
                  dispatch(updateEducation([index, { type: value }]));
                }}
              />
            </Editor.Cell>
            <Editor.Cell fill>
              <Editor.LargeInput
                label="학교명"
                value={education.school_name}
                onChange={value => {
                  dispatch(updateEducation([index, { school_name: value }]));
                }}
              />
            </Editor.Cell>
            <Editor.Cell>
              <Editor.LargeInput
                label="졸업년도"
                value={education.graduation_year}
                onChange={value => {
                  dispatch(updateEducation([index, { graduation_year: value }]));
                }}
              />
            </Editor.Cell>
            <Editor.Cell>
              <Editor.LargeSelect
                label="졸업상태"
                value={education.is_graduated}
                options={[
                  { name: "졸업예정", value: false },
                  { name: "졸업", value: true },
                ]}
                onChange={value => {
                  dispatch(updateEducation([index, { is_graduated: value }]));
                }}
              />
            </Editor.Cell>
            {/*
            <Editor.Cell>
              <Editor.Checkbox>대입검정고시</Editor.Checkbox>
            </Editor.Cell>
            */}
          </Editor.Row>
        </Fragment>
      ))}
      <Editor.LargeAddButton
        onClick={() => {
          dispatch(addEducation());
        }}
      />
    </Editor>
  );
};

export default EducationSection;
