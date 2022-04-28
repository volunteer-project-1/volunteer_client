import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import classNames from "classnames";

import ROUTES from "@/constants/Routes";
import { useStoreSelector } from "@/store";
import "@/containers/Header.scoped.scss";

interface Menu {
  name: string;
  url: string;
  // 현재 메뉴가 어느 route에 해당하는지 판단하기 위해 사용.
  // TODO: 하드코딩 대신 ROUTES 객체 활용하도록 변경.
  prefix: string;
}

const menus: Array<Menu> = [
  { name: "구직활동", url: ROUTES.seeker.resumeEditor, prefix: "/seeker" },
  { name: "인재채용", url: ROUTES.company.seekerList, prefix: "/company" },
  { name: "미디어 뉴스", url: ROUTES.home, prefix: "/news" },
  { name: "고객센터", url: ROUTES.notice, prefix: "/notice" },
];

const Header = () => {
  const session = useStoreSelector(state => state.auth.session);
  const router = useRouter();

  // For test...
  const loginText = session === null ? "LOG IN" : session.type;

  return (
    <div className="headerWrap">
      <div className="inner">
        <div className="header_top">
          <div className="logo">
            <Link href={ROUTES.home}>
              <a>
                <div className="ima">
                  <img src={"/assets/layout/header-logo.svg"} alt="SeeMe" className="logo" />
                </div>
              </a>
            </Link>
          </div>
          <div className="cs_login">
            <Link href={ROUTES.auth.login}>
              <a className="lg">
                <img src={"/assets/layout/header-login.svg"} alt={"Login"} /> {loginText}
              </a>
            </Link>
            <span className="bar-login"></span>
            <Link href={ROUTES.auth.join}>
              <a>
                <img src={"/assets/layout/header-join.svg"} alt={"Join"} /> JOIN US
              </a>
            </Link>
          </div>
        </div>

        <div className="header_scroll">
          <ul className="gnb">
            {menus.map(({ name, url, prefix }) => (
              <li
                className={classNames("menu", {
                  isActive: router.pathname.startsWith(prefix),
                })}
                key={name}
              >
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
