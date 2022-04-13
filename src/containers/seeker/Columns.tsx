import React, { ReactNode } from "react";

import "@/containers/seeker/Columns.scoped.scss";
import classNames from "classnames";

interface ColumnsProps {
  children: ReactNode;
}

const Columns = ({ children }: ColumnsProps) => <div className="columns">{children}</div>;

interface ColumnsItemProps {
  shouldFill: boolean;
  children: ReactNode;
}

const ColumnsItem = ({ shouldFill, children }: ColumnsItemProps) => (
  <div
    className={classNames("columnsItem", {
      shouldFill,
    })}
  >
    {children}
  </div>
);

export default Object.assign(Columns, {
  Item: ColumnsItem,
});
