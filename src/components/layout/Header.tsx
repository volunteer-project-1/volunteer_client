import React from "react";
import Link from "next/link";
import style from "./layout.module.scss";

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
      <li>
        <Link href="/">
          <a>구직활동</a>
        </Link>
      </li>
      <li>
        <Link href="/">
          <a>인재채용</a>
        </Link>
      </li>
      <li>
        <Link href="/">
          <a>미디어 뉴스</a>
        </Link>
      </li>
      <li>
        <Link href="/">
          <a>고객센터</a>
        </Link>
      </li>
    </ul>
  </div>
);

export default Header;
