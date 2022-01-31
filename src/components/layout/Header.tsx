import React from "react";
import Link from "next/link";
import style from "./layout.module.scss";
const menus = ["구직활동", "인재채용", "미디어 뉴스", "고객센터"];

const Header = () => (
  <div className={style.headerWrap}>
    <div className={style.logo}>
      <Link href="/">
        <a>SeeMe</a>
      </Link>
    </div>
    <div className={style.cs_login}>
      <Link href="/">
        <a className="lg">로그인</a>
      </Link>
      <Link href="/">
        <a>회원가입</a>
      </Link>
    </div>

    <ul className={style.gnb}>
      {menus.map((menu, index) => {
        return (
          <li key={index}>
            <Link href="/">
              <a>{menu}</a>
            </Link>
          </li>
        );
      })}
    </ul>
  </div>
);

export default Header;
