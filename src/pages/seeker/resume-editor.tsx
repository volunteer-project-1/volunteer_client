import React from "react";

import Page from "@/components/page";
import Columns from "@/containers/seeker/Columns";
import TitleSection from "@/containers/seeker/TitleSection";
import EducationSection from "@/containers/seeker/EducationSection";

/**
 * 구직자 프로필 작성 페이지.
 */
const ResumeEditorPage = () => (
  <Page>
    <Page.Title>이력서 작성</Page.Title>
    <Columns>
      <div>
        <TitleSection />
        <EducationSection />
      </div>
    </Columns>
  </Page>
);

export default ResumeEditorPage;
