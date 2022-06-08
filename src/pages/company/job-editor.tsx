import React, { useEffect } from "react";

import Wrapper from "@/components/wrapper";
import Page from "@/components/page";
import EditorColumn from "@/containers/company/job-editor/EditorColumn";
import SidebarColumn from "@/containers/company/job-editor/SidebarColumn";

/**
 * 채용공고 작성 페이지.
 */
const JobEditorPage = () => {
  useEffect(() => {
    alert("채용공고는 아직 등록하기 버튼이 동작하지 않습니다. 빠른 시일 내에 구현하겠습니다.");
  }, []);

  return (
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
};

export default JobEditorPage;
