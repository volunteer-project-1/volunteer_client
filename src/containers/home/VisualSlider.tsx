import React, { ReactNode, useState } from "react";
import SlickSlider, { Settings } from "react-slick";

import { dLog } from "@/utils/DebugUtils";
import ROUTES from "@/constants/Routes";
import "@/containers/home/VisualSlider.scoped.scss";

interface SliderItem {
  img: string;
  title: string;
  subTitle: string;
  description: ReactNode;
  linkLabel: string;
  linkURL: string;
}

const sliderItems: Array<SliderItem> = [
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

const VisualSlider = () => {
  const ref = React.useRef<SlickSlider>(null);
  const [count, setCount] = useState(true);

  const settings: Settings = {
    arrows: false,
    dots: true,
    speed: 2000,
    autoplay: true,
    autoplaySpeed: 4000,
    fade: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    appendDots: dots => (
      // 이 element는 className이 자동으로 slick-dots로 고정됨.
      <div>
        {dots}
        <button type="button" className="pauseButton" onClick={play}>
          <span className="pauseIcon" />
          <span className="pauseIcon" />
        </button>
      </div>
    ),
  };

  const play = () => {
    if (ref.current === null) {
      return;
    }

    if (count === true) {
      ref.current.slickPause();
      setCount(false);
    } else {
      ref.current.slickPlay();
      setCount(true);
    }

    dLog("count", count);
  };

  return (
    <div className="visualSlider">
      <SlickSlider {...settings} ref={ref}>
        {sliderItems.map((list, i) => (
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
      </SlickSlider>
    </div>
  );
};

export default VisualSlider;
