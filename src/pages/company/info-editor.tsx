import React from "react";

import Wrapper from "@/common/components/wrapper";
import Page from "@/layout/containers/Page";
import EditorColumn from "@/company/containers/info-editor/EditorColumn";
import SidebarColumn from "@/company/containers/info-editor/SidebarColumn";

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
