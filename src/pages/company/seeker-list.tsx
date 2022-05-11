import React from "react";

import Page from "@/components/page";
import SeekerSection from "@/containers/company/seeker-list/SeekerSection";
import ResultSection from "@/containers/company/seeker-list/ResultSection";

/**
 * 구직자 리스트 페이지.
 */
const SeekerListPage = () => (
  <Page>
    <Page.Title>TOP 인재</Page.Title>
    <SeekerSection />
    <ResultSection />
  </Page>
);

export default SeekerListPage;
