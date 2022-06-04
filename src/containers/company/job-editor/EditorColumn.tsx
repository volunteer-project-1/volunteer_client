import React from "react";

import Page from "@/components/page";
import DescriptionSection from "@/containers/company/job-editor/DescriptionSection";
import ConditionSection from "@/containers/company/job-editor/ConditionSection";

const EditorColumn = () => (
  <Page.Column fill>
    <DescriptionSection />
    <ConditionSection />
  </Page.Column>
);

export default EditorColumn;
