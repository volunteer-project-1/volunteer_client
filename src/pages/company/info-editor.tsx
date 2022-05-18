import React from "react";

import Wrapper from "@/components/wrapper";
import Page from "@/components/page";
import InfoSection from "@/containers/company/info-editor/InfoSection";
import IntroductionSection from "@/containers/company/info-editor/IntroductionSection";
import ImageSection from "@/containers/company/info-editor/ImageSection";
import HistorySection from "@/containers/company/info-editor/HistorySection";
import Sidebar from "@/containers/company/info-editor/Sidebar";

/**
 * 기업 프로필 작성 페이지.
 */
const InfoEditorPage = () => (
  <Wrapper.Auth allowedAccountTypes={["company"]}>
    <Page>
      <Page.Title>기업 등록</Page.Title>
      <Page.Columns>
        <Page.Column fill>
          <InfoSection />
          <IntroductionSection />
          <HistorySection />
          <ImageSection />
        </Page.Column>
        <Page.Column>
          <Sidebar />
        </Page.Column>
      </Page.Columns>
    </Page>
  </Wrapper.Auth>
);

export default InfoEditorPage;
