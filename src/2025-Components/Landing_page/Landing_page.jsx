import React, { useEffect } from "react";
import "./Landing_page.css";
import galaxy from "../../Images/landing2025_milky.png";
import person from "../../Images/person.png";
import eye from "../../Images/eye.svg";
import eyeball from "../../Images/eyeball.svg";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

const Landing_page = () => {
  useEffect(() => {
    
    const updateAnimation = () => {
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: ".landing_2025_main",
          start: "top top",
          markers: true,
          end: "+=300%",
          pin: true,
          scrub: 1,
          anticipatePin: 1,
          onLeave: () => {
            ScrollTrigger.refresh();
          },
        },
      });

      // Split the "Within" text into individual characters
      const withinText = document.querySelector(".line_20252");
      const chars = withinText.textContent.split("");
      withinText.innerHTML = chars
        .map((char) => `<span class="char_2025_land">${char}</span>`)
        .join("");

      // Get the H character and calculate its position relative to viewport
      const hChar = withinText.querySelectorAll(".char_2025_land")[10];
      const hCharRect = hChar.getBoundingClientRect();
      const mainContainer = document.querySelector(".landing_2025_main");
      const mainRect = mainContainer.getBoundingClientRect();

      // Responsive calculations based on viewport width
      const viewportWidth = window.innerWidth;
      let offsetX;
      if (viewportWidth > 1300) {
        offsetX = -25; // Larger offset for wider screens
      } else if (viewportWidth > 768) {
        offsetX = -15; // Medium screens
      } else {
        offsetX = -10; // Mobile screens
      }

      // Add additional offset for very large screens
      if (viewportWidth > 1600) {
        offsetX -= 15; // Even larger offset for very wide screens
      }
      

      // Calculate the position relative to the container with responsive offset
      const relativeX =
        hCharRect.left + offsetX + hCharRect.width / 2 - mainRect.left;
      const relativeY = hCharRect.top + hCharRect.height / 2 - mainRect.top;

      // Responsive scale factor calculations
      let baseScaleFactor =
        Math.min(window.innerWidth, window.innerHeight) / hCharRect.width;

      // Adjust scale factor based on screen width
      let responsiveScaleFactor;
      if (viewportWidth > 1300) {
        responsiveScaleFactor = Math.max(baseScaleFactor * 2.5, 15); // Larger scale for wider screens
      } else if (viewportWidth > 768) {
        responsiveScaleFactor = Math.max(baseScaleFactor * 2, 10);
      } else {
        responsiveScaleFactor = Math.max(baseScaleFactor * 1.5, 8);
      }

      // Additional adjustment for very large screens
      if (viewportWidth > 1600) {
        responsiveScaleFactor *= 1.2;
      }

      // Sequential animations
      timeline
        .to(".line_20251", {
          opacity: 1,
          scale: 1,
          duration: 1.5,
          ease: "power2.out",
        })
        .to(".line_20252", {
          opacity: 1,
          scale: 1,
          duration: 1.5,
          ease: "power2.out",
        })
        .to(".line_20253", {
          opacity: 1,
          scale: 1,
          duration: 1.5,
          ease: "power2.out",
        })
        .to(
          [
            ".line_20251",
            ".line_20253",
            ".person2025",
            ".galaxy2025",
            ".landing_2025_stars",
          ],
          {
            opacity: 0,
            duration: 1,
            ease: "power2.inOut",
          }
        )
        .to(".landing_2025_main", {
          scale: responsiveScaleFactor,
          duration: 2,
          ease: "power2.inOut",
          xPercent: viewportWidth > 1300 ? -55 : -50, // Adjust position for larger screens
          yPercent: -50,
          transformOrigin: `${relativeX}px ${relativeY}px`,
        })
        .to(
          {},
          {
            duration: 0.5,
            onComplete: () => {
              const nextSection = document.querySelector(".try");
              if (nextSection) {
                nextSection.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                });
              } else {
                console.error(
                  "Element with class '.try' not found in the DOM."
                );
              }
            },
          }
        );
      return timeline;
    };

    // Initial animation setup
    let currentTimeline = updateAnimation();

    // Handle window resize
    const resizeHandler = debounce(() => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      currentTimeline.kill();
      currentTimeline = updateAnimation();
    }, 250);

    window.addEventListener("resize", resizeHandler);

    // Clean up
    return () => {
      if (currentTimeline.scrollTrigger) {
        currentTimeline.scrollTrigger.kill();
      }
      currentTimeline.kill();
      window.removeEventListener("resize", resizeHandler);
    };
  }, []);

  return (
    <div className="landing_2025_main">
      <div className="landing_2025_stars"></div>
      <img src={galaxy} alt="galaxy" className="galaxy2025" />
      <div className="landing_2025_Contents">
        <div className="landing_2025_Contents-left">
          <div className="line_20251">
            E<span className="blink-letter1">m</span>br
            <span className="blink-letter1">a</span>ce
            <span className="text_2025">
              It's not just about who you are; it's about who you are becoming
              when no one is watching.
              <br />
              <span className="text_2025_1">
                Every person has a narrative the world sees, and another they
                hide.
              </span>
            </span>
          </div>
          <p className="line_20252">
            T<span className="blink-letter2">h</span>e &nbsp; wi
            <span className="blink-letter2">t</span>hin
          </p>
          <div className="line_20253">
            <img src={eye} className="eye2025" alt="galaxy" />
            <img src={eyeball} alt="galaxy" className="eyeball2025" />
            SHAD<span className="blink-letter">O</span>W
          </div>
        </div>
        <div className="landing_2025_Contents-right">
          <img src={person} alt="person" className="person2025" />
        </div>
      </div>
    </div>
  );
};

export default Landing_page;
