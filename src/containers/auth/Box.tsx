import React, { ReactNode } from "react";

import "@/containers/auth/Box.scoped.scss";

interface BoxProps {
  title: string;
  description: string;
  children: ReactNode;
}

const Box = ({ title, description, children }: BoxProps) => (
  <div className="box">
    <div className="title">{title}</div>
    <div className="description">{description}</div>
    {children}
  </div>
);

export default Box;
