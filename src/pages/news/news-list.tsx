import React from "react";

import Page from "@/layout/containers/Page";
import BannerSection from "@/news/containers/BannerSection";
import ListSection from "@/news/containers/ListSection";

/**
 * 미디어 뉴스 리스트 페이지.
 */
const NewsListPage = () => (
  <Page>
    <Page.Title>미디어 뉴스</Page.Title>
    <BannerSection />
    <ListSection />
  </Page>
);

export default NewsListPage;
