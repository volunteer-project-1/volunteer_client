import React, { ReactNode, useState } from "react";
import Slider, { Settings } from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "@/components/slider/Slider.scoped.scss";

interface SliderProps {
  children: ReactNode;
}

const Sliders = ({ children }: SliderProps) => {
  <div>{children}</div>;
};

const MainVisualSlider = ({ children }: SliderProps) => {
  const ref = React.useRef<Slider>(null);
  const [count, setCount] = useState(true);

  const settings: Settings = {
    arrows: false,
    dots: true,
    infinite: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 1000,
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

    console.log("count", count);
  };

  return (
    <div className={"mainVisualSlider"}>
      <Slider {...settings} ref={ref}>
        {children}
      </Slider>
    </div>
  );
};

const MainNoticeSlider = ({ children }: SliderProps) => {
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
      <Slider {...settings}>{children}</Slider>
    </div>
  );
};

export default Object.assign(Sliders, {
  MainVisual: MainVisualSlider,
  MainNotice: MainNoticeSlider,
});
