import React from "react";
import Link from "next/link";

import Logo from "@/images/layout/logo.svg";

interface Menu {
  name: string;
  url: string;
}

const menus: Array<Menu> = [
  { name: "구직활동", url: "/" },
  { name: "인재채용", url: "/company/seeker-list" },
  { name: "미디어 뉴스", url: "/" },
  { name: "고객센터", url: "/" },
];

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
          {menus.map(({ name, url }) => (
            <li key={name}>
              <Link href={url}>
                <a>{name}</a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
);

export default Header;
