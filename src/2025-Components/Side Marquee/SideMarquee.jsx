import './SideMarquee.css';
import gsap from 'gsap'
import React, { useEffect, useRef } from 'react'

const SideMarquee = () => {

    const sideMarqueeText = useRef(null);

    useEffect(() => {

        gsap.fromTo(sideMarqueeText.current,{
            x: 0,

        },{
            x: `-${document.documentElement.scrollHeight}`,
            duration: 70,
            repeat: -1,
        })
    },[])
  return (
    <div style={{width: `${document.documentElement.scrollHeight}`}} className='SideMarqueeContainer overflow-clip flex justify-end relative align-middle left-0 top-10 z-50 h-min'>
        <div  className=' h-[1px] bg-white absolute top-[45%]'></div>
        
        <span ref={sideMarqueeText} className=' text-white relative z-40 bg-black px-1 text-[12px]'>
            PEELING BACK THE LAYERS TO REVEAL THE ESSENCE OF SELF
        </span>
    </div>
  )
}

export default SideMarquee