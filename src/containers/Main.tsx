import React, { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";

import Slider from "@/components/slider";
import "@/containers/Main.scoped.scss";

interface MainVisualSliderType {
  img: string;
  title: string;
  subTitle: string;
  description: ReactNode;
}

const mainVisualContent: Array<MainVisualSliderType> = [
  {
    img: "main-background1.jpg",
    title: "세상 밖으로 나오는 당신의 도전",
    subTitle: "당신의 능력을 보여주세요",
    description: (
      <div>
        세상과 소통하고 싶은 당신을 위해 준비했습니다. 세상밖으로 나와 당신의 능력을 마음껏 펼쳐보아요!
        <br />
        <br />
        &apos;See Me&apos; 에서 여러분을 인도해 드릴것입니다. &apos;See Me&apos; 는 당신을 기다리고 있습니다.
      </div>
    ),
  },
  {
    img: "main-background1.jpg",
    title: "sdfs",
    subTitle: "subtitle",
    description: <div>내용 123123123</div>,
  },
];

interface MainNotiveSliderProps {
  img: string;
  group: string;
  title: string;
}
const mainNoticeContent: Array<MainNotiveSliderProps> = [
  {
    img: "main_img01@2x.jpg",
    group: "채용정보",
    title: "2022년 공개채용 기업 보러가기",
  },
];

const MainSection = () => (
  <div className="mainSection">
    <Slider.MainVisual>
      {mainVisualContent.map((list, i) => (
        <div key={i}>
          <Image {...require(`@/images/home/${list.img}`).default} alt=" " />

          <div className="descriptionArea">
            <div className="title1">{list.title}</div>
            <div className="title2">{list.subTitle}</div>
            <div className="description">{list.description}</div>
            <button className="moreButton" type="button">
              Learn More
            </button>
          </div>
        </div>
      ))}
    </Slider.MainVisual>

    <Slider.MainNotice>
      {mainNoticeContent.map((list, i) => (
        <div key={i}>
          <span className="group">{list.group}</span>
          <Link href="jvavscript:void(0)">
            <a className="title">
              {list.title}
              <div className="more">더보기</div>
            </a>
          </Link>
        </div>
      ))}
    </Slider.MainNotice>
  </div>
);

export default MainSection;
