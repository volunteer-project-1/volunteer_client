import React, { useEffect, useState } from "react";

import { Company } from "@/types/Dummy";
import DummyAPI from "@/api/DummyAPI";
import { daysBetweenDates } from "@/utils/MathUtils";
import "@/containers/seeker/company-list/ResultSection.scoped.scss";

const ResultSection = () => {
  const [currentCompanyList, setCurrentCompanyList] = useState<Array<Company>>([]);

  useEffect(() => {
    (async () => {
      setCurrentCompanyList(await DummyAPI.getCompanyList());
    })();
  }, []);

  return (
    <div className="resultSection">
      <div className="header">
        <span className="title">검색결과</span>
        <span className="count">{currentCompanyList.length}</span>
      </div>
      {currentCompanyList.map(company => {
        const dDays = company.dueDate ? `D-${daysBetweenDates(new Date(), new Date(company.dueDate))}` : "상시채용";

        return (
          <div className="row" key={company.id}>
            {/* 회사 로고로 대체 예정. */}
            <img className="image" src={company.imageURL} alt={company.name} />
            <div className="content">
              <div className="line">
                <span className="name">{company.name}</span>
              </div>
              <div className="line">
                <span className="dDays">{dDays}</span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ResultSection;
