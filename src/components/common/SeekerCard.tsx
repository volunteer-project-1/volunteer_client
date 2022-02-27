import React from "react";

import LikeButton from "@/components/common/LikeButton";
import styles from "@/components/common/SeekerCard.module.scss";

export interface SeekerCardProps {
  profileImage: StaticImageData;
  name: string;
  age: number;
  gender: "남" | "여";
  address: string;
  job: string;
  career: string;
  handicap: string;
}

/**
 * 추천 구직자의 정보를 보여주는 카드.
 */
const SeekerCard = ({ profileImage, name, age, gender, address, job, career, handicap }: SeekerCardProps) => {
  const onClickSuggest = () => {
    alert("당신은 합격!");
  };

  const onClickLike = () => {
    alert("좋아요!");
  };

  return (
    <div className={styles.seekerCard}>
      <div className={styles.profileArea}>
        <img className={styles.profileImage} src={profileImage.src} alt={name} />
        <div className={styles.likeButtonArea}>
          <LikeButton onClick={onClickLike} />
        </div>
      </div>
      <div className={styles.nameArea}>
        <span className={styles.name}>{name}</span>
        <span className={styles.age}>
          {age}세({gender})
        </span>
      </div>
      <div>{address} 거주</div>
      <div className={styles.jobArea}>
        {job}/ {career}
      </div>
      <div>{handicap}</div>
      <button className={styles.suggestButton} type={"button"} onClick={onClickSuggest}>
        제안하기
      </button>
    </div>
  );
};

export default SeekerCard;
