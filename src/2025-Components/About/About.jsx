import gsap from 'gsap';
import ImageAbout from '../image About/ImageAbout';
import TypeHeading from '../TypeHeading/TypeHeading';
import TypePara from '../TypePara/TypePara';
import image1 from '../../Images/About Section image 1.jpeg';
import image2 from '../../Images/About Section image 2.jpeg';
import image3 from '../../Images/About Section image 3.jpeg';
import image4 from '../../Images/About Section image 4.jpeg';
import './About.css';

import React, { useEffect, useRef } from 'react'
import TypeSmall from '../Typing Small/TypingSmall';
import SideMarquee from '../Side Marquee/SideMarquee';

const About = () => {
    const aboutTextContainerRef = useRef(null);

    
  return (
    <div className='ABOUT_2025_main overflow-y-clip'>

        <SideMarquee isRight={false}/>


        <div className='about_section_1'>

            {/* <div className='about_2025_stars'></div> */}

            <ImageAbout img={image4} />

            <span ref={aboutTextContainerRef} className=' flex flex-col gap-[50px] w-[90dvw] lg:w-auto' >
                <TypeHeading content='Interconnectedness' />

                <TypePara para='As humans, we can only see ourselves through the reflections of others. "The Within" encourages us to reflect on how our internal worlds are shaped by our relationships and communities.' />

                <div className=' lg:self-end md:mt-14 flex lg:flex-col gap-7'>
                    <TypeSmall para='Exploring Identity, Purpose, and the Duality of Being.' />
                    <TypeSmall para='From Surface to Soul: Our Speakers Share Transformative Journeys.' />
                </div>
            </span>
        </div>

        <div className='about_section_2'>

            {/* <div className='about_2025_stars'></div> */}

            <span className='' style={{ display: 'flex', flexDirection: 'column', rowGap: '50px'}} >
                <TypeHeading content='Self - discovery' />

                <TypePara para='Everyone has an innate desire to discover their purpose and identity. Yet, many of us get lost or give up, trapped by external expectations. This theme can explore how people find their inner truths and overcome these barriers.' />

                <div className=' self-start md:mt-10'>
                    <TypeSmall para='Be a Part of a Conversation That Goes Beyond the Facade.' />
                </div>
            </span>

            <ImageAbout img={image1} />

        </div>

        <div className='about_section_3'>

            {/* <div className='about_2025_stars'></div> */}

            <ImageAbout img={image3} />

            <span className='' style={{ display: 'flex', flexDirection: 'column', rowGap: '50px'}} >
                <TypeHeading content='Unseen Forces' />

                <TypePara para='Much like the physical world is governed by unseen forces (like gravity or quantum phenomena), the psychological world is influenced by emotions, beliefs, and memories that operate beneath our consciousness. Talks can explore mental health, spirituality, or creativity.' />
            </span>
        </div>

        
    </div>
  )
}

export default About
