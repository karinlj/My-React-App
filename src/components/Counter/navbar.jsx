import React from "react";

const Navbar = props => {
  //const Navbar = ({ totalCounters }) => {
  console.log(props);

  const { totalCounters } = props;
  return (
    <nav className="navbar navbar-light">
      <a className="navbar-brand" href="#">
        Navbar <span className="badge badge-pill badge-secondary">{totalCounters}</span>
      </a>
    </nav>
  );
};

export default Navbar;
