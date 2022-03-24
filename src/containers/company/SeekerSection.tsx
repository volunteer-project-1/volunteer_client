import React from "react";

import List from "@/components/list";
import styles from "@/containers/company/SeekerSection.module.scss";

const SeekerSection = () => (
  <div className={styles.seekerSection}>
    <div className={styles.title}>TOP 인재</div>
    <List.Seeker />
  </div>
);

export default SeekerSection;
