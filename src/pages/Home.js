function Home () {
  return (
    <>
    <div className="home-container z-0 relative h-screen w-screen bg-[url('https://i.imgur.com/15kLXCo.jpg')]">

      <div className="tedxdavv flex justify-center items-center overflow-visible"> 
        <img src="https://imgur.com/x2waeLN.png" alt="tedxdavv-logo" className=" translate-y-[60%] z-30 w-[50%] align-middle" />
      </div>

      <div className="plane flex justify-center items-center">
        <img src="https://imgur.com/ezYCFjb.png" alt="Plane" className="w-[35%] z-10" />
      </div>

      <div className="jupyter flex justify-center items-center">
        <img src="https://imgur.com/0RdQsnz.png" alt="jupyter-logo" className="z-[2] w-auto overflow-visible" />
      </div>

      <div className="parachute flex justify-center items-center">
        <img src="https://imgur.com/0DfiIx0.png" alt="Balloon" className=" w-[70%] overflow-visible" />
      </div>

      <div className="buildings flex justify-center items-center overflow-visible">
        <img src="https://imgur.com/l0R1zsK.png" alt="Rnth" className="rnth translate-y-[40%] absolute z-20 w-[45%] " />
        <img src="https://imgur.com/1kMuayP.png" alt="com-building" className=" translate-x-[20%] translate-y-[60%] scale-130 com-building  z-30" />
        <img src="https://imgur.com/5lM9ZKx.png" alt="admin-building" className="admin-building translate-x-[10%] translate-y-[30%] scale-150 z-10" />
        <img src="https://imgur.com/ULPHWw4.png" alt="f-block" className="overflow-visible f-block -translate-y-[0] scale-130 z-10" /> 

        <img src="https://imgur.com/0FDy8T2.png" alt="alumni" className="alumni absolute w-[30%] z-50 right-[-10%] bottom-[-15%]" />
      </div>

      <div className="clouds">
        <img src="https://assets.codepen.io/721952/cloud3.png" alt="main-cloud" className="absolute overflow-hidden w-[180rem] h-[auto] scale-[105%] right-[2.4rem] bottom-[0] z-40 hidden md:block" />
      </div>

      <div className="rocket flex justify-center items-center">
        <img src="https://imgur.com/yQpY7hg.png" alt="Rocket" className="z-[5] w-[50%]" />
      </div>

    </div>
    </>
  );
}

export default Home;