import React from "react";

import { isNonEmpty } from "@/utils/CheckUtils";
import { useRequest } from "@/utils/APIUtils";
import { useStoreSelector } from "@/store";
import Page from "@/components/page";
import StatusBox from "@/components/status-box";
import "@/containers/company/info-editor/SidebarColumn.scoped.scss";
import CompanyAPI from "@/api/CompanyAPI";

const SidebarColumn = () => {
  const account = useStoreSelector(state => state.auth.account);
  const companyState = useStoreSelector(state => state.company);
  const doRequest = useRequest();

  const isInfoFilled =
    isNonEmpty(companyState.company.name) &&
    isNonEmpty(companyState.company.phone_number) &&
    isNonEmpty(companyState.company.founded_at) &&
    isNonEmpty(companyState.company.address) &&
    isNonEmpty(companyState.company.industry_type);

  const isIntroductionFilled = isNonEmpty(companyState.company.introduce);

  const isHistoryFilled = companyState.companyHistories.every(
    history => isNonEmpty(history.history_at) && isNonEmpty(history.content)
  );

  const isNecessaryFilled = isInfoFilled && isIntroductionFilled;

  const handleClickSubmit = async () => {
    if (!isNecessaryFilled) {
      alert("필수사항들을 채워주세요!");
      return;
    }

    if (!account) {
      return;
    }

    await doRequest(
      Promise.all([
        CompanyAPI.updateCompany(companyState.company),
        // TODO: 기업 연혁 적용.
        // isHistoryFilled ? CompanyAPI.updateCompanyHistory(companyState.companyHistory) : undefined,
      ])
    );

    alert("기업 정보 생성/업데이트에 성공했습니다!");
  };

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
        {/*
        <StatusBox.Category>선택사항</StatusBox.Category>
        <StatusBox.Item isHighlighted={isHistoryFilled}>기업연혁</StatusBox.Item>
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
