import React from "react";
import Nav from "./Nav";
import DrawerToggle from "./DrawerToggle";

const SideDrawer = ({
  toggle,
  darktheme,
  changetheme,
  changecomponent,
  current,
}) => {
  return (
    <div className="side-drawer">
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
