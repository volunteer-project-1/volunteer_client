import React from "react";
import Link from "next/link";

import { useStoreSelector } from "@/store";
import "@/containers/Header.scoped.scss";
import Logo from "@/images/layout/logo.svg";
import Login from "@/images/layout/login.svg";
import Join from "@/images/layout/join.svg";

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

const Header = () => {
  const session = useStoreSelector(state => state.user.session);

  // For test...
  const loginText = session === null ? "LOG IN" : session.type;

  return (
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
            <Link href="/auth/login">
              <a className="lg">
                <img src={Login.src} alt={"Login"} /> {loginText}
              </a>
            </Link>
            <span className="bar-login"></span>
            <Link href="/auth/join">
              <a>
                <img src={Join.src} alt={"Join"} /> JOIN US
              </a>
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
};

export default Header;
