import React, { useState } from "react";

import { daysBetweenDates } from "@/utils/DateUtils";
import { Company } from "@/models/Company";
import { useStoreSelector } from "@/store";
import Button from "@/components/button";
import "@/components/card/Card.scoped.scss";
import { Seeker } from "@/models/Seeker";

interface CompanyCardProps {
  company: Company;
}
interface SeekerCardProps {
  seeker: Seeker;
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

const SeekerCard = ({ seeker }: SeekerCardProps) => {
  const session = useStoreSelector(state => state.user.session);
  const isLoggedOn = session?.type === "Company";

  // API 호출로 대체 예정.
  const [isLiked, setLike] = useState(false);

  const onClickSuggest = () => {
    if (!isLoggedOn) {
      alert("회사로 로그인하세요!");
    } else {
      alert("제안하기!");
    }
  };

  const onClickLike = () => {
    if (!isLoggedOn) {
      alert("회사로 로그인하세요!");
    } else {
      setLike(!isLiked);
    }
  };

  return (
    <div className="seekerCard">
      <div className="profileArea">
        <img className="profileImage" src={seeker.imageURL} alt={seeker.name} />
        <div className="likeButtonArea">
          <Button.Like isLiked={isLiked} onClick={onClickLike} />
        </div>
      </div>
      <div className="nameArea">
        <span className="name">{seeker.name}</span>
        <span className="age">
          {seeker.age}세({seeker.gender})
        </span>
      </div>
      <div>{seeker.address} 거주</div>
      <div className="jobArea">
        {seeker.job}/ {seeker.career}
      </div>
      <div>{seeker.handicap}</div>
      <button className="suggestButton" type={"button"} onClick={onClickSuggest}>
        제안하기
      </button>
    </div>
  );
};

export default Object.assign(Card, {
  Company: CompanyCard,
  Seeker: SeekerCard,
});