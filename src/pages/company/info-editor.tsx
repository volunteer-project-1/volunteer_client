import React from "react";

import Wrapper from "@/components/wrapper";
import Page from "@/components/page";
import EditorColumn from "@/containers/company/info-editor/EditorColumn";
import SidebarColumn from "@/containers/company/info-editor/SidebarColumn";

/**
 * 기업 프로필 작성 페이지.
 */
const InfoEditorPage = () => (
  <Wrapper.Auth allowedAccountTypes={["company"]}>
    <Page>
      <Page.Title>기업 등록</Page.Title>
      <Page.Columns>
        <EditorColumn />
        <SidebarColumn />
      </Page.Columns>
    </Page>
  </Wrapper.Auth>
);

export default InfoEditorPage;
