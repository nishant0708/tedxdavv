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
                <h2 className='headingg whitetext text'> ABOUT THEME </h2>
                <p className='whitetext abouttheme'>
                The theme  "Evolve" for TEDxDAVV 2023 is all about embracing change and growth. Whether it's the evolution of technology, ecology, or culture, even in the face of uncertainty and adversity. It's about recognizing that evolution is not always a smooth or predictable process, but that it can lead to new opportunities and insights if we approach it with an open mind and a willingness to learn.
                </p>

                <h2 className='whitetext headingg text'> ABOUT TEDx DAVV</h2>
                <p className='whitetext abouttedxdavv'>
                The theme  "Evolve" for TEDxDAVV 2023 is all about embracing change and growth. Whether it's the evolution of technology, ecology, or culture, even in the face of uncertainty and adversity. It's about recognizing that evolution is not always a smooth or predictable process, but that it can lead to new opportunities and insights if we approach it with an open mind and a willingness to learn.
                </p>

                <h2 className='whitetext headingg text'> ABOUT TED</h2>
                <p className='whitetext aboutted'>
                The theme  "Evolve" for TEDxDAVV 2023 is all about embracing change and growth. Whether it's the evolution of technology, ecology, or culture, even in the face of uncertainty and adversity. It's about recognizing that evolution is not always a smooth or predictable process, but that it can lead to new opportunities and insights if we approach it with an open mind and a willingness to learn.
                </p>

                </div>
                <img src='./images/aboutusbg.png' alt='thoughts flow' className='flow'/>
           </div>
                
        </>
    )
}