import React, { ReactNode } from "react";

import "@/components/sidebar/Sidebar.scoped.scss";
import classNames from "classnames";

interface SidebarProps {
  title: string;
  children: ReactNode;
}

const Sidebar = ({ title, children }: SidebarProps) => (
  <div className="sidebar">
    <div className="title">{title}</div>
    <div className="content">{children}</div>
  </div>
);

interface CategoryProps {
  isHighlighted?: boolean;
  children: ReactNode;
}

const Category = ({ isHighlighted = false, children }: CategoryProps) => (
  <div
    className={classNames("category", {
      isHighlighted,
    })}
  >
    {children}
  </div>
);

interface ItemProps {
  isNecessary?: boolean;
  isHighlighted?: boolean;
  children: ReactNode;
}

const Item = ({ isNecessary = false, isHighlighted = false, children }: ItemProps) => (
  <div
    className={classNames("item", {
      isHighlighted,
    })}
  >
    ✓ {children}
    {isNecessary && <span className="necessity">*</span>}
  </div>
);

export default Object.assign(Sidebar, {
  Category,
  Item,
});
