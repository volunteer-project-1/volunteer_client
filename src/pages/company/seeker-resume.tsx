import React from "react";

import Wrapper from "@/components/wrapper";
import Page from "@/components/page";
import ViewerColumn from "@/containers/company/seeker-resume/ViewerColumn";

/**
 * 구직자 프로필 보기 페이지.
 */
const SeekerResumePage = () => (
  <Wrapper.Auth allowedAccountTypes={["company"]}>
    <Page>
      <Page.Title>창의적인 인재가 여기에 있습니다!</Page.Title>
      <Page.Columns>
        <ViewerColumn />
      </Page.Columns>
    </Page>
  </Wrapper.Auth>
);

export default SeekerResumePage;
