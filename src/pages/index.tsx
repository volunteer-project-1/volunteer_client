import React from "react";

import Page from "@/components/page";
import MainSection from "@/containers/Main";
import SearchSection from "@/components/home/SearchSection";
import SeekerSection from "@/components/home/SeekerSection";
import CompanySection from "@/components/home/CompanySection";
import MyPageSection from "@/components/home/MyPageSection";
import BannerSection from "@/components/home/BannerSection";
import ContactSection from "@/components/home/ContactSection";

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
