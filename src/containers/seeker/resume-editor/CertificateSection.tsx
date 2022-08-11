import React, { Fragment } from "react";

import { useStoreSelector, useStoreDispatch } from "@/states";
import { addCertificate, updateCertificate } from "@/states/resume";
import Editor from "@/components/editor";

const CertificateSection = () => {
  const certificates = useStoreSelector(state => state.resume.certificates);
  const dispatch = useStoreDispatch();

  return (
    <Editor>
      <Editor.Title>자격증</Editor.Title>
      {certificates.map((certificate, index) => (
        <Fragment key={index}>
          <Editor.Row>
            <Editor.Cell fill>
              <Editor.LargeInput
                label="자격증명"
                value={certificate.name}
                onChange={value => {
                  dispatch(updateCertificate([index, { name: value }]));
                }}
              />
            </Editor.Cell>
            <Editor.Cell fill>
              <Editor.LargeInput
                label="발행기관"
                value={certificate.institute}
                onChange={value => {
                  dispatch(updateCertificate([index, { institute: value }]));
                }}
              />
            </Editor.Cell>
            <Editor.Cell>
              <Editor.LargeInput
                label="취득년월"
                value={certificate.acquisition_at}
                onChange={value => {
                  dispatch(updateCertificate([index, { acquisition_at: value }]));
                }}
              />
            </Editor.Cell>
          </Editor.Row>
        </Fragment>
      ))}
      <Editor.LargeAddButton
        onClick={() => {
          dispatch(addCertificate());
        }}
      />
    </Editor>
  );
};

export default CertificateSection;
