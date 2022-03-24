import React from "react";
import Image from "next/image";

import { MainVisualSlider } from "@/components/common/VisualSlider";
import "@/containers/Main.scoped.scss";
import Background1 from "@/images/home/main-background1.jpg";
import LinkCard from "@/components/home/LinkCard";

const MainSection = () => (
  <div className="mainSection">
    <div className="content">
      <MainVisualSlider className="slider">
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
      <div className="descriptionArea">
        <div className="title1">세상 밖으로 나오는 당신의 도전</div>
        <div className="title2">당신의 능력을 보여주세요</div>
        <div className="description">
          세상과 소통하고 싶은 당신을 위해 준비했습니다.
          <br />
          세상밖으로 나와 당신의 능력을 마음껏 펼쳐보아요!
          <br />
          <br />
          &apos;See Me&apos; 에서 여러분을 인도해 드릴 것입니다.
          <br />
          &apos;See Me&apos; 는 당신을 기다리고 있습니다.
        </div>
        <button className="moreButton" type="button">
          Learn More
        </button>
      </div>
    </div>
  </div>
);

export default MainSection;