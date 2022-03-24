import React, { useState } from "react";

import { daysBetweenDates } from "@/utils/DateUtils";
import { Company } from "@/models/Company";
import { useStoreSelector } from "@/store";
import Button from "@/components/button";
import "@/components/card/Card.scoped.scss";

interface CompanyCardProps {
  company: Company;
}

const Card = ({ company }: CompanyCardProps) => {
  <div>{company}</div>;
};

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
    <div className="companyCard">
      <div className="imageArea">
        <img className="companyImage" src={company.imageURL} alt={company.name} />
        <div className="likeButtonArea">
          <Button.Like isLiked={isLiked} onClick={onClickLike} />
        </div>
      </div>
      <div className="contentArea">
        <div className="name">{company.name}</div>
        <div>{company.description}</div>
        <div className="dDays">{dDays}</div>
      </div>
    </div>
  );
};

export default Object.assign(Card, {
  Company: CompanyCard,
});
