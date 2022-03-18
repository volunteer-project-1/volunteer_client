import React, { ReactNode, useState } from "react";
import Slider, { Settings } from "react-slick";
import classNames from "classnames";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import styles from "@/components/common/VisualSlider.module.scss";

interface SliderProps {
  className?: string;
  children: ReactNode;
}

/* 메인페이지 Visual slider  */
const MainVisualSlider = ({ className, children }: SliderProps) => {
  const ref = React.useRef<any>();
  const [count, setCount] = useState(true);

  const settings: Settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    autoplay: true,
    autoplaySpeed: 100,
    fade: true,
  };
  const play = function () {
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
    <div>
      <Slider {...settings} className={classNames(styles.visualSlider, className)} ref={ref}>
        {children}
      </Slider>
      <div style={{ textAlign: "center" }}>
        <button className="button" onClick={play}>
          Play
        </button>
      </div>
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
