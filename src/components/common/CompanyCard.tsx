import React, { useState } from "react";

import { daysBetweenDates } from "@/utils/DateUtils";
import { Company } from "@/models/Company";
import { useStoreSelector } from "@/store";
import LikeButton from "@/components/common/LikeButton";
import styles from "@/components/common/CompanyCard.module.scss";

interface CompanyCardProps {
  company: Company;
}

const CompanyCard = ({ company }: CompanyCardProps) => {
  const session = useStoreSelector(state => state.user.session);
  const isLoggedOn = session?.type === "Seeker";

  // API 호출로 대체 예정.
  const [isLiked, setLike] = useState(false);

  const dDays = company.dueDate ? `D-${daysBetweenDates(new Date(), new Date(company.dueDate))}` : "상시채용";

  const onClickLike = () => {
    if (!isLoggedOn) {
      alert("구직자로 로그인하세요!");
    } else {
      setLike(!isLiked);
    }
  };

  return (
    <div className={styles.companyCard}>
      <div className={styles.imageArea}>
        <img className={styles.companyImage} src={company.imageURL} alt={company.name} />
        <div className={styles.likeButtonArea}>
          <LikeButton isLiked={isLiked} onClick={onClickLike} />
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
