import React from "react";

import Page from "@/components/page";
import StatusBox from "@/components/status-box";
import "@/containers/company/info-editor/SidebarColumn.scoped.scss";

const SidebarColumn = () => {
  const handleClickSubmit = () => {};

  return (
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
      <button className="submit" onClick={handleClickSubmit}>
        기업 등록하기
      </button>
    </Page.Column>
  );
};

export default SidebarColumn;
