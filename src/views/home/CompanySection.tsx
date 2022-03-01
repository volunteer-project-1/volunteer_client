import React from "react";

import { strictKeys } from "@/utils/TypeUtils";
import TitledSection from "@/components/home/TitledSection";
import CompanyCard from "@/components/common/CompanyCard";
import styles from "@/views/home/CompanySection.module.scss";
import { useStoreSelector } from "@/store";

const CompanySection = () => {
  const companyMap = useStoreSelector(state => state.seeker.companyMap);

  const columnCount = 3;
  const columns: Array<Array<string>> = [];

  // ex. 3열로 배치한다면...
  // 0 | 1 | 2
  // 3 | 4 | 5
  // 6 | 7 | 8
  for (let i = 0; i < columnCount; i++) {
    columns.push(strictKeys(companyMap).filter((name, index) => index % columnCount === i));
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
              {column.map(name => (
                <CompanyCard key={name} name={name} />
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
