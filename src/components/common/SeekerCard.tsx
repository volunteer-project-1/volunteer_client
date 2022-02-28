import React from "react";

import { useStoreDispatch, useStoreSelector } from "@/store";
import CompanySlice from "@/store/Company";
import LikeButton from "@/components/common/LikeButton";
import styles from "@/components/common/SeekerCard.module.scss";

export interface SeekerCardProps {
  name: string;
}

/**
 * 추천 구직자의 정보를 보여주는 카드.
 */
const SeekerCard = ({ name }: SeekerCardProps) => {
  const seeker = useStoreSelector(state => state.company.seekerMap[name]);
  const dispatch = useStoreDispatch();

  const onClickSuggest = () => {
    alert("당신은 합격!");
  };

  const onClickLike = () => {
    dispatch(CompanySlice.actions.toggleSeekerLike({ name }));
  };

  return (
    <div className={styles.seekerCard}>
      <div className={styles.profileArea}>
        <img className={styles.profileImage} src={seeker.profileImage.src} alt={name} />
        <div className={styles.likeButtonArea}>
          <LikeButton isLiked={seeker.isLiked} onClick={onClickLike} />
        </div>
      </div>
      <div className={styles.nameArea}>
        <span className={styles.name}>{name}</span>
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
