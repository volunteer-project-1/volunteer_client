import React from "react";

import Wrapper from "@/components/wrapper";
import Page from "@/components/page";
import EditorColumn from "@/containers/seeker/resume-editor/EditorColumn";
import SidebarColumn from "@/containers/seeker/resume-editor/SidebarColumn";

/**
 * 구직자 프로필 작성 페이지.
 */
const ResumeEditorPage = () => (
  <Wrapper.Auth allowedAccountTypes={["seeker"]}>
    <Page>
      <Page.Title>이력서 작성</Page.Title>
      <Page.Columns>
        <EditorColumn />
        <SidebarColumn />
      </Page.Columns>
    </Page>
  </Wrapper.Auth>
);

export default ResumeEditorPage;
