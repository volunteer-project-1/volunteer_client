import React from "react";

import { useStoreDispatch, useStoreSelector } from "@/store";
import { updateCompany } from "@/store/company";
import Editor from "@/components/editor";

const InfoSection = () => {
  const company = useStoreSelector(state => state.company.company);
  const dispatch = useStoreDispatch();

  return (
    <Editor>
      <Editor.Title>기업정보</Editor.Title>
      <Editor.Row>
        {/*
        <Editor.Cell layout="column">
          <Editor.ImageUploader label="기업사진 추가" url={undefined} onUpload={file => {}} />
          <Editor.ImageUploader label="기업로고 추가" url={undefined} onUpload={file => {}} />
        </Editor.Cell>
        */}
        <Editor.Cell layout="column" fill>
          <Editor.Row>
            <Editor.Cell fill>
              <Editor.SmallInput
                placeholder="기업명"
                isRequired
                value={company.name}
                onChange={value => {
                  dispatch(updateCompany({ name: value }));
                }}
              />
            </Editor.Cell>
          </Editor.Row>
          <Editor.Row>
            <Editor.Cell fill>
              <Editor.SmallInput
                placeholder="연락처"
                type="tel"
                isRequired
                value={company.phone_number}
                onChange={value => {
                  dispatch(updateCompany({ phone_number: value }));
                }}
              />
            </Editor.Cell>
          </Editor.Row>
          <Editor.Row>
            <Editor.Cell fill>
              <Editor.SmallInput
                placeholder="설립일자"
                type="date"
                isRequired
                value={company.founded_at}
                onChange={value => {
                  dispatch(updateCompany({ founded_at: value }));
                }}
              />
            </Editor.Cell>
          </Editor.Row>
          <Editor.Row>
            <Editor.Cell fill>
              <Editor.SmallInput
                placeholder="이메일"
                type="email"
                value={company.email}
                onChange={value => {
                  dispatch(updateCompany({ email: value }));
                }}
              />
            </Editor.Cell>
          </Editor.Row>
          <Editor.Row>
            <Editor.Cell fill>
              <Editor.SmallInput
                placeholder="주소"
                isRequired
                value={company.address}
                onChange={value => {
                  dispatch(updateCompany({ address: value }));
                }}
              />
            </Editor.Cell>
          </Editor.Row>
          <Editor.Row>
            <Editor.Cell fill>
              <Editor.SmallInput
                placeholder="홈페이지 URL"
                type="url"
                value={company.homepage}
                onChange={value => {
                  dispatch(updateCompany({ homepage: value }));
                }}
              />
            </Editor.Cell>
          </Editor.Row>
          <Editor.Row>
            <Editor.Cell fill>
              <Editor.SmallInput
                placeholder="투자유치"
                type="number"
                value={company.acc_investment ? `${company.acc_investment}` : undefined}
                onChange={value => {
                  dispatch(updateCompany({ acc_investment: Number(value) }));
                }}
              />
            </Editor.Cell>
          </Editor.Row>
          <Editor.Row>
            <Editor.Cell fill>
              <Editor.SmallInput
                placeholder="구성원"
                type="number"
                value={company.member ? `${company.member}` : undefined}
                onChange={value => {
                  dispatch(updateCompany({ member: Number(value) }));
                }}
              />
            </Editor.Cell>
          </Editor.Row>
          <Editor.Row>
            <Editor.Cell fill>
              <Editor.SmallInput
                placeholder="산업분야"
                isRequired
                value={company.industry_type}
                onChange={value => {
                  dispatch(updateCompany({ industry_type: value }));
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
