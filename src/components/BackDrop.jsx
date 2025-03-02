import React from 'react';

const BackDrop = ({className, toggle}) => {
  return <div className={`backdrop ${className}`} onClick={toggle}></div>;
};

export default BackDrop;