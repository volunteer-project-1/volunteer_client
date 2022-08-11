import React from "react";

import "@/containers/layout/Footer.scoped.scss";

const Footer = () => (
  <div className="footer">
    <div className="content">
      <img className="logo" src={"/assets/layout/footer-logo.svg"} alt="Logo" />
      <div className="description">
        <div>
          본 콘텐츠의 저작권은 저자 또는 제공사에 있으며, 이를 무단 이용하는 경우 저작권법 등에 따라 법적 책임을 질 수
          있습니다.
        </div>
        <div>
          <span className="word">법인명 : TBK(타임뱅크코리아)</span>
          <span className="word">대표자 : 손서락</span>
          <span className="word">연락처 : 010-5160-5760</span>
          <span className="word">이메일 : yarnmatch@gmail.com</span>
        </div>
      </div>
      <div className="linkArea">
        <span className="word">About</span>
        <span className="word">이용약관</span>
        <span className="word">개인정보보호</span>
        <span className="word">결제약관</span>
        <span className="word">Contact Us</span>
      </div>
      <div className="copyright">Copyright (C) TimeBanksKorea All Right Reserved.</div>
    </div>
  </div>
);

export default Footer;
