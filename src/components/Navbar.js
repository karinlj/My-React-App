import React from "react";
import { Link, NavLink } from "react-router-dom";
import ToggleBtn from "./SideDrawer/ToggleBtn";

//functional/stateless component accepting prop
const Navbar = props =>
  <nav className="nav">
    <div>
      {/* passed prop from App.js */}
      <ToggleBtn click={props.handleDrawerClick} />
    </div>
    <h3>
      <a className="logo">My React App</a>
    </h3>
    <ul className="links">
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/blog">Blog</NavLink>
      </li>
      <li>
        <NavLink to="/counter">Counter</NavLink>
      </li>
      <li>
        <NavLink to="/Timer">Timer</NavLink>
      </li>
      <li>
        <NavLink to="/about">About</NavLink>
      </li>
    </ul>
  </nav>;
export default Navbar;
