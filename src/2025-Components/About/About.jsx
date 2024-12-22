import gsap from 'gsap';
import ImageAbout from '../image About/ImageAbout';
import TypeHeading from '../TypeHeading/TypeHeading';
import TypePara from '../TypePara/TypePara';
import './About.css';

import React, { useEffect, useRef } from 'react'

const About = () => {
    const aboutTextContainerRef = useRef(null);

    
  return (
    <div className='ABOUT_2025_main'>

        <div className='about_section_1'>

            <ImageAbout />

            <span ref={aboutTextContainerRef} className='' style={{ display: 'flex', flexDirection: 'column', rowGap: '50px'}} >
                <TypeHeading content='Interconnectedness' />

                <TypePara para='As humans, we can only see ourselves through the reflections of others. "The Within" encourages us to reflect on how our internal worlds are shaped by our relationships and communities.' />
            </span>
        </div>

        <div className='about_section_2'>

            <span className='' style={{ display: 'flex', flexDirection: 'column', rowGap: '50px'}} >
                <TypeHeading content='Self - discovery' />

                <TypePara para='Everyone has an innate desire to discover their purpose and identity. Yet, many of us get lost or give up, trapped by external expectations. This theme can explore how people find their inner truths and overcome these barriers.' />
            </span>

            <ImageAbout />

        </div>

        <div className='about_section_3'>

            <ImageAbout />

            <span className='' style={{ display: 'flex', flexDirection: 'column', rowGap: '50px'}} >
                <TypeHeading content='Unseen Forces' />

                <TypePara para='Much like the physical world is governed by unseen forces (like gravity or quantum phenomena), the psychological world is influenced by emotions, beliefs, and memories that operate beneath our consciousness. Talks can explore mental health, spirituality, or creativity.' />
            </span>
        </div>

        
    </div>
  )
}

export default About
