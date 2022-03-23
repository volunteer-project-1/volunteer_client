import React, { ReactNode } from "react";

import "@/components/button/Button.scoped.scss";
import LikeOn from "@/images/home/like-on.svg";
import LikeOff from "@/images/home/like-off.svg";

interface ButtonProps {
  children: ReactNode;
}

const Button = ({ children }: ButtonProps) => {
  <div>{children}</div>;
};

interface LikeButtonProps {
  isLiked: boolean;
  onClick: () => void;
}

const LikeButton = ({ isLiked, onClick }: LikeButtonProps) => (
  <button className="likeButton" type="button" onClick={onClick}>
    <img className="image" src={isLiked ? LikeOn.src : LikeOff.src} alt="좋아요" />
  </button>
);

export default Object.assign(Button, {
  Like: LikeButton,
});
