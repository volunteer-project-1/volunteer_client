import React from "react";
import Link from "next/link";
import Image from "next/image";

import Logo from "@/images/home-logo.svg";

const menus = ["구직활동", "인재채용", "미디어 뉴스", "고객센터"];

const Header = () => (
  <div className="headerWrap">
    <div className="header_top">
      <div className="logo">
        <Link href="/">
          <a>
            <Image src={Logo} alt="SeeMe" />
          </a>
        </Link>
      </div>
      <div className="cs_login">
        <Link href="/">
          <a className="lg">로그인</a>
        </Link>
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
);

export default Header;
