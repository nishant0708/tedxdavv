import { TypeAnimation } from 'react-type-animation';
import './TypeHeading.css';

import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const TypeHeading = (props) => {
    const typeHeadingRef = useRef(null);
    const [hasHeadingPlayed, setHasHeadingPlayed] = useState(false);

    useEffect(() => {
        if (!hasHeadingPlayed) {
            const animationHeadingType = gsap.fromTo(
                typeHeadingRef.current,
                {
                    display: 'none',
                },
                {
                    display: 'inline-block',
                    scrollTrigger: {
                        trigger: typeHeadingRef.current,
                        start: 'top center',
                        scrub: false,
                        markers: true,
                        toggleActions: 'play none none none', // Ensure it plays only once
                        onEnter: () => setHasHeadingPlayed(true), // Mark as played on enter
                    },
                }
            );

            // Cleanup the ScrollTrigger instance on component unmount
            return () => {
                if (animationHeadingType.scrollTrigger) {
                    animationHeadingType.scrollTrigger.kill();
                }
            };
        }
    }, [hasHeadingPlayed]);

    return (
        <h3 className='typing_text_heading' ref={typeHeadingRef}>
            {hasHeadingPlayed && (
                <TypeAnimation
                    sequence={props.content}
                    wrapper="span"
                    speed={5}
                    style={{  display: 'inline-block', }}
                    repeat={0}
                    cursor={false}
                />
            )}
        </h3>
    );
};

export default TypeHeading;
