import React from "react";

import SeekerCard, { SeekerCardProps } from "@/components/common/SeekerCard";
import styles from "@/components/common/SeekerCardList.module.scss";
import Seeker1 from "@/images/home/seeker.jpg";

// 임시로 만듬...
const exampleCards: Array<SeekerCardProps> = [
  {
    profileImage: Seeker1,
    name: "박철수",
    age: 35,
    gender: "남",
    address: "서울시",
    job: "서비스 기획자",
    career: "경력 5년차",
    handicap: "청각장애 1급",
  },
  {
    profileImage: Seeker1,
    name: "김철수",
    age: 35,
    gender: "여",
    address: "서울시",
    job: "서비스 기획자",
    career: "경력 5년차",
    handicap: "청각장애 1급",
  },
  {
    profileImage: Seeker1,
    name: "박영희",
    age: 35,
    gender: "여",
    address: "서울시",
    job: "서비스 기획자",
    career: "경력 5년차",
    handicap: "청각장애 1급",
  },
  {
    profileImage: Seeker1,
    name: "김영희",
    age: 35,
    gender: "여",
    address: "서울시",
    job: "서비스 기획자",
    career: "경력 5년차",
    handicap: "청각장애 1급",
  },
];

/**
 * 추천 구직자 카드(SeekerCard)의 리스트.
 */
const SeekerCardList = () => (
  <div className={styles.seekerCards}>
    {exampleCards.map(card => (
      <SeekerCard key={card.name} {...card} />
    ))}
  </div>
);

export default SeekerCardList;
