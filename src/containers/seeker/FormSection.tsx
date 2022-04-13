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

export default FormSection;
