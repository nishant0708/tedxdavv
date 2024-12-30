import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./frontpage2025.css";
import About from "../../2025-Components/About/About";
import SideMarquee2 from "../../2025-Components/sidemarquee2/sidemarquee2";
import TypePara2 from "../../2025-Components/typepara2/typepara2";

const FrontPage2025 = ({ onScaleComplete }) => {
  const containerRef = useRef(null);
  const textRefs = useRef([]);
  const yearRef = useRef();
  const taglineRef = useRef();
  const zeroRef = useRef();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Increased mobile delay from 1 to 2.5 seconds
    const startDelay = window.innerWidth <= 768 ? 2.5 : 0;

    const timeline = gsap.timeline({
      delay: startDelay,
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 10%",
        end: "+=2000",
        scrub: true,
        pin: true,
        onLeave: () => {
          gsap.delayedCall(0.5, () => onScaleComplete && onScaleComplete());
        },
      },
    });

    timeline.fromTo(
      containerRef.current,
      { scale: 0.8, opacity: 0 },
      { scale: 1, opacity: 1, duration: 1.5, ease: "power2.out" }
    );

    timeline.fromTo(
      yearRef.current,
      { scale: 0.5, opacity: 0 },
      { scale: 1, opacity: 1, duration: 3, ease: "power2.out" },
      "<"
    );

    timeline.to(
      yearRef.current.querySelector(".zero"),
      { opacity: 0.5, duration: 0.5, ease: "power2.out" },
      "-=0.5"
    );

    textRefs.current.forEach((text, index) => {
      const mobileDelay = window.innerWidth <= 768 ? index * 0.1 : 0.2;
      timeline.fromTo(
        text,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
        `+=${mobileDelay}`
      );
    });

    timeline.to(
      [taglineRef.current, ...textRefs.current],
      { opacity: 0, duration: 1, ease: "power2.out" },
      "+=0.5"
    );

    const zero = yearRef.current.querySelector(".zero");
    const zeroBounds = zero.getBoundingClientRect();
    const containerBounds = containerRef.current.getBoundingClientRect();
    
    const xOffset = (zeroBounds.left + zeroBounds.width / 2) - (containerBounds.left + containerBounds.width / 2);
    const yOffset = (zeroBounds.top + zeroBounds.height / 2) - (containerBounds.top + containerBounds.height / 2);

    const leftOffset = window.innerWidth <= 768 ? 20 : 40;

    timeline.to(containerRef.current, {
      scale: 30,
      opacity: 0,
      duration: 1.5,
      ease: "power2.inOut",
      transformOrigin: `${50 + ((xOffset - leftOffset) / containerBounds.width) * 100}% ${50 + (yOffset / containerBounds.height) * 100}%`,
      onComplete: () => {
        // Increased mobile transition delay from 0.3 to 0.8
        const transitionDelay = window.innerWidth <= 768 ? 0.8 : 0;
        gsap.delayedCall(transitionDelay, () => onScaleComplete && onScaleComplete());
      }
    });

    ScrollTrigger.refresh();

    return () => {
      timeline.kill();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [onScaleComplete]);

  useEffect(() => {
    const letters = document.querySelectorAll(".tagline-letter25");
    const addBlinkingEffect = () => {
      letters.forEach(letter => {
        const shouldBlink = Math.random() > 0.8;
        if (shouldBlink) {
          letter.classList.add("blinking25");
        } else {
          letter.classList.remove("blinking25");
        }
      });
    };

    const interval = setInterval(addBlinkingEffect, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="main-container25">
      <div ref={containerRef} className="frontpage-container25">
        <SideMarquee2/>
        <div className="landing_2025_stars"></div>
        <div className="line-overlay25"></div>
        <div className="columns-container25">
          <div className="column25">
            <span ref={el => (textRefs.current[0] = el)} className="text25">
             <TypePara2 para="CAPTURING THE CONNECTION BETWEEN THE SEEN AND THE UNSEEN"/>
            </span>
          </div>
          <div className="column25">
            <p ref={el => (textRefs.current[1] = el)} className="text25">
              <div className="text2">
               <TypePara2 para="SNAPSHOTS OF IDEAS THAT RESONATED WITHIN AND BEYOND"/>
              </div>
            </p>
          </div>
          <div className="column25 combined-column25">
            <p ref={el => (textRefs.current[2] = el)} className="text25">
             <TypePara2 para="UNMASKING THE HIDDEN TRUTHS THROUGH WORDS THAT INSPIRE"/>
            </p>
            <p ref={el => (textRefs.current[3] = el)} className="text25">
             <TypePara2 para="OUR SPEAKERS SHARE STORIES THAT IGNITE YOUR INNER JOURNEY"/>
            </p>
          </div>
        </div>
        <div className="year-container25">
          <span ref={yearRef} className="year25">
            2&nbsp;<span ref={zeroRef} className="zero">0</span>&nbsp;2&nbsp;5
          </span>
        </div>
        <div className="tagline-container25" ref={taglineRef}>
          <div className="tagline25">
            {Array.from("THE DATE AWAITS, BUT THE EXCITEMENT STARTS NOW").map((char, index) => (
              <span key={index} className="tagline-letter25">
                {char === " " ? "\u00A0" : char}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrontPage2025;