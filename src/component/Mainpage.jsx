import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Mainpage = () => {
  useEffect(() => {
    gsap.set('.main', {position:'fixed'})
    gsap.set('.scrollDist', { width: '100%', minHeight: '200%' });
    gsap.timeline({
      scrollTrigger: { trigger: '.scrollDist', start: 'top top', end: 'bottom bottom', scrub: 1,markers:true }
    })
      .fromTo('.sky', { y: 0 }, { y: -200 }, 0)
      .fromTo('.cloud1', { y: 100 }, { y: -800 }, 0);
  }, []); 

  return (
    <div>
    <div className="scrollDist"></div>
    <div className="main">
      <svg className="svgcls" viewBox="0 0 1200 800" xmlns="http://www.w3.org/2000/svg">
        <mask id="m">
          <g className="cloud1">
            <rect fill="#fff" width="100%" height="801" y="799" />
            <image xlinkHref="https://assets.codepen.io/721952/cloud1Mask.jpg" width="1200" height="800"/>
          </g>
        </mask>
        <image className="sky" xlinkHref="https://assets.codepen.io/721952/sky.jpg" width="1200" height="590" />
        
        <text className="theme" fill="#fff" x="425" y="300" fontSize={"100px"}>THEME</text>
          
        <g mask="url(#m)">
          <rect fill="#fff" width="100%" height="100%" />      
          <text x="350" y="300" fill="#FF0000">TEDx</text>
          <text className="D" x="630" y="300" fill="#000000">DAVV</text>      
        </g>
      </svg>
    </div>
    </div>
  );
};

export default Mainpage;
