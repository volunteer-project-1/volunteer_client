import React from "react";

import Wrapper from "@/components/wrapper";
import Page from "@/components/page";
import EditorColumn from "@/containers/company/job-editor/EditorColumn";
import SidebarColumn from "@/containers/company/job-editor/SidebarColumn";

/**
 * 채용공고 작성 페이지.
 */
const JobEditorPage = () => (
  <Wrapper.Auth allowedAccountTypes={["company"]}>
    <Page>
      <Page.Title>채용공고 등록</Page.Title>
      <Page.Columns>
        <EditorColumn />
        <SidebarColumn />
      </Page.Columns>
    </Page>
  </Wrapper.Auth>
);

export default JobEditorPage;
