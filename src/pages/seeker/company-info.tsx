import React from "react";

import Wrapper from "@/components/wrapper";
import Page from "@/components/page";
import BannerSection from "@/containers/seeker/company-info/BannerSection";

/**
 * 기업정보 페이지.
 */
const CompanyInfoPage = () => (
  <Wrapper.Auth allowedAccountTypes={["seeker"]}>
    <Page>
      <BannerSection />
    </Page>
  </Wrapper.Auth>
);

export default CompanyInfoPage;
