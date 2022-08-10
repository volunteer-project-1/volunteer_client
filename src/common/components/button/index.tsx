import React, { ReactNode } from "react";

import "@/common/components/button/Button.scoped.scss";

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
    <img className="image" src={isLiked ? "/assets/home/like-on.svg" : "/assets/home/like-off.svg"} alt="좋아요" />
  </button>
);

export default Object.assign(Button, {
  Like: LikeButton,
});
