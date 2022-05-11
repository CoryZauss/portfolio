import React from 'react';
import Nav from './Nav'
import DrawerToggle from './DrawerToggle'

const SideDrawer = ({toggle}) => {
  return (
    <div className="side-drawer">
      <div className="inside-toggle">
        <DrawerToggle toggle={toggle}/>

      </div>
      <Nav />
    </div>
  )
};

export default SideDrawer;