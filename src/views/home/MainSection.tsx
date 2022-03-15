import React from "react";
import Image from "next/image";

import { MainVisualSlider } from "@/components/common/CommonSlider";
import styles from "@/views/home/MainSection.module.scss";
import Background1 from "@/images/home/main-background1.jpg";

const MainSection = () => (
  <>
    {/*  <div className={styles.mainSection}>
      <div className={styles.content}>
        <img className={styles.background} src={Background1.src} alt={"Background"} />
        <div className={styles.textArea}>
          <div className={styles.title1}>세상 밖으로 나오는 당신의 도전</div>
          <div className={styles.title2}>당신의 능력을 보여주세요</div>
          <div className={styles.description}>
            세상과 소통하고 싶은 당신을 위해 준비했습니다.
            <br />
            세상밖으로 나와 당신의 능력을 마음껏 펼쳐보아요! &apos;See Me&apos; 에서 여러분을 인도해 드릴 것입니다.
            당신의 능력을 보여주세요. &apos;See Me&apos; 는 당신을 기다리고 있습니다.
          </div>
        </div>
      </div>
    </div> */}
    <MainVisualSlider>
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
  </>
);

export default MainSection;
