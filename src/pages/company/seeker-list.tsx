import React from "react";

import Page from "@/components/common/Page";
import Header from "@/containers/Header";
import Footer from "@/containers/Footer";
import SeekerSection from "@/views/company/seeker-list/SeekerSection";

/**
 * 구직자 리스트 페이지.
 */
const SeekerListPage = () => (
  <Page>
    <Header />
    <SeekerSection />
    <Footer />
  </Page>
);

export default SeekerListPage;
