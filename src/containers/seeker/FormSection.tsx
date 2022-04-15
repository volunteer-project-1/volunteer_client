import React, { ReactNode } from "react";

import "@/containers/seeker/FormSection.scoped.scss";

interface FormSectionProps {
  title: string;
  children: ReactNode;
}

const FormSection = ({ title, children }: FormSectionProps) => (
  <div className="formSection">
    <div className="title">{title}</div>
    <div>{children}</div>
  </div>
);

interface AddButtonProps {
  onClick: () => void;
}

const AddButton = ({ onClick }: AddButtonProps) => (
  <button className="formSectionAddButton" type="button" onClick={onClick}>
    <img className="icon" src="/assets/seeker/formsection-add.svg" alt="내용 추가하기" />
    <span className="text">내용 추가하기</span>
  </button>
);

export default Object.assign(FormSection, {
  AddButton,
});
