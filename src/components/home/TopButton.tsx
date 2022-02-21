import React from "react";

import styles from "@/components/home/TopButton.module.scss";
import Icon from "@/images/home/top.svg";

/**
 * 누르면 페이지 상단으로 스크롤하는 버튼.
 */
const TopButton = () => {
  const onClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button className={styles.topButton} type={"button"} onClick={onClick}>
      <img src={Icon.src} alt={"Top"} />
      <br />
      TOP
    </button>
  );
};

export default TopButton;
