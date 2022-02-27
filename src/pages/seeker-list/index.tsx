import React from "react";

import Page from "@/components/common/Page";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SeekerSection from "@/views/seeker-list/SeekerSection";

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
