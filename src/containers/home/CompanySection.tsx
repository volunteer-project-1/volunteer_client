import React, { useEffect, useState } from "react";

import { Company } from "@/types/Info";
import InfoAPI from "@/api/InfoAPI";
import TitledSection from "@/containers/home/TitledSection";
import Card from "@/components/card";
import "@/containers/home/CompanySection.scoped.scss";

const CompanySection = () => {
  const [currentCompanyList, setCurrentCompanyList] = useState<Array<Company>>([]);

  useEffect(() => {
    (async () => {
      setCurrentCompanyList(await InfoAPI.getCompanyList());
    })();
  }, []);

  const columnCount = 3;
  const columns: Array<Array<Company>> = [];

  // ex. 3열로 배치한다면...
  // 0 | 1 | 2
  // 3 | 4 | 5
  // 6 | 7 | 8
  for (let i = 0; i < columnCount; i++) {
    columns.push(currentCompanyList.filter((company, index) => index % columnCount === i));
  }

  const handleClickMore = () => {
    alert("더보기!");
  };

  return (
    <TitledSection
      backgroundStyle={"dark"}
      titleStyle={"left"}
      titleParts={["당신을", "기다립니다"]}
      descriptionParts={["당신의 능력을 펼쳐보세요! 당신을 기다리는 기업이 이만큼 존재한답니다."]}
    >
      <div className="companySection">
        <div className="grid">
          {columns.map((column, index) => (
            <div className="column" key={index}>
              {column.map(company => (
                <Card.Company key={company.id} company={company} />
              ))}
            </div>
          ))}
        </div>
        <button type={"button"} className="moreButton" onClick={handleClickMore}>
          더보기
        </button>
      </div>
    </TitledSection>
  );
};

export default CompanySection;
