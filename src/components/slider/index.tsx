import React, { ReactNode, useState } from "react";
import Slider, { Settings } from "react-slick";
import classNames from "classnames";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "@/components/slider/Slider.scoped.scss";

interface SliderProps {
  className?: string;
  children: ReactNode;
}

const Sliders = ({ children }: SliderProps) => {
  <div>{children}</div>;
};
const MainVisualSlider = ({ className, children }: SliderProps) => {
  const ref = React.useRef<any>();
  const [count, setCount] = useState(true);

  const settings: Settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 1000,
    fade: true,
  };
  function play() {
    if (count === true) {
      ref.current.slickPause();
      setCount(false);
    } else {
      ref.current.slickPlay();
      setCount(true);
    }
    console.log("count", count);
  }

  return (
    <div>
      <Slider {...settings} className={classNames("mainVisualSlider", className)} ref={ref}>
        {children}
      </Slider>
      <div style={{ textAlign: "center" }}>
        <button className="button" onClick={play}>
          {count ? "stop" : "play"}
        </button>
      </div>
    </div>
  );
};

const MainNoticeSlider = ({ className, children }: SliderProps) => {
  const settings: Settings = {
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
    <div>
      <Slider {...settings} className={classNames("visualSlider", className)}>
        {children}
      </Slider>
    </div>
  );
};

export default Object.assign(Sliders, {
  MainVisual: MainVisualSlider,
  MainNotive: MainNoticeSlider,
});
