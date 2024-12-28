import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./frontpage2025.css";
import About from "../../2025-Components/About/About";

gsap.registerPlugin(ScrollTrigger);

const FrontPage2025 = ({ onScaleComplete }) => {
  const containerRef = useRef(null);
  const textRefs = useRef([]);
  const yearRef = useRef();
  const taglineRef = useRef();
  const zeroRef = useRef();

  useEffect(() => {
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "+=2000",
        scrub: true,
        pin: true,
        onLeave: () => onScaleComplete && onScaleComplete(),
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
      { scale: 1, opacity: 1, duration: 1, ease: "power2.out" },
      "<"
    );

    timeline.to(
      yearRef.current.querySelector(".zero"),
      { opacity: 0.5, duration: 0.5, ease: "power2.out" },
      "-=0.5"
    );

    textRefs.current.forEach((text, index) => {
      timeline.fromTo(
        text,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
        "+=0.2"
      );
    });

    // Fade out both tagline and text elements together
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

    const leftOffset = 40;

    timeline.to(containerRef.current, {
      scale: 30,
      opacity: 0,
      duration: 1.5,
      ease: "power2.inOut",
      transformOrigin: `${50 + ((xOffset - leftOffset) / containerBounds.width) * 100}% ${50 + (yOffset / containerBounds.height) * 100}%`,
      onComplete: () => < frontpage2025 onScaleComplete ={() => {
        <About/>
      }} />
    });

    return () => {
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

    const interval = setInterval(addBlinkingEffect, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="main-container25">
      <div ref={containerRef} className="frontpage-container25">
        <div className="line-overlay25"></div>
        <div className="columns-container25">
          <div className="column25">
            <p ref={el => (textRefs.current[0] = el)} className="text25">
              CAPTURING THE CONNECTION BETWEEN THE SEEN AND THE UNSEEN
            </p>
          </div>
          <div className="column25">
            <p ref={el => (textRefs.current[1] = el)} className="text25">
              <div className="text2">
                SNAPSHOTS OF IDEAS THAT RESONATED WITHIN AND BEYOND
              </div>
            </p>
          </div>
          <div className="column25 combined-column25">
            <p ref={el => (textRefs.current[2] = el)} className="text25">
              UNMASKING THE HIDDEN TRUTHS THROUGH WORDS THAT INSPIRE
            </p>
            <p ref={el => (textRefs.current[3] = el)} className="text25">
              OUR SPEAKERS SHARE STORIES THAT IGNITE YOUR INNER JOURNEY
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