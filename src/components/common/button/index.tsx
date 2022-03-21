import React from "react";
import styles from "@/components/common/button/Button.module.scss";
import LikeOn from "@/images/home/like-on.svg";
import LikeOff from "@/images/home/like-off.svg";

interface LikeButtonProps {
  isLiked: boolean;
  // 클릭 시에 실행할 함수.
  onClick: () => void;
}

export default function Button({ children }) {
  <div>{children}</div>;
}

Button.Like = function ButtonLike({ isLiked, onClick }: LikeButtonProps) {
  return (
    <button className={styles.likeButton} type={"button"} onClick={onClick}>
      <img className={styles.image} src={isLiked ? LikeOn.src : LikeOff.src} alt={"좋아요"} />
    </button>
  );
};
