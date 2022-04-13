import React, { ReactNode } from "react";

import "@/containers/seeker/Columns.scoped.scss";

interface ColumnsProps {
  children: ReactNode;
}

const Columns = ({ children }: ColumnsProps) => <div className="columns">{children}</div>;

export default Columns;
