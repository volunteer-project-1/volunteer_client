import React from "react";

import "@/containers/notice/ContactSection.scoped.scss";

const ContactSection = () => (
  <div className="contactSection">
    <div className="phoneBox">
      <img src="/assets/notice/phone.jpg" alt="전화번호" />
      <div className="phoneNumber">010-5160-5760</div>
      <div className="email">E-mail : yarnmatch@gmail.com</div>
      <div className="time">
        운영시간 : AM 9:00 ~ PM 7:00
        <br />
        (점심시간 : PM 1:00 ~ PM 2:00)
      </div>
    </div>
    <div className="kakaoBox">
      <img src="/assets/notice/kakao.jpg" alt="카카오톡" />
      <div className="kakaoID">KAKAO TALK ID</div>
      <div className="kakaoName">SEEME1006</div>
      <a className="connectButton" href="https://open.kakao.com/o/st3XARqd">
        카카오톡으로 상담하기
      </a>
    </div>
  </div>
);

export default ContactSection;
