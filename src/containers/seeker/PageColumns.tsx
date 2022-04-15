import React, { ReactNode } from "react";

import "@/containers/seeker/PageColumns.scoped.scss";
import classNames from "classnames";

interface PageColumnsProps {
  children: ReactNode;
}

const PageColumns = ({ children }: PageColumnsProps) => <div className="columns">{children}</div>;

interface PageColumnsItemProps {
  shouldFill: boolean;
  children: ReactNode;
}

const PageColumnsItem = ({ shouldFill, children }: PageColumnsItemProps) => (
  <div
    className={classNames("columnsItem", {
      shouldFill,
    })}
  >
    {children}
  </div>
);

export default Object.assign(PageColumns, {
  Item: PageColumnsItem,
});
