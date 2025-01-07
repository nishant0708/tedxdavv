import React, { useEffect, useState } from 'react'
import Marquee from 'react-fast-marquee'
import ReactPlayer from 'react-player'

const VideoSection = () => {

  return (
    <div className=' relative flex justify-center  items-center min-h-screen bg-black z-20'>


{/* https://youtube.com/shorts/jZRbOFMqESs?feature=share */}

        <div className=' relative rounded-3xl border-2 border-white bg-slate-50 bg-opacity-15 z-30 w-min'> 
            {/* <div className=' absolute rounded-3xl  w-[330px] h-[590px] mt-14 ml-9 bg-gradient-to-r from-purple-600 to-pink-500'></div> */}
            <iframe className='withoutSound  relative pointer-events-none my-6 mx-4 z-30 rounded-3xl'
                width="330" 
                height="590" 
                src="https://www.youtube.com/embed/jZRbOFMqESs?autoplay=1&loop=1&playlist=jZRbOFMqESs&controls=0&modestbranding=1&mute=1&showinfo=0&rel=0" 
                title="YouTube Shorts Video" 
                frameBorder="0" 
                allow="autoplay" 
                allowFullScreen
            ></iframe> 
        </div>
        
    </div>
  )
}

export default VideoSection