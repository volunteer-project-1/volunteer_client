import React from "react";

import "@/news/containers/BannerSection.scoped.scss";

const BannerSection = () => (
  <div className="bannerSection">
    <img src="/assets/news/list-banner.jpg" alt="배너" />
    <div className="content">
      <div className="title">2022년도 동계 패럴림픽 참가신청</div>
      <div className="subTitle">패럴림픽에 참가해보세요!</div>
      <div className="description">
        한국 장애인 체육협회에서 여러분의 도전을 응원합니다.
        <br />
        마음껏 기량을 뽐내시기 바랍니다. 도전할때가 가장 아름답습니다.
      </div>
      <a className="link" href="https://www.paralympic.org/">
        참가신청 하러가기
      </a>
    </div>
  </div>
);

export default BannerSection;
