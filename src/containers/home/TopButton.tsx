import React from "react";

import "@/containers/home/TopButton.scoped.scss";

/**
 * 누르면 페이지 상단으로 스크롤하는 버튼.
 */
const TopButton = () => {
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button className="topButton" type={"button"} onClick={handleClick}>
      <img src={"/assets/home/top.svg"} alt={"Top"} />
      <br />
      TOP
    </button>
  );
};

export default TopButton;
