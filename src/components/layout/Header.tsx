import React from "react";
import Link from "next/link";

import Logo from "@/images/home-logo.svg";

const menus = ["구직활동", "인재채용", "미디어 뉴스", "고객센터"];

const Header = () => (
  <div className="headerWrap">
    <div className="inner">
      <div className="header_top">
        <div className="logo">
          <Link href="/">
            <a>
              <div className="ima">
                <img src={Logo.src} alt="SeeMe" className="logo" />
              </div>
            </a>
          </Link>
        </div>
        <div className="cs_login">
          <Link href="/">
            <a className="lg">로그인</a>
          </Link>
          <span className="bar-login"></span>
          <Link href="/">
            <a>회원가입</a>
          </Link>
        </div>
      </div>

      <div className="header_scroll">
        <ul className="gnb">
          {menus.map((menu, index) => (
            <li key={index}>
              <Link href="/">
                <a>{menu}</a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
);

export default Header;
