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
    speed: 2000,
    autoplay: true,
    autoplaySpeed: 100,
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
      <Slider {...settings} className={classNames("visualSlider", className)} ref={ref}>
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

export default Object.assign(Sliders, {
  MainVisual: MainVisualSlider,
});
