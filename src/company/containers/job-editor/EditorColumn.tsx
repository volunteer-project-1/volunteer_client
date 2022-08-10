import React from "react";

import Page from "@/layout/containers/Page";
import DescriptionSection from "@/company/containers/job-editor/DescriptionSection";
import ConditionSection from "@/company/containers/job-editor/ConditionSection";

const EditorColumn = () => (
  <Page.Column fill>
    <DescriptionSection />
    <ConditionSection />
  </Page.Column>
);

export default EditorColumn;
