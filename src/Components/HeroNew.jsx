import './HeroNew.css';
import React, { useEffect, useRef } from 'react';
import { gsap, ScrollTrigger } from 'gsap/all';


gsap.registerPlugin(ScrollTrigger);

const HeroNew = () => {
    const lettersRef = useRef([]);
    const rocketRef = useRef(null);
    const planeRef = useRef(null);
    const rntRef = useRef(null);
    const comRef = useRef(null);
    const adminRef = useRef(null);
    const alumniRef = useRef(null);
    const ablockRef = useRef(null);
    const cloud1Ref = useRef(null);
    const cloud2Ref = useRef(null);
    const cloud3Ref = useRef(null);
    const cloud4Ref = useRef(null);
  
    useEffect(() => {

        gsap.set('.Scroll', {width:'100%', height:'200%'}) 

      const main_tl = gsap.timeline({scrollTrigger:{trigger:'.Scroll', start:'top top', end:'bottom bottom', scrub:1}})  
      const tl = gsap.timeline({ repeat: -1 });
      const tl_2 = gsap.timeline({ repeat: -1, yoyo: true });
      const tl_3 = gsap.timeline({})
  
      // Fade in animation
      tl.from(lettersRef.current, {
        opacity: 0,
        duration: 0.5,
        stagger: 0.2,
      });
  
      // Fade out animation
      tl.to(lettersRef.current, {
        opacity: 0,
        duration: 0.5,
        stagger: 0.2,
        delay: 5, // Delay before fading out
      });
    
      tl_2.to(rocketRef.current, {
        y: '-=20',
        duration: 1,
        ease: 'power1.inOut',
      });
  
      tl_2.to(rocketRef.current, {
        y: '+=20',
        duration: 1,
        ease: 'power1.inOut',
      });

      tl_3.to(planeRef.current,{
        x: '+=100',
        duration: 10,
        ease: 'power1.inOut',
      });

      main_tl.to(rntRef.current,{
        x:"1600",
        ease:'power1.Out',
        delay:-1
      });

      main_tl.to(comRef.current,{
        x:"1000",
        ease:'power1.Out',
        delay:-1
      });

      main_tl.to(adminRef.current,{
        x:"-1300",
        ease:'power1.Out',
        delay:-1,
      });

      main_tl.to(alumniRef.current,{
        x:"-1500",
        ease:'power1.Out',
        delay:-1,
      });

      main_tl.to(ablockRef.current,{
        x:"1000",
        ease:'power1.Out',
        delay:-1,
      });

      main_tl.to(cloud1Ref.current,{
        y:"500",
        ease:'power1.Out',
        delay:-1,
      });
      main_tl.to(cloud2Ref.current,{
        y:"500",
        ease:'power1.Out',
        delay:-1,
      });
      main_tl.to(cloud3Ref.current,{
        y:"500",
        ease:'power1.Out',
        delay:-1,
      });
      main_tl.to(cloud4Ref.current,{
        y:"500",
        ease:'power1.Out',
        delay:-1,
      });


    }, []);

    return (
        <div className="app__hero">
            <div className='Scroll'>
            <div id="w-node-_79a86033-04f7-987b-7a70-908bab675715-22ebd010" className="w-layout-layout quick-stack-3 wf-layout-layout">
            <div id="w-node-_79a86033-04f7-987b-7a70-908bab675716-22ebd010" className="w-layout-cell"></div>
            <div id="w-node-_51f1a9a3-6ecd-58ff-74a6-a2dd9e947f00-22ebd010" className="w-layout-cell">
            <div id="w-node-c3cd2599-5a48-b9b6-7fa1-cb7b4d8b8c8c-22ebd010"
                className="w-layout-layout quick-stack-2 wf-layout-layout">
                <div id="w-node-c3cd2599-5a48-b9b6-7fa1-cb7b4d8b8c8d-22ebd010" className="w-layout-cell">
                    <div><img
                            className='tedxdraw'
                            src="./images/hero/tedx.png"
                            loading="lazy" width="77" alt="tedx" /></div>
                </div>
                <div id="w-node-c3cd2599-5a48-b9b6-7fa1-cb7b4d8b8c8e-22ebd010" className="w-layout-cell cell-4">
                    <div><img
                            src="./images/hero/davv.png"
                            loading="lazy" width="157" sizes="157px"
                            alt="Davv" /></div>
                </div>
            </div>
        </div>
        <div id="w-node-_3fdbb5e2-47fc-3d1f-3f45-ac1b2ff24ffc-22ebd010" className="w-layout-cell cell">
            <div>
                <div className='evolve-cell'>
                <div id="w-node-_4f499811-700c-3bc2-fb73-fad6f2e4f551-22ebd010"
                    className="w-layout-layout quick-stack wf-layout-layout">
                    <div id="w-node-d9b88c25-a67d-f63b-75ce-585426cc0a3f-22ebd010" className="w-layout-cell cell-2">
                        <div className="div-block">
                            <h1 ref={(el) => (lettersRef.current[0] = el)} className="e">E</h1>
                        </div>
                    </div>
                    <div id="w-node-_456dc36f-bb9d-b351-db79-31a0b5b6c854-22ebd010" className="w-layout-cell cell-3">
                        <div>
                            <h1 ref={(el) => (lettersRef.current[1] = el)} className="vn">V</h1>
                        </div>
                    </div>
                    <div id="w-node-f0c61025-afcd-144c-9c63-d188a377ccbc-22ebd010" className="w-layout-cell">
                        <div>
                            <h1 ref={(el) => (lettersRef.current[2] = el)} className="o">O</h1>
                        </div>
                    </div>
                    <div id="w-node-feead996-c7b5-9325-f171-d3f58146581e-22ebd010" className="w-layout-cell">
                        <div>
                            <h1 ref={(el) => (lettersRef.current[3] = el)} className="l">L</h1>
                        </div>
                    </div>
                    <div id="w-node-_8e4a2cf7-12f5-3b79-308e-f9a45958f13b-22ebd010" className="w-layout-cell">
                        <div>
                            <h1 ref={(el) => (lettersRef.current[4] = el)} className="vnn">V</h1>
                        </div>
                    </div>
                    <div className='E'>
                    <div id="w-node-_0856e97a-0f5c-0608-99b7-287e39467ee0-22ebd010" className="w-layout-cell"></div>
                        <div>
                            <h1 ref={(el) => (lettersRef.current[5] = el)} className="en">E</h1>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
        <div id="w-node-b85d7b51-0bb4-a67d-ea36-6cebc795af09-22ebd010" className="w-layout-cell cell-6">
            <div id="w-node-b5e6e402-594e-ef44-d8eb-b0535b0681b1-22ebd010" className="w-layout-layout wf-layout-layout">
                <div id="w-node-b5e6e402-594e-ef44-d8eb-b0535b0681b2-22ebd010" className="w-layout-cell">
                    <div><img
                    
                            ref={rocketRef}
                            src="./images/hero/rocket.png"
                            loading="lazy" width="310" sizes="(max-width: 479px) 65vw, 310px"
                            alt="rocket" className="image-27" /></div>
                </div>
                <div id="w-node-b5e6e402-594e-ef44-d8eb-b0535b0681b3-22ebd010" className="w-layout-cell">
                    <div><img
                            ref={planeRef}
                            src="./images/hero/plane.png"
                            loading="lazy" width="320" sizes="(max-width: 479px) 50vw, (max-width: 991px) 40vw, 320px"
                            alt="plane" className="image-24" /></div>
                </div>
                <div id="w-node-fff5e846-85b9-c7d6-2086-4bf0c67e4b99-22ebd010" className="w-layout-cell">
                    <div><img
                            src="./images/hero/balloon.png"
                            loading="lazy" width="270" alt="" className="image-25" /></div>
                </div>
            </div>
        </div>
        <div id="w-node-_96465114-988c-06f0-c37e-4253ff3fd829-22ebd010" className="w-layout-cell cell-5">
            <div id="w-node-_5cfdc5ee-e2d3-cd87-629d-70c1cf4fbff3-22ebd010" className="w-layout-layout wf-layout-layout">
                <div id="w-node-_5cfdc5ee-e2d3-cd87-629d-70c1cf4fbff4-22ebd010" className="w-layout-cell">
                    <div><img
                            ref={cloud1Ref}
                            src="./images/hero/cloud3.png"
                            loading="lazy" sizes="(max-width: 1200px) 100vw, 1200px"
                            alt="cloud3" className="image-20" /></div>
                </div>
                <div id="w-node-_5cfdc5ee-e2d3-cd87-629d-70c1cf4fbff5-22ebd010" className="w-layout-cell">
                    <div></div><img
                        ref={cloud2Ref}
                        src="./images/hero/cloud1.png"
                        loading="lazy" width="766" sizes="(max-width: 767px) 100vw, 766px"
                        alt="cloud1" className="image-19" />
                </div>
                <div id="w-node-_7d1c4f5e-540d-0c05-3d40-774f37c93c79-22ebd010" className="w-layout-cell">
                    <div></div><img
                        ref={rntRef}
                        src="./images/hero/rnth.png"
                        loading="lazy" width="827" sizes="(max-width: 991px) 100vw, 827px"
                        alt="rnth" className="image-18" />
                </div>
                <div id="w-node-b9df25fe-8f94-24ca-9163-e5cef8608c89-22ebd010" className="w-layout-cell">
                    <div></div><img
                        ref={comRef}
                        src="./images/hero/commerce.png"
                        loading="lazy" width="444" sizes="(max-width: 479px) 93vw, 444px"
                        alt="commerce" className="image-17" />
                </div>
                <div id="w-node-_2cba2c27-fe38-6108-2a2d-362960fab21c-22ebd010" className="w-layout-cell">
                    <div><img
                            ref={adminRef}
                            src="./images/hero/download.png"
                            loading="lazy" width="598" sizes="(max-width: 479px) 100vw, 598px"
                            alt="admin" className="image-16" /></div>
                </div>
                <div id="w-node-_410b0727-9311-6c9d-3e5a-79880ca52b19-22ebd010" className="w-layout-cell">
                    <div><img
                            ref={ablockRef}
                            src="./images/hero/ablock.png"
                            loading="lazy" width="350" sizes="(max-width: 479px) 80vw, 350px"
                            alt="ablock" className="image-15" /></div>
                </div>
                <div id="w-node-e77887da-93d4-ccd1-eeec-7f8697c434dc-22ebd010" className="w-layout-cell">
                    <div></div><img
                        ref={cloud3Ref}
                        src="./images/hero/cloud3.png"
                        loading="lazy" sizes="(max-width: 1200px) 100vw, 1200px"
                        alt="cloud3" className="image-21" />
                </div>
                <div id="w-node-d9d270c1-80e6-510c-64cb-7bdf81d8f558-22ebd010" className="w-layout-cell">
                    <div><img
                            ref={cloud4Ref}
                            src="./images/hero/cloud3.png"
                            loading="lazy" sizes="(max-width: 1200px) 100vw, 1200px"
                            alt="cloud3" className="image-22" /></div>
                </div>
                <div id="w-node-_5c985a44-e0c0-6401-8864-193b10640f22-22ebd010" className="w-layout-cell">
                    <div>
                        <div><img
                                ref={alumniRef}
                                src="./images/hero/alumnis.png"
                                loading="lazy" width="564" alt="" className="image-26" /></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
    </div>
    )
}
export default HeroNew;