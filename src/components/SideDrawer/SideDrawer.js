import React from "react";
import { NavLink } from "react-router-dom";
import "./SideDrawer.scss";

//functional/stateless component
const SideDrawer = props => {
  let drawerClasses = ["side-drawer"];
  //if show = true
  if (props.show) {
    drawerClasses = ["side-drawer open"];
  }

  return (
    <nav className={drawerClasses}>
      <ul className="">
        <li>
          <NavLink to="/">
            <div onClick={props.clickLink}>Home</div>
          </NavLink>
        </li>
        <li>
          <NavLink to="/blog">
            <div onClick={props.clickLink}>Blog</div>
          </NavLink>
        </li>
        <li>
          <NavLink to="/counter">
            <div onClick={props.clickLink}>Counter</div>
          </NavLink>
        </li>
        <li>
          <NavLink to="/Timer">
            <div onClick={props.clickLink}>Timer</div>
          </NavLink>
        </li>

        <li>
          <NavLink to="/about">
            <div onClick={props.clickLink}>About</div>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
export default SideDrawer;
