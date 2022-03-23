// 기존 코드.

import React, { ReactNode } from "react";
import "@/components/button/Button.scoped.scss";
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
    <button className="likeButton" type="button" onClick={onClick}>
      <img className="image" src={isLiked ? LikeOn.src : LikeOff.src} alt="좋아요" />
    </button>
  );
};
