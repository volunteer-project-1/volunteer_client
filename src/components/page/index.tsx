import React, { ReactNode } from "react";
import classNames from "classnames";

import "@/components/page/Page.scoped.scss";

interface LayoutProps {
  children: ReactNode;
}

/**
 * 각 페이지.
 */
const Page = ({ children }: LayoutProps) => <div className="page">{children}</div>;

/**
 * 각 페이지의 제목 부분.
 */
const PageTitle = ({ children }: LayoutProps) => <div className="pageTitle">{children}</div>;

/**
 * 이력서 작성 페이지 등의 사이드바를 가진 페이지를 위한 component.
 */
const PageColumns = ({ children }: LayoutProps) => <div className="pageColumns">{children}</div>;

interface PageColumnProps {
  fill?: boolean;
  children: ReactNode;
}

/**
 * 메인 내용은 fill = true, 사이드바는 fill = false를 주면 됨.
 * (기본값: false)
 */
const PageColumn = ({ fill = false, children }: PageColumnProps) => (
  <div
    className={classNames("pageColumn", {
      shouldFill: fill,
    })}
  >
    {children}
  </div>
);

export default Object.assign(Page, {
  Title: PageTitle,
  Columns: PageColumns,
  Column: PageColumn,
});
