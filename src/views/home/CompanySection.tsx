import React, { useEffect, useState } from "react";

import { Company } from "@/models/Company";
import { getCompanyList } from "@/api/API";
import TitledSection from "@/components/home/TitledSection";
import CompanyCard from "@/components/common/CompanyCard";
import styles from "@/views/home/CompanySection.module.scss";

const CompanySection = () => {
  const [currentCompanyList, setCurrentCompanyList] = useState<Array<Company>>([]);

  useEffect(() => {
    (async () => {
      setCurrentCompanyList(await getCompanyList());
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
      titleParts={["당신을", "기다립니다"]}
      descriptionParts={[
        "당신의 능력을 펼쳐보세요! 당신을 기다리는 기업이 이만큼 존재한답니다.",
        "어서어서 지원해주세요!",
      ]}
    >
      <div className={styles.content}>
        <div className={styles.grid}>
          {columns.map((column, index) => (
            <div className={styles.column} key={index}>
              {column.map(company => (
                <CompanyCard key={company.id} company={company} />
              ))}
            </div>
          ))}
        </div>
        <button type={"button"} className={styles.moreButton} onClick={onClickMore}>
          더보기
        </button>
      </div>
    </TitledSection>
  );
};

export default CompanySection;
