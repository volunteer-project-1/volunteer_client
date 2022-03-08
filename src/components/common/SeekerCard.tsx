import React from "react";

import { Seeker } from "@/models/Seeker";
import LikeButton from "@/components/common/LikeButton";
import styles from "@/components/common/SeekerCard.module.scss";

export interface SeekerCardProps {
  seeker: Seeker;
}

/**
 * 추천 구직자의 정보를 보여주는 카드.
 */
const SeekerCard = ({ seeker }: SeekerCardProps) => {
  const onClickSuggest = () => {
    alert("당신은 합격!");
  };

  const onClickLike = () => {
    // Do nothing.
  };

  return (
    <div className={styles.seekerCard}>
      <div className={styles.profileArea}>
        <img className={styles.profileImage} src={seeker.imageURL} alt={seeker.name} />
        <div className={styles.likeButtonArea}>
          <LikeButton isLiked={true} onClick={onClickLike} />
        </div>
      </div>
      <div className={styles.nameArea}>
        <span className={styles.name}>{seeker.name}</span>
        <span className={styles.age}>
          {seeker.age}세({seeker.gender})
        </span>
      </div>
      <div>{seeker.address} 거주</div>
      <div className={styles.jobArea}>
        {seeker.job}/ {seeker.career}
      </div>
      <div>{seeker.handicap}</div>
      <button className={styles.suggestButton} type={"button"} onClick={onClickSuggest}>
        제안하기
      </button>
    </div>
  );
};

export default SeekerCard;
