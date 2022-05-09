import React, { useEffect, useState } from "react";

import { Seeker } from "@/types/Dummy";
import DummyAPI from "@/api/DummyAPI";
import "@/containers/company/ResultSection.scoped.scss";

const ResultSection = () => {
  const [currentSeekerList, setCurrentSeekerList] = useState<Array<Seeker>>([]);

  useEffect(() => {
    (async () => {
      setCurrentSeekerList(await DummyAPI.getSeekerList());
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
        </div>
      ))}
    </div>
  );
};

export default ResultSection;
