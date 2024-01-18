import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger  from 'gsap/ScrollTrigger';

import bgimage from './assets/bg_min.jpg';
import phonebg from './assets/phone_bg.jpg';
import tedx from './assets/logo-black.png';
import rnth from './assets/rnth.png';
import com from './assets/commerce.png';
import admin from './assets/admin.png'
import alumni from './assets/alumnis.png';
import ablock from './assets/ablock.png';
import darkcloud from './assets/bigcloud.png'
import lightcloud from './assets/cloud3.png';

gsap.registerPlugin(ScrollTrigger);

const DesktopComponent = () => {
  const cloud1Ref = useRef(null);

  useEffect(() => {
    gsap.set('.scrollDist', { width: '100%', height: '200%' });

    const main_tl = gsap.timeline({
      scrollTrigger: { trigger: '.scrollDist', start: 'top top', end: 'bottom bottom', scrub: 1},
    });

    main_tl.to(cloud1Ref.current, {
      y: '-500',
      ease: 'power1.Out',
    });
  }, []);

  return (
    <div>
    <div className="scrollDist">
    <div className="main">
      <svg className="svgcls" viewBox="0 0 1200 800" xmlns="http://www.w3.org/2000/svg">
        <mask id="m">
          <g className="cloud1" ref={cloud1Ref}>
            <rect fill="#fff" width="100%" height="801" y="799" />
            <image xlinkHref="https://assets.codepen.io/721952/cloud1Mask.jpg" width="1200" height="800"/>
          </g>
        </mask>
        <image className="sky" xlinkHref={bgimage} width="100%" height="100%" />
        <image className='lightcloud' xlinkHref={lightcloud} width={'100%'} height={'100%'} y={'5%'} />
        {/* <image className='darkcloud' xlinkHref={darkcloud} width={'38%'} height={'38%'} y={'34%'} x={'-18%'}/> */}
        <image className='admin' xlinkHref={admin} width={'40%'} height={'40%'} y={'35%'} x={'30%'}/>
        {/* <image className='lightcloud2' xlinkHref={lightcloud} width={'100%'} height={'100%'} y={'15%'} /> */}
        <image className='rnth' xlinkHref={rnth} width={'48%'} height={'48%'} y={'34%'} x={0}/>
        <image className='com' xlinkHref={com} width={'30%'} height={'30%'} y={'50%'} x={'15%'}/>
        <image className='darkcloud' xlinkHref={darkcloud} width={'38%'} height={'38%'} y={'23%'} x={'65%'}/>
        <image className='alumni' xlinkHref={alumni} width={'38%'} height={'38%'} y={'38%'} x={'50%'}/>
        <image className='ablock' xlinkHref={ablock} width={'38%'} height={'38%'} y={'38%'} x={'73%'}/>
        

        <text className="theme" fill="#fff" x="450" y="200" fontSize={"100px"}>THEME</text>
          
        <g mask="url(#m)">
          <rect fill="#fff" width="100%" height="100%" />    
          <image xlinkHref={tedx} width={500} height={500} x="30%" y="5%"/>  
          {/* <text x="350" y="300" fill="#FF0000" fontSize={'99px'} fontFamily='Helvetica' >TEDx</text>
          <text className="D" x="630" y="300" fontSize={'99px'} fill="#000000">DAVV</text>       */}
        </g>
      </svg>
    </div>
    </div>
    </div>
  );
};

const PhoneComponent = () => {
  const cloud1Ref = useRef(null);

  useEffect(() => {
    gsap.set('.scrollDist', { width: '100%', height: '200%' });

    const main_tl = gsap.timeline({
      scrollTrigger: { trigger: '.scrollDist', start: 'top top', end: 'bottom bottom', scrub: 1 },
    });

    main_tl.to(cloud1Ref.current, {
      y: '-600',
      ease: 'power1.Out',
    });

  }, []);
  return (
    <div>
    <div className="scrollDist" style={{height:'100vh'}}>
    <div className="main">
      <svg className="svgcls" viewBox="0 0 640 1000" xmlns="http://www.w3.org/2000/svg">
        <mask id="m">
          <g className="cloud1" ref={cloud1Ref}>
            <rect fill="#fff" width="100%" height="801" y="800" />
            <image xlinkHref="https://assets.codepen.io/721952/cloud1Mask.jpg" width="1200" height="800" y="300"/>
          </g>
        </mask>
        <image className="sky" xlinkHref={phonebg} y="-40" width="100%" height="100%" />
        <image className='darkcloud' xlinkHref={darkcloud} width={'100%'} height={'100%'} y={'3%'} x={'10%'}/>
        <image className='admin' xlinkHref={admin} width={'115%'} height={'115%'} y={'20%'} x={'-50%'}/>
        <image className='ablock' xlinkHref={ablock} width={'70%'} height={'70%'} y={'35%'} x={'40%'}/>
        
        
        <text className="theme" fill="#fff" x="30%" y="40%" fontSize={"90px"} >THEME</text>
          
        <g mask="url(#m)">
          <rect fill="#fff" width="100%" height="100%" /> 
          <image xlinkHref={tedx} width="400" height="400" x="20%" y="40%"/>
          {/* <text x="20%" y="50%" fill="#EB0028" fontSize={'50px'} fontFamily='Helvetica' >TEDx</text>
          <text className="D" x="52%" y="50%" fontSize={'50px'} fill="#000000">DAVV</text>       */}
        </g>
      </svg>
    </div>
    </div>
    </div>
  );
};

const Mainpage = () => {
  
  const isDesktop = window.innerWidth > 768;

  return isDesktop ? <DesktopComponent /> : <PhoneComponent />;
};

export default Mainpage;
