import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

import { Company } from "@/types/Info";
import ROUTES from "@/constants/Routes";
import InfoAPI from "@/api/InfoAPI";
import { daysBetweenDates } from "@/utils/MathUtils";
import "@/containers/seeker/company-list/ResultSection.scoped.scss";

const ResultSection = () => {
  const router = useRouter();
  const [currentCompanyList, setCurrentCompanyList] = useState<Array<Company>>([]);

  useEffect(() => {
    (async () => {
      setCurrentCompanyList(await InfoAPI.getCompanyList());
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
            <button
              className="connect"
              onClick={() => {
                router.push(ROUTES.seeker.companyInfo);
              }}
            >
              지원하기
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default ResultSection;
