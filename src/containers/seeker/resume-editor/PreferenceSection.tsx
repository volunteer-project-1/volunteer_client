import React from "react";

import { EMPLOY_TYPE } from "@/constants/Resume";
import { useStoreDispatch, useStoreSelector } from "@/store";
import {
  addPreferenceLocation,
  addPreferenceJob,
  updatePreferenceLocation,
  updatePreferenceJob,
  updatePreference,
} from "@/store/resume";
import Editor from "@/components/editor";

const PreferenceSection = () => {
  const preference = useStoreSelector(state => state.resume.preference);
  const preferenceJobs = useStoreSelector(state => state.resume.preferenceJobs);
  const preferenceLocations = useStoreSelector(state => state.resume.preferenceLocations);
  const dispatch = useStoreDispatch();

  return (
    <Editor>
      <Editor.Title>희망근무 형태</Editor.Title>
      <Editor.Row>
        <Editor.Cell fill>
          <Editor.LargeSelect
            label="고용형태"
            value={preference.employ_type}
            options={EMPLOY_TYPE.map((type, index) => ({ name: type, value: `${index}` }))}
            onChange={value => {
              dispatch(updatePreference({ employ_type: `${value}` }));
            }}
          />
        </Editor.Cell>
        <Editor.Cell fill>
          <Editor.LargeInput
            type="number"
            label="희망연봉 (단위: 만원)"
            value={preference.salary ? `${preference.salary}` : undefined}
            onChange={value => {
              dispatch(updatePreference({ salary: value ? Number(value) : undefined }));
            }}
          />
        </Editor.Cell>
      </Editor.Row>
      {preferenceLocations.map((location, index) => (
        <Editor.Row key={index}>
          <Editor.Cell fill>
            <Editor.LargeAddress
              label="희망근무지"
              value={{ sido: location.sido, sigungu: location.sigungu }}
              onChange={value => {
                dispatch(updatePreferenceLocation([index, { sido: value.sido, sigungu: value.sigungu }]));
              }}
            />
          </Editor.Cell>
        </Editor.Row>
      ))}
      <Editor.Row>
        <Editor.SmallAddButton
          onClick={() => {
            dispatch(addPreferenceLocation());
          }}
        />
      </Editor.Row>
      {preferenceJobs.map((job, index) => (
        <Editor.Row key={index}>
          <Editor.Cell fill>
            <Editor.LargeInput
              label="희망직종"
              value={job.name}
              onChange={value => {
                dispatch(updatePreferenceJob([index, { name: value }]));
              }}
            />
          </Editor.Cell>
        </Editor.Row>
      ))}
      <Editor.Row>
        <Editor.SmallAddButton
          onClick={() => {
            dispatch(addPreferenceJob());
          }}
        />
      </Editor.Row>
    </Editor>
  );
};

export default PreferenceSection;
