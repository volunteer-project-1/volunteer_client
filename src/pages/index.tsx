import React from "react";

import Page from "@/components/page";
import MainSection from "@/containers/home/MainSection";
import SearchSection from "@/containers/home/SearchSection";
import SeekerSection from "@/containers/home/SeekerSection";
import CompanySection from "@/containers/home/CompanySection";
import MyPageSection from "@/containers/home/MyPageSection";
import BannerSection from "@/containers/home/BannerSection";
import ContactSection from "@/containers/home/ContactSection";

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
