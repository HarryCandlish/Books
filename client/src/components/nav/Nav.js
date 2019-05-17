import React from "react";

import navStyles from "./nav.module.scss";

const Nav = () => {
  return (
    <div>
      <nav className={navStyles.nav}>
        <ul>
          <li>
            <img className={navStyles.image} src="./nav.png" />
            <ul>
              <li>
                <a to="/books">BOOKS</a>
              </li>
              <li>
                <a to="/about">ABOUT</a>
              </li>
              <li>
                <a to="/login">LOGIN</a>
              </li>
              <li>
                <a to="/">HOME</a>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
