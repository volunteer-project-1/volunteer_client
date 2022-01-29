import React from "react";
import Link from "next/link";

const Header = () => (
  <div className="headerWrap">
    <div className="log">
      <Link href="/">
        <a>SeeMe</a>
      </Link>
    </div>
    <ul className="gnb">
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

    <div className="cs_login">
      <Link href="/">
        <a>고객센터</a>
      </Link>
      <Link href="/">
        <a>고객센터</a>
      </Link>
    </div>
  </div>
);

export default Header;
