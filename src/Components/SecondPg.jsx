import React from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import { Power3 } from 'gsap';
gsap.registerPlugin(ScrollTrigger)

export default function SecondPg() {
    

    return (
        <>
            <div className='first'></div>
            <div className='second'>
                <div className="background">
                    <img src="./images/darkleft.png" alt="left bg" className="leftbg" />
                    <img src="./images/lightbluebg.png" alt="rightbg" className="rightbg" />
                </div>


                <img src="./images/Audience.png" alt="Audience" className="audience" />


                <div className="sunmoon">
                    <img src="./images/sun.png" alt="sun" className="sun" />
                    <img src="./images/moon.png" alt="moon" className="moon" />
                </div>

                <div className="chimpbow">
                    <img src="./images/chimp.png" alt="chimp" className="chimp" />
                    <img src="./images/rainbow.png" alt="rainbow" className="rainbow" />
                </div>

                <img src="./images/choices.png" alt="choices" className="choices" />
                <img src="./images/voices.png" alt="voices" className="voices" />

                <div className="manlaser">
                    <img src="./images/guy.png" alt="guy" className="guy" />
                    <img src="./images/laser.png" alt="laser" className="laser" />
                </div>

                <div className='butterflies'>
                    <img src="./images/butterflyright.png" alt="butterflyright" className="butterflyright" />
                    <img src="./images/butterflyleft.png" alt="butterflyleft" className="butterflyleft" />
                </div>

                {/* <div className='theme'> */}
                <img src="./images/theme.png" alt="theme" className="evolve" />
                {/* </div> */}

                <div className='hands'>

                    <img src="./images/hands.png" alt="hands" className="hands" />
                </div>

            </div>
        </>
    )
}