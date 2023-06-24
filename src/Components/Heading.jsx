import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import './heading.css';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export default function Heading(props) {
  const titleRef = useRef(null);

  useEffect(() => {
    const title = titleRef.current;

    gsap.from(title, {
      x: -1000,
      opacity: 0,
      duration: 1,
      ease: 'bounce.out',
      scrollTrigger: {
        trigger: title,
        start: 'top 80%',
        toggleActions: 'play none none none',
      },
    });
  }, []);

  return (
    <div className="app__heading">
      <p className="subtext whitetext">{props.sub}</p>
      <h1 className="title redtext" ref={titleRef}>
        {props.title}
      </h1>
    </div>
  );
}
