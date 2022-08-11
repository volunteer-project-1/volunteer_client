import React from "react";

import { DISABLILITY_LEVEL, DISABLILITY_TYPE, SEX } from "@/constants/Resume";
import ResumeAPI from "@/api/ResumeAPI";
import { useRequest } from "@/utils/APIUtils";
import { useStoreDispatch, useStoreSelector } from "@/states";
import { updateResumeInfo } from "@/states/resume";
import Editor from "@/components/editor";

const InfoSection = () => {
  const resumeInfo = useStoreSelector(state => state.resume.resumeInfo);
  const dispatch = useStoreDispatch();
  const doRequest = useRequest();

  return (
    <Editor>
      <Editor.Title>인적사항</Editor.Title>
      <Editor.Row>
        <Editor.Cell>
          <Editor.ImageUploader
            label="사진 추가"
            url={resumeInfo.avatar}
            onUpload={async file => {
              const output = await doRequest(ResumeAPI.uploadVideo({ file }));
              dispatch(updateResumeInfo({ avatar: output.url }));
            }}
          />
        </Editor.Cell>
        <Editor.Cell layout="column" fill>
          <Editor.Row>
            <Editor.Cell fill>
              <Editor.SmallInput
                placeholder="이름"
                isRequired
                value={resumeInfo.name}
                onChange={value => {
                  dispatch(updateResumeInfo({ name: value }));
                }}
              />
            </Editor.Cell>
            <Editor.Cell fill>
              <Editor.SmallInput
                placeholder="생년월일"
                type="date"
                isRequired
                value={resumeInfo.birthday}
                onChange={value => {
                  dispatch(updateResumeInfo({ birthday: value }));
                }}
              />
            </Editor.Cell>
            <Editor.Cell fill>
              <Editor.SmallInput
                placeholder="연락처"
                type="tel"
                isRequired
                value={resumeInfo.phone_number}
                onChange={value => {
                  dispatch(updateResumeInfo({ phone_number: value }));
                }}
              />
            </Editor.Cell>
          </Editor.Row>
          <Editor.Row>
            <Editor.Cell fill>
              <Editor.SmallInput
                placeholder="이메일"
                type="email"
                value={resumeInfo.email}
                onChange={value => {
                  dispatch(updateResumeInfo({ email: value }));
                }}
              />
            </Editor.Cell>
            <Editor.Cell fill>
              <Editor.SmallAddress
                placeholder="주소"
                isRequired
                value={{ sido: resumeInfo.sido, sigungu: resumeInfo.sigungu }}
                onChange={value => {
                  dispatch(updateResumeInfo({ sido: value.sido, sigungu: value.sigungu }));
                }}
              />
            </Editor.Cell>
          </Editor.Row>
          <Editor.Row>
            <Editor.Cell fill>
              <Editor.SmallSelect
                placeholder="장애종류"
                options={DISABLILITY_TYPE.map(type => ({
                  name: type,
                  value: type,
                }))}
                value={resumeInfo.disability_type}
                onChange={value => {
                  dispatch(updateResumeInfo({ disability_type: value }));
                }}
              />
            </Editor.Cell>
            <Editor.Cell fill>
              <Editor.SmallSelect
                placeholder="장애급수"
                options={DISABLILITY_LEVEL.map(level => ({
                  name: `${level}등급`,
                  value: level,
                }))}
                value={resumeInfo.disability_level}
                onChange={value => {
                  dispatch(updateResumeInfo({ disability_level: value }));
                }}
              />
            </Editor.Cell>
            <Editor.Cell fill>
              <Editor.SmallSelect
                placeholder="성별"
                options={SEX.map(sex => ({
                  name: sex,
                  value: sex,
                }))}
                value={resumeInfo.sex}
                onChange={value => {
                  dispatch(updateResumeInfo({ sex: value }));
                }}
              />
            </Editor.Cell>
          </Editor.Row>
        </Editor.Cell>
      </Editor.Row>
    </Editor>
  );
};

export default InfoSection;
