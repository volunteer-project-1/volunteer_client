import React from "react";

import Page from "@/components/common/Page";
import Header from "@/containers/Header";
import Footer from "@/containers/Footer";
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
    <Header />
    <MainSection />
    <SearchSection />
    <SeekerSection />
    <CompanySection />
    <MyPageSection />
    <BannerSection />
    <ContactSection />
    <Footer />
  </Page>
);

export default HomePage;
