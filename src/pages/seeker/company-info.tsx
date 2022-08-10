import React from "react";

import Wrapper from "@/common/components/wrapper";
import Page from "@/layout/containers/Page";
import BannerSection from "@/seeker/containers/company-info/BannerSection";
import InfoSection from "@/seeker/containers/company-info/InfoSection";

/**
 * 기업정보 페이지.
 */
const CompanyInfoPage = () => (
  <Wrapper.Auth allowedAccountTypes={["seeker"]}>
    <Page>
      <BannerSection />
      <InfoSection />
    </Page>
  </Wrapper.Auth>
);

export default CompanyInfoPage;
