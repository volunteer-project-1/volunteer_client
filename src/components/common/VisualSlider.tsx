import React, { ReactNode } from "react";
import Slider, { Settings } from "react-slick";
import classNames from "classnames";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface SliderProps {
  className?: string;
  children: ReactNode;
}

/* 메인페이지 Visual slider  */
const MainVisualSlider = ({ className, children }: SliderProps) => {
  const settings: Settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    autoplay: true,
    fade: true,
  };

  return (
    <Slider {...settings} className={classNames("mainVisualSlide", className)}>
      {children}
    </Slider>
  );
};

const MainVisualSlider2 = ({ children }: SliderProps) => {
  const settings: Settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return <Slider {...settings}>{children}</Slider>;
};

/* 추가 예정  */
// export { MainVisualSlider as default };
// export default MainVisualSlider;

export { MainVisualSlider as default, MainVisualSlider };
