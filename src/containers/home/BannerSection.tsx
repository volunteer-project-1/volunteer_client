import React from "react";

import "@/containers/home/BannerSection.scoped.scss";
import Background from "@/images/home/banner-background.jpg";
import Logo from "@/images/home/banner-logo.png";

const BannerSection = () => (
  <div className="bannerSection">
    <img className="background" src={Background.src} alt={"Banner"} />
    <div className="content">
      <div className="about">
        나는 장애인이지만
        <br />내 일에 장애는 없습니다
      </div>
      <div className="description">
        한국 장애인 고용공단에서 장애인의 일자리를 적극 주선해 드립니다.
        <br />
        많은 장애인분들이 매년 한국장애인고용공단의 지원을 받아 사회로 한발씩 다가가고 있습니다.
      </div>
      <div className="logoArea">
        <img src={Logo.src} alt={"Logo"} />
      </div>
    </div>
  </div>
);

export default BannerSection;
