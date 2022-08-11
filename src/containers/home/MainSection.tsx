import React from "react";

import VisualSlider from "@/containers/home/VisualSlider";
import NoticeSlider from "@/containers/home/NoticeSlider";
import "@/containers/home/MainSection.scoped.scss";

const MainSection = () => (
  <div className="mainSection">
    <VisualSlider />
    <NoticeSlider />
  </div>
);
export default MainSection;
