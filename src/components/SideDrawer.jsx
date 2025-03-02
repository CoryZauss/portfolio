import React from "react";
import Nav from "./Nav";
import DrawerToggle from "./DrawerToggle";

const SideDrawer = ({
  toggle,
  darktheme,
  changetheme,
  changecomponent,
  current,
  className
}) => {
  return (
    <div className={`side-drawer ${className}`}>
      <div className="inside-toggle">
        <DrawerToggle toggle={toggle} />
      </div>
      <Nav
        darktheme={darktheme}
        changetheme={changetheme}
        changecomponent={changecomponent}
        current={current}
      />
    </div>
  );
};

export default SideDrawer;
