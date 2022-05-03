import React from "react";

import Page from "@/components/page";
import ContactSection from "@/containers/notice/ContactSection";
import FAQSection from "@/containers/notice/FAQSection";

const NoticePage = () => (
  <Page>
    <Page.Title>고객센터</Page.Title>
    <ContactSection />
    <FAQSection />
  </Page>
);

export default NoticePage;
