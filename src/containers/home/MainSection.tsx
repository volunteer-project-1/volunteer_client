import React, { ReactNode } from "react";

import ROUTES from "@/constants/Routes";
import Slider from "@/components/slider";
import "@/containers/home/MainSection.scoped.scss";
import "@/components/slider/Slider.scoped.scss";

interface MainVisualSliderType {
  img: string;
  title: string;
  subTitle: string;
  description: ReactNode;
  linkLabel: string;
  linkURL: string;
}

const mainVisualContent: Array<MainVisualSliderType> = [
  {
    img: "/assets/home/main-background1.jpg",
    title: "세상 밖으로 나오는 당신의 도전",
    subTitle: "당신의 능력을 보여주세요",
    description: (
      <div>
        세상과 소통하고 싶은 당신을 위해 준비했습니다. <br /> 세상밖으로 나와 당신의 능력을 마음껏 펼쳐보아요!
        <br />
        <br />
        &apos;See Me&apos; 에서 여러분을 인도해 드릴것입니다. <br /> &apos;See Me&apos; 는 당신을 기다리고 있습니다.
      </div>
    ),
    linkLabel: "See me 일자리 보기",
    linkURL: ROUTES.seeker.companyList,
  },
  {
    img: "/assets/home/main-background2.jpg",
    title: "2023년도 패럴림픽 참가 안내",
    subTitle: "나의 한계를 시험해보세요!",
    description: (
      <div>
        2023년도 패럴림픽이 개최하게 되었습니다. <br /> 여러분의 한계를 시험하고 한계를 뛰어넘어 보세요!
        <br />
        <br />
        스포츠를 통해 하나가 되었을 때 우리는
        <br /> 믿을 수 없는 일을 만들어냅니다.
      </div>
    ),
    linkLabel: "패럴림픽 참가신청하기",
    linkURL: "https://www.paralympic.org/",
  },
];

interface MainNotiveSliderProps {
  img: string;
  group: string;
  title: string;
}
const mainNoticeContent: Array<MainNotiveSliderProps> = [
  {
    img: "/assets/home/main_img01@2x.jpg",
    group: "채용정보",
    title: "2022년 공개채용 기업 보러가기보러가기보러가기보러가기보러가기보러가기보러가기",
  },
  {
    img: "/assets/home/main_img02@2x.jpg",
    group: "채용정보",
    title: "2022년 공개채용 기업 보러가기",
  },
  {
    img: "/assets/home/main_img03@2x.jpg",
    group: "채용정보",
    title: "2022년 공개채용 기업 보러가기",
  },
  {
    img: "/assets/home/main_img03@2x.jpg",
    group: "채용정보",
    title: "2022년 공개채용 기업 보러가기",
  },
   {
    img: "/assets/home/main_img03@2x.jpg",
    group: "채용정보",
    title: "2022년 공개채용 기업 보러가기",
  },
  // {
  //   img: "",
  //   group: "채용정보",
  //   title: "2022년 공개채용 기업 보러가기",
  // },
];

const MainSection = () => (
  <div className="mainSection">
    <Slider.Visual>
      {mainVisualContent.map((list, i) => (
        <div key={i} className="descriptionMain_wrap">
          <img src={list.img} alt="" />
          <div className="descriptionArea">
            <div className="title1">{list.title}</div>
            <div className="title2">{list.subTitle}</div>
            <div className="description">{list.description}</div>
            <a className="link" href={list.linkURL}>
              {list.linkLabel}
            </a>
          </div>
        </div>
      ))}
    </Slider.Visual>

    <Slider.Notice>
      {mainNoticeContent.map((list, i) => (
        <div className="descriptionNotice_wrap">
          <a className="link " href="/" key={i}>
            <div className="box">
              <div>
              <span className="group">{list.group}</span>
              <p className="title">{list.title}</p>
              <div className="more">
                <span className="blind">더보기</span>
                </div>
                </div>
            </div>
            {list.img ? (
              <div className="img">
                <img src={list.img} alt="" />
              </div>
            ) : (
              <div className="no_img blind">미리보기 이미지가 없습니다</div>
            )}
          </a>
        </div>
      ))}
    </Slider.Notice>
  </div>
);
export default MainSection;
