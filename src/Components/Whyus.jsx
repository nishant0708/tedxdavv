import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './whyus.css'
gsap.registerPlugin(ScrollTrigger)


export default function Whyus() {

    const whyUsRef = useRef(null);

    useEffect(() => {
      const whyUsItems = whyUsRef.current.querySelectorAll('li');
  
      gsap.from(whyUsItems, {
        opacity: 0,
        y: 50,
        stagger: 0.3,
        duration: 0.8,
        scrollTrigger: {
          trigger: whyUsRef.current,
          start: 'top 80%',
        },
      });
    }, []);
  

    return (
        <div className='whyus black whitetext'>
            <h2 className='heading'>WHY US?</h2>
           
            <ul className='whyuspoints' ref={whyUsRef}>
                <li className='one'>Highly engaged audience</li>
                <li className='two'>Support an important cause</li>
                <li className='three'>Increase brand visibility</li>
                <li className='four'>Customized sponsorship packages</li>
                <li className='five'>Brand association with TEDx</li>
                <li className='six'>Positive brand image</li>
            </ul>
        </div>
    )
}