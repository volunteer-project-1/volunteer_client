import React from "react";

import Wrapper from "@/components/wrapper";
import Page from "@/components/page";

/**
 * 기업정보 페이지.
 */
const CompanyInfoPage = () => (
  <Wrapper.Auth allowedUserTypes={["seeker"]}>
    <Page>비모소프트</Page>
  </Wrapper.Auth>
);

export default CompanyInfoPage;
