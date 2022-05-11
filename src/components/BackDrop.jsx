import React from 'react';

const BackDrop = ({toggle}) => {
  return (

    <div className="backdrop" onClick={toggle}></div>

  )
};

export default BackDrop;