import React from "react";

import Page from "@/components/page";
import PageColumns from "@/containers/seeker/PageColumns";
import InfoSection from "@/containers/seeker/InfoSection";
import TitleSection from "@/containers/seeker/TitleSection";
import EducationSection from "@/containers/seeker/EducationSection";
import CareerSection from "@/containers/seeker/CareerSection";
import ActivitySection from "@/containers/seeker/ActivitySection";
import AwardSection from "@/containers/seeker/AwardSection";
import PortfolioSection from "@/containers/seeker/PortfolioSection";
import Sidebar from "@/components/sidebar";

/**
 * 구직자 프로필 작성 페이지.
 */
const ResumeEditorPage = () => (
  <Page>
    <Page.Title>이력서 작성</Page.Title>
    <PageColumns>
      <PageColumns.Item shouldFill={true}>
        <InfoSection />
        <TitleSection />
        <EducationSection />
        <CareerSection />
        <ActivitySection />
        <AwardSection />
        <PortfolioSection />
      </PageColumns.Item>
      <PageColumns.Item shouldFill={false}>
        <Sidebar title="이력서 항목">
          <Sidebar.Category isHighlighted>필수사항</Sidebar.Category>
          <Sidebar.Item isHighlighted isNecessary>
            인적사항
          </Sidebar.Item>
          <Sidebar.Item isNecessary>영상이력서</Sidebar.Item>
          <Sidebar.Category>선택사항</Sidebar.Category>
          <Sidebar.Item>학력</Sidebar.Item>
          <Sidebar.Item>경력</Sidebar.Item>
          <Sidebar.Item>대외활동</Sidebar.Item>
          <Sidebar.Item>교육이수</Sidebar.Item>
          <Sidebar.Item>자격증</Sidebar.Item>
          <Sidebar.Item>수상경력</Sidebar.Item>
          <Sidebar.Item>포트폴리오</Sidebar.Item>
          <Sidebar.Item>자기소개서</Sidebar.Item>
          <Sidebar.Item>희망근무사항</Sidebar.Item>
        </Sidebar>
      </PageColumns.Item>
    </PageColumns>
  </Page>
);

export default ResumeEditorPage;
