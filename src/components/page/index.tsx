import React, { ReactNode } from "react";

import Header from "@/containers/Header";
import Footer from "@/containers/Footer";
import "@/components/page/Page.scoped.scss";

interface PageProps {
  children: ReactNode;
}

/**
 * 각 page에 사용하는 wrapper component.
 * Header, footer를 그려주고 내용물을 중간에 넣어줌.
 */
const Page = ({ children }: PageProps) => (
  <div className="page">
    <Header />
    <div className="pageContent">{children}</div>
    <Footer />
  </div>
);

interface PageTitleProps {
  children: ReactNode;
}

/**
 * 각 페이지의 제목 부분.
 */
const PageTitle = ({ children }: PageTitleProps) => <div className="pageTitle">{children}</div>;

export default Object.assign(Page, {
  Title: PageTitle,
});
