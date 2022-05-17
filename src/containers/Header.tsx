import React, { useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import classNames from "classnames";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

import ROUTES from "@/constants/Routes";
import { useStoreSelector } from "@/store";
import "@/containers/Header.scoped.scss";

interface Menu {
  name: string;
  // 현재 메뉴가 어느 route에 해당하는지 판단하기 위해 사용.
  // TODO: 하드코딩 대신 ROUTES 객체 활용하도록 변경.
  prefix: string;
  pages: Array<{ name: string; url: string }>;
}

const menus: Array<Menu> = [
  {
    name: "구직활동",
    prefix: "/seeker",
    pages: [
      { name: "구직자 프로필 작성", url: ROUTES.seeker.resumeEditor },
      { name: "기업 리스트", url: ROUTES.seeker.companyList },
    ],
  },
  {
    name: "인재채용",
    prefix: "/company",
    pages: [
      { name: "기업 프로필 작성", url: ROUTES.company.infoEditor },
      { name: "구직자 리스트", url: ROUTES.company.seekerList },
    ],
  },
  { name: "미디어 뉴스", prefix: "/news", pages: [{ name: "미디어 뉴스 리스트", url: ROUTES.news.newsList }] },
  { name: "고객센터", prefix: "/notice", pages: [{ name: "고객센터", url: ROUTES.notice }] },
];

const Header = () => {
  const account = useStoreSelector(state => state.auth.account);
  const router = useRouter();

  const menusRef = useRef<Array<HTMLLIElement | null>>(menus.map(() => null));
  const [selectedMenuIndex, setSelectedMenuIndex] = useState<number | null>(null);

  const isLoggedIn = account !== null;

  return (
    <div className="headerWrap">
      <div className="inner">
        <div className="header_top">
          <div className="logo">
            <Link href={ROUTES.home}>
              <a>
                <img src={"/assets/layout/header-logo.svg"} alt="SeeMe" />
              </a>
            </Link>
          </div>
          <div className="cs_login">
            {isLoggedIn ? (
              <>
                <span className="item_login">{account.type === "seeker" ? "구직자" : "회사"}</span>
                <span className="bar_login" />
                <Link href={"/api/v1/auth/logout"}>
                  <a className="item_login">
                    <img src={"/assets/layout/header-login.svg"} alt={"Logout"} /> LOG OUT
                  </a>
                </Link>
              </>
            ) : (
              <>
                <Link href={ROUTES.auth.login}>
                  <a className="item_login">
                    <img src={"/assets/layout/header-login.svg"} alt={"Login"} /> LOG IN
                  </a>
                </Link>
                <span className="bar_login" />
                <Link href={ROUTES.auth.join}>
                  <a className="item_login">
                    <img src={"/assets/layout/header-join.svg"} alt={"Join"} /> JOIN US
                  </a>
                </Link>
              </>
            )}
          </div>
        </div>

        <div className="header_scroll">
          <ul className="gnb">
            {menus.map((menu, index) => (
              <li
                className={classNames("menu", {
                  isActive: router.pathname.startsWith(menu.prefix),
                })}
                key={menu.name}
                ref={element => {
                  menusRef.current[index] = element;
                }}
              >
                <button
                  className="menu_name"
                  type="button"
                  onClick={() => {
                    if (index === selectedMenuIndex) {
                      setSelectedMenuIndex(null);
                    } else {
                      setSelectedMenuIndex(index);
                    }
                  }}
                >
                  {menu.name}
                </button>
                <Menu
                  open={index === selectedMenuIndex}
                  onClose={() => {
                    setSelectedMenuIndex(null);
                  }}
                  anchorEl={menusRef.current[index]}
                  // Menu 열었을 때 스크롤바 사라지는 현상 방지.
                  disableScrollLock
                >
                  {menu.pages.map(page => (
                    <MenuItem
                      sx={{
                        minWidth: menusRef.current[index]?.clientWidth,
                      }}
                      key={page.name}
                      onClick={() => {
                        router.push(page.url);
                      }}
                    >
                      {page.name}
                    </MenuItem>
                  ))}
                </Menu>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
