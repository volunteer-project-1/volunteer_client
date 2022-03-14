import React, { ReactNode } from "react";
import Slider, { Settings } from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface SliderProps {
  children: ReactNode;
}

/* 메인페이지 Visual slider  */
const MainVisualSlider = ({ children }: SliderProps) => {
  const settings: Settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    autoplay: true,
    fade: true,
  };

  return (
    <div>
      <Slider {...settings} className="mainVisualSlide">
        {children}
      </Slider>
    </div>
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
