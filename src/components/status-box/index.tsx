/**
 * @file 이력서 작성 페이지 등의 사이드바에서 채워진 / 덜 채워진 항목들을 보여주는 박스.
 */

import React, { ReactNode } from "react";
import classNames from "classnames";

import "@/components/status-box/StatusBox.scoped.scss";

interface StatusBoxProps {
  title: string;
  children: ReactNode;
}

const StatusBox = ({ title, children }: StatusBoxProps) => (
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

export default Object.assign(StatusBox, {
  Category,
  Item,
});
