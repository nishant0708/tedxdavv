import React from "react";
import '../index.css';
// import { Tween, Timeline } from 'react-gsap';
// import { gsap } from 'gsap';

function Hero() {
    return (
        <div>
            {/* mobile */}
            <div className="pl-[5%] h-screen w-screen bg-[url('https://i.imgur.com/15kLXCo.jpg')] bg-contain block sm:hidden">
                {/* <Tween from={{ opacity: 0 }} to={{ opacity: 1 }} duration={2} ease="power1.out"> */}
                {/* <img src="https://i.imgur.com/15kLXCo.jpg" alt="" className="w-full h-auto bg-clip overflow-clip absolute" /> */}
                <div className="flex justify-center">
                    <img src="https://i.imgur.com/sNLtX0F.png" alt="tedx-davv-logo" className="w-48 h-48 bottom-10 relative" />
                </div>
                <div className="">
                    <img src="https://i.imgur.com/ud5pNJs.png" alt="Planet" className="relative left-[-82px] top-[-6rem] h-40" />
                </div>
                <img src="https://i.imgur.com/iEkwjMj.png" alt="Clouds" className="relative w-auto h-64 left-[120px] bottom-36 scale-150 overflow-hidden" />
                <div className="flex w-screen justify-center">
                    <img src="https://i.imgur.com/ZAg3b4l.png" alt="Plane" className="relative h-24 left-[60px] bottom-[420px] scale-[150%]" />
                </div>
                <img src="https://i.imgur.com/kKKVr8M.png" alt="Balloon" className="relative h-24 left-[300px] bottom-[310px] scale-[340%]" />
                <div className="relative">
                    <img src="https://i.imgur.com/1Y26fBs.png" alt="Rnth" className="relative h-24 left-[120px] bottom-[30px] scale-[450%]" />
                    <img src="https://i.imgur.com/2k6zadm.png" alt="admiin-building" className="absolute h-24 right-[-20px] bottom-[270px] scale-[200%]" />
                    <img src="https://assets.codepen.io/721952/cloud1.png" alt="cloud-2" className="relative w-screen h-56 left-[200px] bottom-[320px] scale-[250%]" />
                </div>
                {/* </Tween> */}
            </div>

            {/* desktop */}
            <div className="relative pl-[5%] h-screen w-screen bg-[url('https://i.imgur.com/15kLXCo.jpg')] bg-contain hidden sm:block">
                {/* <Tween from={{ opacity: 0 }} to={{ opacity: 1 }} duration={2} ease="power1.out"> */}
                {/* <img src="https://i.imgur.com/15kLXCo.jpg" alt="" className="w-full h-auto bg-clip overflow-clip absolute" /> */}
                <div className="flex justify-center">
                    <img src="https://i.imgur.com/sNLtX0F.png" alt="tedx-davv-logo" className="w-48 h-48 top-[8rem] relative scale-[280%]" />
                </div>
                <div className="">
                    <img src="https://i.imgur.com/ud5pNJs.png" alt="Planet" className="relative left-[66rem] top-[-10rem] h-24" />
                </div>
                <img src="https://i.imgur.com/iEkwjMj.png" alt="Clouds" className="relative w-auto h-64 left-[32.5rem] bottom-36 scale-[400%] overflow-hidden" />
                <div className="flex w-screen justify-center">
                    <img src="https://i.imgur.com/ZAg3b4l.png" alt="Plane" className="relative h-24 left-[4rem] bottom-[30.6rem] scale-[150%]" />
                </div>
                <img src="https://i.imgur.com/kKKVr8M.png" alt="Balloon" className="relative h-24 left-[31.25rem] bottom-[24.3rem] scale-[500%]" />
                <div className="relative">
                    <img src="https://i.imgur.com/1Y26fBs.png" alt="Rnth" className="relative h-24 left-[18.1rem] bottom-[6.25rem] scale-[450%] sm:max-md:absolute sm:max-md:bottom-[17rem] sm:max-lg:left-0" />
                    <img src="https://i.imgur.com/2k6zadm.png" alt="admin-building" className="absolute h-24 right-[0] bottom-[23rem] scale-[350%] block sm:max-md:bottom-[18rem] 2xl:right-[28.125rem]" />
                    <img src="https://assets.codepen.io/721952/cloud1.png" alt="cloud-2" className="relative w-auto h-56 left-[31.25rem] bottom-[32.5rem] scale-[550%] z-20" />
                </div>
                <img src="https://i.imgur.com/57IN6rJ.png" alt="rocket" className="relative w-auto h-96 left-[67.5rem] bottom-[61.25rem]" />
                <img src="https://i.imgur.com/kkSsQ9a.png" alt="com-building" className="relative w-auto h-72 left-[31.875rem] bottom-[54.375rem] z-0 sm:max-[1200px]:hidden" />
                <img src="https://i.imgur.com/B2I3OXn.png" alt="alumni" className="relative w-auto h-96 left-[63.5rem] bottom-[75.25rem] hidden z-20 xl:block" />
                <img src="https://i.imgur.com/EFmjd5I.png" alt="a-block" className="relative w-auto h-96 left-[66.5rem] bottom-[109.25rem] hidden xl:block" />
                {/* <img src="https://assets.codepen.io/721952/cloud3.png" alt="main-cloud" className="relative overflow-hidden w-[180rem] h-[auto] scale-[105%] right-[2.4rem] bottom-[0] z-40 hidden md:block" /> */}
                {/* </Tween> */}
            </div>
        </div>
    );
}

export default Hero;