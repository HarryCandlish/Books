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
                <a to="/books">Books </a>
              </li>
              <li>
                <a to="/about">About </a>
              </li>
              <li>
                <a to="/login">Login</a>
              </li>
              <li>
                <a to="/">Home </a>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
