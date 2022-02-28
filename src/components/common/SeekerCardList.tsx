import React from "react";

import { useStoreSelector } from "@/store";
import SeekerCard from "@/components/common/SeekerCard";
import styles from "@/components/common/SeekerCardList.module.scss";

/**
 * 추천 구직자 카드(SeekerCard)의 리스트.
 */
const SeekerCardList = () => {
  const seekerMap = useStoreSelector(state => state.company.seekerMap);

  return (
    <div className={styles.seekerCards}>
      {Object.keys(seekerMap).map(name => (
        <SeekerCard key={name} name={name} />
      ))}
    </div>
  );
};

export default SeekerCardList;
