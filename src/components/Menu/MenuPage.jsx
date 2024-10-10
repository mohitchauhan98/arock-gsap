import React, { useRef } from "react";
import MenuLeft from "./MenuLeft";
import MenuRight from "./MenuRight";
import { useGSAP } from "@gsap/react";
import gsap from "gsap/all";

const MenuPage = (props) => {
  const menuRef = useRef(null);
  useGSAP(() => {
    if (props.menuOpen) {
      gsap.to(menuRef.current, {
        top: 0,
      });
    }else {
      gsap.to(menuRef.current, {
        top: "100%",
      });
    }
  }, [props.menuOpen]
);

  return (
    <div ref = {menuRef} className="fixed flex h-screen w-full bg-gradient-to-b from-[#1A1A1A] to-[#1A1A1A] top-0 z-50">
      <MenuLeft />
      <MenuRight menuOpen = {props.menuOpen} setMenuOpen = {props.setMenuOpen}/>
    </div>
  );
};

export default MenuPage;
