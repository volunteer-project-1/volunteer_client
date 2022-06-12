import React from "react";

import "@/containers/seeker/company-info/BannerSection.scoped.scss";

const BannerSection = () => (
  <div className="bannerSection">
    <img className="banner" src="/assets/seeker/company-info-banner.jpg" alt="Banner" />
    <div className="content">
      <img className="logo" src="/assets/home/company1.jpg" alt="Logo" />
      <div className="column">
        <div className="row">
          <div className="name">비모소프트</div>
        </div>
        <div className="row">
          <div className="description">영상편집을 누구나 사용하기 쉬운 비모소프트 인재를 영입합니다.</div>
        </div>
        <div className="row">
          <div className="dDays">D-10</div>
        </div>
      </div>
    </div>
  </div>
);

export default BannerSection;
