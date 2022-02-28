import React from "react";

import { daysBetweenDates } from "@/utils/DateUtils";
import { useStoreDispatch, useStoreSelector } from "@/store";
import SeekerSlice from "@/store/Seeker";
import LikeButton from "@/components/common/LikeButton";
import styles from "@/components/common/CompanyCard.module.scss";

interface CompanyCardProps {
  name: string;
}

const CompanyCard = ({ name }: CompanyCardProps) => {
  const company = useStoreSelector(state => state.seeker.companyMap[name]);
  const dispatch = useStoreDispatch();

  const dDays = company.dueDate ? `D-${daysBetweenDates(new Date(), new Date(company.dueDate))}` : "상시채용";

  const onClickLike = () => {
    dispatch(SeekerSlice.actions.toggleCompanyLike({ name }));
  };

  return (
    <div className={styles.companyCard}>
      <div className={styles.imageArea}>
        <img className={styles.companyImage} src={company.companyImage.src} alt={name} />
        <div className={styles.likeButtonArea}>
          <LikeButton isLiked={company.isLiked} onClick={onClickLike} />
        </div>
      </div>
      <div className={styles.contentArea}>
        <div className={styles.name}>{name}</div>
        <div>{company.description}</div>
        <div className={styles.dDays}>{dDays}</div>
      </div>
    </div>
  );
};

export default CompanyCard;
