import React from "react";

import Page from "@/components/page";
import InfoSection from "@/containers/seeker/InfoSection";
import TitleSection from "@/containers/seeker/TitleSection";
import EducationSection from "@/containers/seeker/EducationSection";
import CareerSection from "@/containers/seeker/CareerSection";
import ActivitySection from "@/containers/seeker/ActivitySection";
import AwardSection from "@/containers/seeker/AwardSection";
import PortfolioSection from "@/containers/seeker/PortfolioSection";
import StatusBox from "@/components/status-box";

/**
 * 구직자 프로필 작성 페이지.
 */
const ResumeEditorPage = () => (
  <Page>
    <Page.Title>이력서 작성</Page.Title>
    <Page.Columns>
      <Page.Column fill>
        <InfoSection />
        <TitleSection />
        <EducationSection />
        <CareerSection />
        <ActivitySection />
        <AwardSection />
        <PortfolioSection />
      </Page.Column>
      <Page.Column>
        <StatusBox title="이력서 항목">
          <StatusBox.Category isHighlighted>필수사항</StatusBox.Category>
          <StatusBox.Item isHighlighted isNecessary>
            인적사항
          </StatusBox.Item>
          <StatusBox.Item isNecessary>영상이력서</StatusBox.Item>
          <StatusBox.Category>선택사항</StatusBox.Category>
          <StatusBox.Item>학력</StatusBox.Item>
          <StatusBox.Item>경력</StatusBox.Item>
          <StatusBox.Item>대외활동</StatusBox.Item>
          <StatusBox.Item>교육이수</StatusBox.Item>
          <StatusBox.Item>자격증</StatusBox.Item>
          <StatusBox.Item>수상경력</StatusBox.Item>
          <StatusBox.Item>포트폴리오</StatusBox.Item>
          <StatusBox.Item>자기소개서</StatusBox.Item>
          <StatusBox.Item>희망근무사항</StatusBox.Item>
        </StatusBox>
      </Page.Column>
    </Page.Columns>
  </Page>
);

export default ResumeEditorPage;
