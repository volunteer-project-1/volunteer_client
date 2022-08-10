import React from "react";

import Page from "@/layout/containers/Page";
import MainSection from "@/home/containers/MainSection";
import SearchSection from "@/home/containers/SearchSection";
import SeekerSection from "@/home/containers/SeekerSection";
import CompanySection from "@/home/containers/CompanySection";
import MyPageSection from "@/home/containers/MyPageSection";
import BannerSection from "@/home/containers/BannerSection";
import ContactSection from "@/home/containers/ContactSection";

/**
 * 메인 페이지.
 */
const HomePage = () => (
  <Page>
    <MainSection />
    <SearchSection />
    <SeekerSection />
    <CompanySection />
    <MyPageSection />
    <BannerSection />
    <ContactSection />
  </Page>
);

export default HomePage;
