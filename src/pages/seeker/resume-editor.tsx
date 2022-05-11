import React from "react";

import Page from "@/components/page";
import StatusBox from "@/components/status-box";
// import TitleSection from "@/containers/seeker/resume-editor/TitleSection";
import InfoSection from "@/containers/seeker/resume-editor/InfoSection";
import EducationSection from "@/containers/seeker/resume-editor/EducationSection";
import CareerSection from "@/containers/seeker/resume-editor/CareerSection";
import ActivitySection from "@/containers/seeker/resume-editor/ActivitySection";
import AwardSection from "@/containers/seeker/resume-editor/AwardSection";
import PortfolioSection from "@/containers/seeker/resume-editor/PortfolioSection";

/**
 * 구직자 프로필 작성 페이지.
 */
const ResumeEditorPage = () => (
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
