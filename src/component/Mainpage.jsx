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
        {/* to be added */}
    </div>
    </div>
  );
};

export default Mainpage;
