import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

import { Seeker } from "@/types/Info";
import ROUTES from "@/constants/Routes";
import InfoAPI from "@/api/InfoAPI";
import "@/containers/company/seeker-list/ResultSection.scoped.scss";

const ResultSection = () => {
  const router = useRouter();
  const [currentSeekerList, setCurrentSeekerList] = useState<Array<Seeker>>([]);

  useEffect(() => {
    (async () => {
      setCurrentSeekerList(await InfoAPI.getSeekerList());
    })();
  }, []);

  return (
    <div className="resultSection">
      <div className="header">
        <span className="title">검색결과</span>
        <span className="count">{currentSeekerList.length}</span>
      </div>
      {currentSeekerList.map(seeker => (
        <div className="row" key={seeker.id}>
          <img className="image" src={seeker.imageURL} alt={seeker.name} />
          <div className="content">
            <div className="line">
              <span className="name">{seeker.name}</span>
              <span className="age">
                {seeker.age}세({seeker.sex})
              </span>
            </div>
            <div className="line">
              <span className="address">{seeker.address} 거주</span>
              <span className="job">
                {seeker.job}/ {seeker.career}
              </span>
            </div>
            <div className="line">
              <span className="handicap">{seeker.handicap}</span>
            </div>
          </div>
          <button
            type="button"
            className="connect"
            onClick={() => {
              router.push(ROUTES.company.seekerResume);
            }}
          >
            제안하기
          </button>
        </div>
      ))}
    </div>
  );
};

export default ResultSection;
