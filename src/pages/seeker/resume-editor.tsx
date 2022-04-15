import React from "react";

import Page from "@/components/page";
import PageColumns from "@/containers/seeker/PageColumns";
import TitleSection from "@/containers/seeker/TitleSection";
import EducationSection from "@/containers/seeker/EducationSection";
import CareerSection from "@/containers/seeker/CareerSection";
import ActivitySection from "@/containers/seeker/ActivitySection";
import AwardSection from "@/containers/seeker/AwardSection";
import Menu from "@/containers/seeker/Menu";

/**
 * 구직자 프로필 작성 페이지.
 */
const ResumeEditorPage = () => (
  <Page>
    <Page.Title>이력서 작성</Page.Title>
    <PageColumns>
      <PageColumns.Item shouldFill={true}>
        <TitleSection />
        <EducationSection />
        <CareerSection />
        <ActivitySection />
        <AwardSection />
      </PageColumns.Item>
      <PageColumns.Item shouldFill={false}>
        <Menu />
      </PageColumns.Item>
    </PageColumns>
  </Page>
);

export default ResumeEditorPage;
