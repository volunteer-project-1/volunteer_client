import React from "react";

import Page from "@/components/page";
import StatusBox from "@/components/status-box";
import "@/containers/company/job-editor/SidebarColumn.scoped.scss";

const SidebarColumn = () => {
  const handleClickSubmit = () => {};

  return (
    <Page.Column>
      <StatusBox title="채용공고 입력항목">
        <StatusBox.Category>필수사항</StatusBox.Category>
        <StatusBox.Item isHighlighted isNecessary>
          모집분야
        </StatusBox.Item>
        <StatusBox.Item isNecessary>담당업무</StatusBox.Item>
        <StatusBox.Item isNecessary>자격요건</StatusBox.Item>
        <StatusBox.Item isNecessary>우대사항</StatusBox.Item>
        <StatusBox.Item isNecessary>근무조건</StatusBox.Item>
        <StatusBox.Category>선택사항</StatusBox.Category>
        <StatusBox.Item>전형절차</StatusBox.Item>
      </StatusBox>
      <button className="submit" onClick={handleClickSubmit}>
        채용공고 등록하기
      </button>
    </Page.Column>
  );
};

export default SidebarColumn;
