import React, { useEffect, useState, useRef } from 'react';
import Marquee from 'react-fast-marquee';
import ReactParallaxTilt from 'react-parallax-tilt';
import gsap from 'gsap';
import { Volume2, VolumeX } from 'lucide-react';

const VideoSection = () => {
    const [isMuted, setIsMuted] = useState(true);
    const [isVisible, setIsVisible] = useState(false);
    const videoRef = useRef(null);
    const sectionRef = useRef(null);

    useEffect(() => {
        // GSAP animations
        gsap.fromTo('.highlightsBG', {
            opacity: 0,
        },{
            opacity: 0,
            scrollTrigger:{
                trigger: '.highlightsBG',
                start: 'top center',
                end: 'top top',
                scrub: true,
                markers: false,
            },
            ease: 'sine.out'
        });

        gsap.fromTo('.highlightsText',{
            xPercent: -100,
        },{
            xPercent: 0,
            scrollTrigger:{
                trigger: '.highlightsText',
                toggleActions: 'play none none reverse',
                start: 'top 50%',
                scrub: false,
                markers: false
            },
            duration: 0.8,
            ease: 'sine.out',
        });

        gsap.fromTo('.withoutSound',{
            opacity: 0,
            xPercent: 100,
        },{
            opacity: 1,
            xPercent: 0,
            scrollTrigger:{
                trigger: '.highlightsText',
                toggleActions: 'play none none reverse',
                start: 'top 50%',
                scrub: false,
                markers: false
            },
            duration: 0.8,
            ease: 'sine.out',
        });

        // Intersection Observer setup
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    setIsVisible(entry.isIntersecting);
                    if (entry.isIntersecting) {
                        setIsMuted(false); // Unmute when visible
                        if (videoRef.current) {
                            const iframe = videoRef.current;
                            iframe.contentWindow.postMessage(
                                JSON.stringify({
                                    event: 'command',
                                    func: 'playVideo',
                                    args: []
                                }),
                                '*'
                            );
                        }
                    } else {
                        setIsMuted(true); // Mute when not visible
                    }
                });
            },
            {
                threshold: 0.5 // Trigger when 50% of the component is visible
            }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    // Update video parameters when mute state changes
    useEffect(() => {
        if (videoRef.current) {
            const iframe = videoRef.current;
            iframe.src = `https://www.youtube.com/embed/jZRbOFMqESs?autoplay=1&loop=1&playlist=jZRbOFMqESs&controls=0&modestbranding=1&mute=${isMuted ? 1 : 0}&showinfo=0&rel=0&enablejsapi=1&version=3&playerapiid=ytplayer`;
        }
    }, [isMuted]);

    const toggleMute = () => {
        if (isVisible) { // Only allow manual mute toggle when component is visible
            setIsMuted(!isMuted);
        }
    };

    return (
        <div ref={sectionRef} className="relative flex flex-col-reverse py-[80px] lg:flex-row justify-center gap-[50px] lg:gap-[100px] items-center w-screen min-h-screen bg-black z-20">
            <Marquee autoFill={true} className="blur-[7px] min-w-[120vw] rotate-12 text-[200px] font-black absolute bg-gradient-to-b from-purple-500 to-pink-500">
                <p className="mr-20">HIGHLIGHTS</p>
            </Marquee>

            <ReactParallaxTilt className="withoutSound relative">
                <iframe 
                    ref={videoRef}
                    className="border-y-0 border-x-[3px] border-x-red-950 relative z-30 rounded-md md:rounded-3xl"
                    width="330" 
                    height="590" 
                    title="YouTube Shorts Video" 
                    frameBorder="0" 
                    allow="autoplay" 
                    allowFullScreen
                />
                <button
                    onClick={toggleMute}
                    className={`absolute bottom-4 right-4 z-40 bg-black/50 hover:bg-black/70 transition-colors duration-200 rounded-full p-2 text-white ${!isVisible ? 'opacity-50 cursor-not-allowed' : 'opacity-100'}`}
                    aria-label={isMuted ? "Unmute video" : "Mute video"}
                    disabled={!isVisible}
                >
                    {isMuted ? <VolumeX size={24} /> : <Volume2 size={24} />}
                </button>
            </ReactParallaxTilt>

            <span className="uppercase text-left text-white font-thin overflow-x-hidden" style={{ display: 'flex', flexDirection: 'column', rowGap: '50px'}}>
                <h2 className="highlightsText uppercase w-min overflow-clip leading-[48px] lg:leading-[70px] z-40 text-left font-black text-[60px] lg:text-[80px] max-w-[90vw] text-white">
                    Reliving the magic
                </h2>
                <p className="highlightsText text-justify hidden md:block leading-8 max-w-[485px]">
                    Last year's event was nothing short of extraordinary—a perfect blend of creativity, passion, and inspiration! Thrilling talks by our incredible speakers sparked ideas and the energy was contagious, the vibe unmatched—relive the magic through our highlights video!
                </p>
            </span>
        </div>
    );
};

export default VideoSection;