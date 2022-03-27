import React from "react";

import List from "@/components/list";
import "@/containers/company/SeekerSection.scoped.scss";

const SeekerSection = () => (
  <div className="seekerSection">
    <div className="title">TOP 인재</div>
    <List.Seeker />
  </div>
);

export default SeekerSection;
