import React from "react";

import SeekerCardList from "@/components/common/SeekerCardList";
import styles from "@/views/company/seeker-list/SeekerSection.module.scss";

const SeekerSection = () => (
  <div className={styles.seekerSection}>
    <div className={styles.title}>TOP 인재</div>
    <SeekerCardList />
  </div>
);

export default SeekerSection;
