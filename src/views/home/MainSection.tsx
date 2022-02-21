import React from "react";

import styles from "@/views/home/MainSection.module.scss";
import Background1 from "@/images/home/main-background1.jpg";

const MainSection = () => (
  <div className={styles.mainSection}>
    <img className={styles.background} src={Background1.src} alt={"Background"} />
  </div>
);

export default MainSection;
