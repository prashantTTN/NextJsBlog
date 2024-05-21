"use client"
import Link from "next/link";
import styles from "../page.module.css";
import commonStyles from "./common.module.css";

const NavItem = ({ text, href, active }) => {
  return (
    <Link href={href} className={`${commonStyles.nav__item} ${ active ? "active" : "" }`} >
      {/* <a > */}
        {text}
      {/* </a> */}
    </Link>
  );
};

import React, { useState } from "react";

const MENU_LIST = [
  { text: "Home", href: "/" },
  { text: "About Us", href: "/about" },
  { text: "Blog", href: "/blog" },
];
const Navbar = () => {
  const [navActive, setNavActive] = useState(null);
  const [activeIdx, setActiveIdx] = useState(-1);

  return (
    <header className={`${commonStyles.header}`}>
      <nav className={`${commonStyles.nav}`}>
        <div onClick={() => setNavActive(!navActive)} className={`${commonStyles.nav__menu_bar}`} >
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className={`${commonStyles.nav__menu_list} ${navActive ? "active" : ""} `}>
          {MENU_LIST.map((menu, idx) => (
            <div onClick={() => { setActiveIdx(idx); setNavActive(false);}} key={menu.text} >
              <NavItem active={activeIdx === idx} {...menu} />
            </div>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;