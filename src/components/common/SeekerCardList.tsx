import React, { useEffect, useState } from "react";

import { Seeker } from "@/models/Seeker";
import { getSeekerList } from "@/api/API";
import SeekerCard from "@/components/common/SeekerCard";
import styles from "@/components/common/SeekerCardList.module.scss";

/**
 * 추천 구직자 카드(SeekerCard)의 리스트.
 */
const SeekerCardList = () => {
  const [currentSeekerList, setCurrentSeekerList] = useState<Array<Seeker>>([]);

  useEffect(() => {
    (async () => {
      setCurrentSeekerList(await getSeekerList());
    })();
  }, []);

  return (
    <div className={styles.seekerCards}>
      {currentSeekerList.map(seeker => (
        <SeekerCard key={seeker.id} seeker={seeker} />
      ))}
    </div>
  );
};

export default SeekerCardList;
