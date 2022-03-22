import React, { ReactNode } from "react";

import styles from "@/components/button/Button.module.scss";
import LikeOn from "@/images/home/like-on.svg";
import LikeOff from "@/images/home/like-off.svg";

interface ButtonProps {
  children: ReactNode;
}

interface LikeButtonProps {
  isLiked: boolean;
  // 클릭 시에 실행할 함수.
  onClick: () => void;
}

export default function Button({ children }: ButtonProps) {
  <div>{children}</div>;
}

Button.Like = function ButtonLike({ isLiked, onClick }: LikeButtonProps) {
  return (
    <button className={styles.likeButton} type={"button"} onClick={onClick}>
      <img className={styles.image} src={isLiked ? LikeOn.src : LikeOff.src} alt={"좋아요"} />
    </button>
  );
};
