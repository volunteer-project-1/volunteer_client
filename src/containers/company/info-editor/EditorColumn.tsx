import React from "react";

import Page from "@/components/page";
import InfoSection from "@/containers/company/info-editor/InfoSection";
import IntroductionSection from "@/containers/company/info-editor/IntroductionSection";
import ImageSection from "@/containers/company/info-editor/ImageSection";
import HistorySection from "@/containers/company/info-editor/HistorySection";

const EditorColumn = () => (
  <Page.Column fill>
    <InfoSection />
    <IntroductionSection />
    <HistorySection />
    <ImageSection />
  </Page.Column>
);

export default EditorColumn;
