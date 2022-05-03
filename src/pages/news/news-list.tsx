import React from "react";

import Page from "@/components/page";
import BannerSection from "@/containers/news/BannerSection";
import ListSection from "@/containers/news/ListSection";

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
