import React, { useState } from "react";
import { useRouter } from "next/router";

import { Company, Seeker } from "@/types/Info";
import ROUTES from "@/constants/Routes";
import { daysBetweenDates } from "@/utils/MathUtils";
import { useStoreSelector } from "@/states";
import Button from "@/components/button";
import "@/components/card/Card.scoped.scss";

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
  const router = useRouter();
  const account = useStoreSelector(state => state.auth.account);
  const isLoggedOn = account?.type === "seeker";

  // API 호출로 대체 예정.
  const [isLiked, setLike] = useState(false);

  const dDays = company.dueDate ? `D-${daysBetweenDates(new Date(), new Date(company.dueDate))}` : "상시채용";

  const handleClickLike = () => {
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
          <Button.Like isLiked={isLiked} onClick={handleClickLike} />
        </div>
      </div>
      <div
        className="contentArea"
        role="button"
        tabIndex={0}
        onKeyUp={() => {
          // Do nothing.
        }}
        onClick={() => {
          router.push(ROUTES.seeker.companyInfo);
        }}
      >
        <div className="name">{company.name}</div>
        <div className="description">{company.description}</div>
        <div className="dDays">{dDays}</div>
      </div>
    </div>
  );
};

const SeekerCard = ({ seeker }: SeekerCardProps) => {
  const router = useRouter();
  const account = useStoreSelector(state => state.auth.account);
  const isLoggedOn = account?.type === "company";

  // API 호출로 대체 예정.
  const [isLiked, setLike] = useState(false);

  const handleClickSuggest = () => {
    if (!isLoggedOn) {
      alert("회사로 로그인하세요!");
    } else {
      router.push(ROUTES.company.seekerResume);
    }
  };

  const handleClickLike = () => {
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
          <Button.Like isLiked={isLiked} onClick={handleClickLike} />
        </div>
      </div>
      <div className="nameArea">
        <span className="name">{seeker.name}</span>
        <span className="age">
          {seeker.age}세({seeker.sex})
        </span>
      </div>
      <div className="addressArea">{seeker.address} 거주</div>
      <div className="jobArea">
        {seeker.job}/ {seeker.career}
      </div>
      <div className="handicapArea">{seeker.handicap}</div>
      <button className="suggestButton" type={"button"} onClick={handleClickSuggest}>
        제안하기
      </button>
    </div>
  );
};

export default Object.assign(Card, {
  Company: CompanyCard,
  Seeker: SeekerCard,
});
