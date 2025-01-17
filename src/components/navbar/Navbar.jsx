import React from "react";
import Logo from "./Logo";
import Menu from "./Menu";

const Navbar = (props) => {
  return (
    <div className="flex w-full items-start justify-between px-7 py-7">
      <Logo />
      <Menu menuOpen = {props.menuOpen} setMenuOpen = {props.setMenuOpen}/>
    </div>
  );
};

export default Navbar;
