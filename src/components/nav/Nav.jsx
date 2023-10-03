import React from "react";
import "./Nav.scss";
import "../../pages/normalize/Normalize.scss";
import navLogo from "../../assets/img/nav.svg";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <div className="container">
        <div className="nav__wrapper">
          <img src={navLogo} alt="" />
          <ul className="nav__links">
            <li>
              <NavLink className={({isActive})=> isActive ? "active" : "inactive"} to="/">home</NavLink>
            </li>
            <li>
              <NavLink className={({isActive})=> isActive ? "active" : "inactive"} to="/notifications">notifications</NavLink>
            </li>
            <li>
              <NavLink className={({isActive})=> isActive ? "active" : "inactive"} to="/profile">profile</NavLink>
            </li>
            <li>
              <NavLink className={({isActive})=> isActive ? "active" : "inactive"} to="/support">support</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
