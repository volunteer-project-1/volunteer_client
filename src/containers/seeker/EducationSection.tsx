import React from "react";

import { useStoreDispatch, useStoreSelector } from "@/store";
import { addArrayItem, updateArrayItem, UpdateArrayItemPayload } from "@/store/resume";
import Editor from "@/components/editor";

const EducationSection = () => {
  const educations = useStoreSelector(state => state.resume.educations);
  const dispatch = useStoreDispatch();

  const handleClickAdd = () => {
    dispatch(addArrayItem({ name: "educations" }));
  };

  return (
    <Editor>
      <Editor.Title>학력</Editor.Title>
      {educations.map((education, index) => (
        <>
          {index > 0 && <Editor.Separator />}
          <Editor.Row key={index}>
            <Editor.Cell>
              <Editor.Input
                label="학교구분"
                value={education.type}
                onChange={value => {
                  const payload: UpdateArrayItemPayload<"educations"> = {
                    name: "educations",
                    index,
                    part: { type: value },
                  };

                  dispatch(updateArrayItem(payload));
                }}
              />
            </Editor.Cell>
            <Editor.Cell fill>
              <Editor.Input
                label="학교명"
                value={education.school_name}
                onChange={value => {
                  const payload: UpdateArrayItemPayload<"educations"> = {
                    name: "educations",
                    index,
                    part: { school_name: value },
                  };

                  dispatch(updateArrayItem(payload));
                }}
              />
            </Editor.Cell>
            <Editor.Cell>
              <Editor.Select
                label="졸업년도"
                value={education.graduation_year}
                options={[
                  { name: "2022", value: "2022" },
                  { name: "2021", value: "2021" },
                  { name: "2020", value: "2020" },
                  { name: "2019", value: "2019" },
                ]}
                onChange={value => {
                  const payload: UpdateArrayItemPayload<"educations"> = {
                    name: "educations",
                    index,
                    part: { graduation_year: value },
                  };

                  dispatch(updateArrayItem(payload));
                }}
              />
            </Editor.Cell>
            <Editor.Cell>
              <Editor.Select
                label="졸업상태"
                value={education.is_graduated}
                options={[
                  { name: "졸업예정", value: false },
                  { name: "졸업", value: true },
                ]}
                onChange={value => {
                  const payload: UpdateArrayItemPayload<"educations"> = {
                    name: "educations",
                    index,
                    part: { is_graduated: value },
                  };

                  dispatch(updateArrayItem(payload));
                }}
              />
            </Editor.Cell>
            <Editor.Cell>
              <Editor.Checkbox>대입검정고시</Editor.Checkbox>
            </Editor.Cell>
          </Editor.Row>
        </>
      ))}
      <Editor.AddButton onClick={handleClickAdd} />
    </Editor>
  );
};

export default EducationSection;
