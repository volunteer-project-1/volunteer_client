import React from "react";
import Image from "next/image";

import { MainVisualSlider } from "@/components/common/VisualSlider";
import styles from "@/views/home/MainSection.module.scss";
import Background1 from "@/images/home/main-background1.jpg";
import LinkCard from "@/components/home/LinkCard";

const MainSection = () => (
  <div className={styles.mainSection}>
    <div className={styles.content}>
      <MainVisualSlider className={styles.slider}>
        <div>
          <Image src={Background1} alt=" " />
        </div>
        <div>
          <Image src={Background1} alt=" " />
        </div>
        <div>
          <Image src={Background1} alt=" " />
        </div>
      </MainVisualSlider>
      <div className={styles.descriptionArea}>
        <div className={styles.title1}>세상 밖으로 나오는 당신의 도전</div>
        <div className={styles.title2}>당신의 능력을 보여주세요</div>
        <div className={styles.description}>
          세상과 소통하고 싶은 당신을 위해 준비했습니다.
          <br />
          세상밖으로 나와 당신의 능력을 마음껏 펼쳐보아요!
          <br />
          <br />
          &apos;See Me&apos; 에서 여러분을 인도해 드릴 것입니다.
          <br />
          &apos;See Me&apos; 는 당신을 기다리고 있습니다.
        </div>
        <button className={styles.moreButton} type={"button"}>
          Learn More
        </button>
      </div>
      <div className={styles.linksArea}>
        <LinkCard title={"채용정보"} description={"2022년 공개채용 기업 보러가기"} url={"#"} />
        <LinkCard title={"행사정보"} description={"2022년 하계 미니 패럴림픽 참가신청"} url={"#"} />
        <LinkCard title={"채용정보"} description={"2022년 취업 설명회 사전 신청하기"} url={"#"} />
      </div>
    </div>
  </div>
);

export default MainSection;
