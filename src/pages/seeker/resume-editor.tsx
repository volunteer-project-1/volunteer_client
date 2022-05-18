import React from "react";

import Wrapper from "@/components/wrapper";
import Page from "@/components/page";
// import TitleSection from "@/containers/seeker/resume-editor/TitleSection";
import InfoSection from "@/containers/seeker/resume-editor/InfoSection";
import EducationSection from "@/containers/seeker/resume-editor/EducationSection";
import CareerSection from "@/containers/seeker/resume-editor/CareerSection";
import ActivitySection from "@/containers/seeker/resume-editor/ActivitySection";
import AwardSection from "@/containers/seeker/resume-editor/AwardSection";
import PortfolioSection from "@/containers/seeker/resume-editor/PortfolioSection";
import IntroductionSection from "@/containers/seeker/resume-editor/IntroductionSection";
import Sidebar from "@/containers/seeker/resume-editor/Sidebar";

/**
 * 구직자 프로필 작성 페이지.
 */
const ResumeEditorPage = () => (
  <Wrapper.Auth allowedAccountTypes={["seeker"]}>
    <Page>
      <Page.Title>이력서 작성</Page.Title>
      <Page.Columns>
        <Page.Column fill>
          {
            // 서버에 대응되는 항목이 없는 것 같아 한줄소개는 일단 뺌.
            // <TitleSection />
          }
          <InfoSection />
          <EducationSection />
          <CareerSection />
          <ActivitySection />
          <AwardSection />
          <PortfolioSection />
          <IntroductionSection />
        </Page.Column>
        <Page.Column>
          <Sidebar />
        </Page.Column>
      </Page.Columns>
    </Page>
  </Wrapper.Auth>
);

export default ResumeEditorPage;
