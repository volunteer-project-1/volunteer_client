import React from "react";

import Page from "@/layout/containers/Page";
import ContactSection from "@/notice/containers/ContactSection";
import FAQSection from "@/notice/containers/FAQSection";

const NoticePage = () => (
  <Page>
    <Page.Title>고객센터</Page.Title>
    <ContactSection />
    <FAQSection />
  </Page>
);

export default NoticePage;
