import React from "react";

import List from "@/common/components/list";
import "@/company/containers/seeker-list/SeekerSection.scoped.scss";

const SeekerSection = () => (
  <div className="seekerSection">
    <List.Seeker />
  </div>
);

export default SeekerSection;
