import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import './speakercard.css'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export default function SpeakerCard(props) {
    const cardRef = useRef(null);

    useEffect(() => {
        const card = cardRef.current;

        gsap.from(card, {
            opacity: 0,
            duration: 2,
            scrollTrigger: {
                trigger: card,
                start: '50% bottom',
                end: 'bottom',
                toggleActions: 'play none none none',
            },
        });
    }, []);
    return (
        <div className="speakercard" ref={cardRef}>
            <div className="speakerbg">
                <img src={props.image} alt={props.name} />
            </div>
            <div className="speakerdetails whitetext">
                <p className="speakername">
                    {props.name}
                </p>
                <p className="speakertitle">
                    {props.title}
                </p>
            </div>
        </div>
    )
}
