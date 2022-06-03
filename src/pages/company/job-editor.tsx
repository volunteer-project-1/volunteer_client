import React from "react";

import Wrapper from "@/components/wrapper";
import Page from "@/components/page";

/**
 * 채용공고 작성 페이지.
 */
const JobEditorPage = () => (
  <Wrapper.Auth allowedAccountTypes={["company"]}>
    <Page>
      <Page.Title>채용공고 등록</Page.Title>
      <Page.Columns>Hello</Page.Columns>
    </Page>
  </Wrapper.Auth>
);

export default JobEditorPage;
