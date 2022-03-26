import React, { useEffect, useState } from "react";

import { Company } from "@/types/User";
import UserAPI from "@/api/UserAPI";
import TitledSection from "@/components/home/TitledSection";
import "@/components/home/CompanySection.scoped.scss";
import Card from "@/components/card";

const CompanySection = () => {
  const [currentCompanyList, setCurrentCompanyList] = useState<Array<Company>>([]);

  useEffect(() => {
    (async () => {
      setCurrentCompanyList(await UserAPI.getCompanyList());
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

  const onClickMore = () => {
    alert("더보기!");
  };

  return (
    <TitledSection
      backgroundStyle={"dark"}
      titleStyle={"left"}
      titleParts={["당신을", "기다립니다"]}
      descriptionParts={["당신의 능력을 펼쳐보세요! 당신을 기다리는 기업이 이만큼 존재한답니다."]}
    >
      <div className="content">
        <div className="grid">
          {columns.map((column, index) => (
            <div className="column" key={index}>
              {column.map(company => (
                <Card.Company key={company.id} company={company} />
              ))}
            </div>
          ))}
        </div>
        <button type={"button"} className="moreButton" onClick={onClickMore}>
          더보기
        </button>
      </div>
    </TitledSection>
  );
};

export default CompanySection;
