import React from "react";

import styles from "@/components/common/LikeButton.module.scss";
import LikeOn from "@/images/home/like-on.svg";
import LikeOff from "@/images/home/like-off.svg";

interface LikeButtonProps {
  isLiked: boolean;
  // 클릭 시에 실행할 함수.
  onClick: () => void;
}

/**
 * 메인 페이지에서 사용하는 좋아요 (하트) 버튼.
 */
const LikeButton = ({ isLiked, onClick }: LikeButtonProps) => (
  <button className={styles.likeButton} type={"button"} onClick={onClick}>
    <img className={styles.image} src={isLiked ? LikeOn.src : LikeOff.src} alt={"좋아요"} />
  </button>
);

export default LikeButton;
