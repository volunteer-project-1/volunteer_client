import React from "react";

import { isNonEmpty } from "@/utils/CheckUtils";
import { useStoreSelector } from "@/store";
import Page from "@/components/page";
import StatusBox from "@/components/status-box";
import "@/containers/company/info-editor/SidebarColumn.scoped.scss";

const SidebarColumn = () => {
  const companyState = useStoreSelector(state => state.company);

  const isInfoFilled =
    isNonEmpty(companyState.company.name) &&
    isNonEmpty(companyState.company.phone_number) &&
    isNonEmpty(companyState.company.founded_at) &&
    isNonEmpty(companyState.company.address) &&
    isNonEmpty(companyState.company.industry_type);

  const isIntroductionFilled = isNonEmpty(companyState.company.introduce);

  const isHistoryFilled =
    isNonEmpty(companyState.companyHistory.history_at) && isNonEmpty(companyState.companyHistory.content);

  const handleClickSubmit = () => {};

  return (
    <Page.Column>
      <StatusBox title="기업등록 입력항목">
        <StatusBox.Category isHighlighted>필수사항</StatusBox.Category>
        <StatusBox.Item isNecessary isHighlighted={isInfoFilled}>
          기업정보
        </StatusBox.Item>
        <StatusBox.Item isNecessary isHighlighted={isIntroductionFilled}>
          기업소개
        </StatusBox.Item>
        <StatusBox.Category>선택사항</StatusBox.Category>
        <StatusBox.Item isHighlighted={isHistoryFilled}>기업연혁</StatusBox.Item>
        {/*
        <StatusBox.Item>사내 이미지</StatusBox.Item>
        */}
      </StatusBox>
      <button className="submit" onClick={handleClickSubmit}>
        기업 등록하기
      </button>
    </Page.Column>
  );
};

export default SidebarColumn;
