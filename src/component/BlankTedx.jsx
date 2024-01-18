import React, { useEffect, useRef } from 'react';
import './Blanktedx.css';
import image from "./assets/blank.png";

const BlankTedx = () => {

  return (
    <div className='blanktedimg'>
      <img src={image} alt='' className='tedximage' />
    </div>
  );
};

export default BlankTedx;
