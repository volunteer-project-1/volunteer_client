import React from 'react';

import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import MainSection from '@/views/home/MainSection';
import SearchSection from '@/views/home/SearchSection';
import SeekerSection from '@/views/home/SeekerSection';
import CompanySection from '@/views/home/CompanySection';
import MyPageSection from '@/views/home/MyPageSection';
import BannerSection from '@/views/home/BannerSection';
import ContactSection from '@/views/home/ContactSection';

const MainPage = () => (
  <div>
    <Header />
    <MainSection />
    <SearchSection />
    <SeekerSection />
    <CompanySection />
    <MyPageSection />
    <BannerSection />
    <ContactSection />
    <Footer />
  </div>
);

export default MainPage;
