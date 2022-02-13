import React from "react";
import Image from "next/image";

import styles from "@/components/home/LikeButton.module.scss";
import LikeOff from "@/images/home-like-off.svg";

interface LikeButtonProps {
  // 클릭 시에 실행할 함수.
  onClick: () => void;
}

/**
 * 메인 페이지에서 사용하는 좋아요 (하트) 버튼.
 */
const LikeButton = ({ onClick }: LikeButtonProps) => (
  <button className={styles.likeButton} type={"button"} onClick={onClick}>
    <span className={styles.imageArea}>
      <Image src={LikeOff} alt={"좋아요"} layout={"fixed"} />
    </span>
  </button>
);

export default LikeButton;
