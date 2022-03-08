import React from "react";

import { Company } from "@/models/Company";
import { daysBetweenDates } from "@/utils/DateUtils";
import LikeButton from "@/components/common/LikeButton";
import styles from "@/components/common/CompanyCard.module.scss";

interface CompanyCardProps {
  company: Company;
}

const CompanyCard = ({ company }: CompanyCardProps) => {
  const dDays = company.dueDate ? `D-${daysBetweenDates(new Date(), new Date(company.dueDate))}` : "상시채용";

  const onClickLike = () => {
    // Do nothing.
  };

  return (
    <div className={styles.companyCard}>
      <div className={styles.imageArea}>
        <img className={styles.companyImage} src={company.imageURL} alt={company.name} />
        <div className={styles.likeButtonArea}>
          <LikeButton isLiked={true} onClick={onClickLike} />
        </div>
      </div>
      <div className={styles.contentArea}>
        <div className={styles.name}>{company.name}</div>
        <div>{company.description}</div>
        <div className={styles.dDays}>{dDays}</div>
      </div>
    </div>
  );
};

export default CompanyCard;
