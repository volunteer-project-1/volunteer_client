import React from "react";

import Wrapper from "@/components/wrapper";
import Page from "@/components/page";
import StatusBox from "@/components/status-box";
import InfoSection from "@/containers/company/info-editor/InfoSection";
import IntroductionSection from "@/containers/company/info-editor/IntroductionSection";
import ImageSection from "@/containers/company/info-editor/ImageSection";
import HistorySection from "@/containers/company/info-editor/HistorySection";

/**
 * 기업 프로필 작성 페이지.
 */
const InfoEditorPage = () => (
  <Wrapper.Auth allowedUserTypes={["company"]}>
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
          <StatusBox title="기업등록 입력항목">
            <StatusBox.Category>필수사항</StatusBox.Category>
            <StatusBox.Item isHighlighted isNecessary>
              기업정보
            </StatusBox.Item>
            <StatusBox.Item isNecessary>기업소개</StatusBox.Item>
            <StatusBox.Category>선택사항</StatusBox.Category>
            <StatusBox.Item>기업연혁</StatusBox.Item>
            <StatusBox.Item>사내 이미지</StatusBox.Item>
          </StatusBox>
        </Page.Column>
      </Page.Columns>
    </Page>
  </Wrapper.Auth>
);

export default InfoEditorPage;
