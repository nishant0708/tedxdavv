import React from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './about.css';

gsap.registerPlugin(ScrollTrigger)
export default function About() {

    const style = {
        backgroundImage: `url('./images/starrybg.jpg')`,
        backgroundRepear: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    backgroundAttachment: 'fixed'
    }
    return (
        <>
           <div className='aboutus' style={style} id='about' >
                <div className='aboutcontent'>
                <h2 className='headingg whitetext text'> ABOUT FLiC </h2>
                <p className='whitetext abouttheme'>
                FLiC is a student club, originating
from IET DAVV and expanding across
the entire DAVV, that equips its
members with the tools to navigate
the ever-changing financial landscape
through engaging activities,
workshops, and mentorship programs.
With a shared vision of financial
independence, FLiC fosters a
supportive environment that
encourages students to explore their
potential and take control of their
financial future.
</p>

                <h2 className='whitetext headingg text'> ABOUT TEDx DAVV</h2>
                <p className='whitetext abouttedxdavv'>
                TEDxDAVV is an inspiring TEDx event driven by the spirited students of DAVV (Devi
Ahilya Vishwavidyalaya). It serves as a platform for students to create a stage where
ideas thrive and are shared with a broader audience. This student-led initiative
reflects their passion for knowledge, encourages critical thinking, and fosters a
culture of innovation.
TEDxDAVV empowers students to challenge the status quo, engage in
thought-provoking discussions, and make a meaningful impact on society. It
showcases the limitless potential of student-driven initiatives and their ability to
shape a brighter future.
 </p>

                <h2 className='whitetext headingg text'> ABOUT TEDx</h2>
                <p className='whitetext aboutted'>
                TEDx is a program created by TED (Technology, Entertainment, Design), a global
platform known for its conferences featuring influential speakers and thought
leaders. TEDx events are independently organized, community-driven gatherings
licensed by TED.
These events aim to spark deep discussions, share innovative ideas, and inspire
individuals within local communities. In order to organize a TEDx event, it is
imperative to possess a TEDx License, which is issued to individuals who undergo a
rigorous application process. </p>

                </div>
                <img src='./images/aboutusbg.png' alt='thoughts flow' className='flow'/>
           </div>
                
        </>
    )
}