import React, { ReactNode, useState } from "react";
import SlickSlider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { dLog } from "@/utils/DebugUtils";
import "@/components/slider/Slider.scoped.scss";

interface SliderProps {
  children: ReactNode;
}

const Slider = ({ children }: SliderProps) => {
  <div>{children}</div>;
};

const VisualSlider = ({ children }: SliderProps) => {
  const ref = React.useRef<SlickSlider>(null);
  const [count, setCount] = useState(true);

  const settings: Settings = {
    arrows: false,
    dots: true,
    infinite: true,
    speed: 2000,
    autoplay: true,
    autoplaySpeed: 4000,
    fade: true,
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
    <div className={"mainVisualSlider"}>
      <SlickSlider {...settings} ref={ref}>
        {children}
      </SlickSlider>
    </div>
  );
};

const NoticeSlider = ({ children }: SliderProps) => {
  const settings: Settings = {
    arrows: false,
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="mainNoticeSlider">
      <SlickSlider {...settings}>{children}</SlickSlider>
    </div>
  );
};

export default Object.assign(Slider, {
  Visual: VisualSlider,
  Notice: NoticeSlider,
});
