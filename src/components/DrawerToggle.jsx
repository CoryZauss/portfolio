import React from 'react';

const DrawerToggle = ({toggle}) => {
  return (
  <button className="toggle-button" onClick={toggle} >
    <div className="toggle-button-line"></div>
    <div className="toggle-button-line"></div>
    <div className="toggle-button-line"></div>
    </button>
  )
};

export default DrawerToggle;