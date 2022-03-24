import React from "react";
import Image from "next/image";
import Slider from "@/components/slider";

import "@/containers/Main.scoped.scss";
export interface SliderProps {
  img: string;
  title: string;
  subTitle: string;
  description: string;
}

const sliderContent: Array<SliderProps> = [
  {
    img: "main-background1.jpg",
    title: "세상 밖으로 나오는 당신의 도전",
    subTitle: "당신의 능력을 보여주세요",
    description:
      "<div>세상과 소통하고 싶은 당신을 위해 준비했습니다. 세상밖으로 나와 당신의 능력을 마음껏 펼쳐보아요!  <br><br> 'See Me' 에서 여러분을 인도해 드릴것입니다. 'See Me' 는 당신을 기다리고 있습니다.</div>",
  },
  {
    img: "main-background1.jpg",
    title: "sdfs",
    subTitle: "subtitle",
    description: "<div>내용 123123123</div>",
  },
];

const MainSection = () => (
  <div className="mainSection">
    <div className="content">
      <Slider.MainVisual className="slider">
        {sliderContent.map((list, i) => (
          <div key={i}>
            <Image {...require(`@/images/home/${list.img}`).default} alt=" " />

            <div className="descriptionArea">
              <div className="title1">{list.title}</div>
              <div className="title2">{list.subTitle}</div>
              <div className="description" dangerouslySetInnerHTML={{ __html: list.description }}></div>
              <button className="moreButton" type="button">
                Learn More
              </button>
            </div>
          </div>
        ))}
      </Slider.MainVisual>
    </div>
  </div>
);

export default MainSection;
