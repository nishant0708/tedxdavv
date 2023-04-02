function Home () {
  return (
    <>
    <div className="home-container z-0 relative h-screen w-screen bg-[url('https://i.imgur.com/15kLXCo.jpg')]">

      <div className="tedxdavv flex justify-center items-center"> 
        <img src="https://i.imgur.com/35djetn.png" alt="tedxdavv-logo" className="z-10 align-middle" />
      </div>

      <div className="plane">
        <img src="https://i.imgur.com/ZAg3b4l.png" alt="Plane" className="z-10 w-[60%]" />
      </div>

      <div className="jupyter">
        <img src="https://i.imgur.com/ud5pNJs.png" alt="jupyter-logo" className="z-10 align-left" />
      </div>

      <div className="parachute overflow-visible">
        <img src="https://imgur.com/0DfiIx0.png" alt="Balloon" className="w-[100vh] scale-[100%] overflow-visible" />
      </div>

      <div className="buildings overflow-auto ">
        <img src="https://imgur.com/40LXTCp.png" alt="Rnth" className="w-[50%] overflow-auto" />
        <img src="https://imgur.com/5lM9ZKx.png" alt="admin-building" className="w-[50%] absolute left-[10%]" />
        {/* <img src="https://i.imgur.com/kkSsQ9a.png" alt="com-building" className="" /> */}
        {/* <img src="https://i.imgur.com/B2I3OXn.png" alt="alumni" className="" /> */}
        {/* <img src="https://i.imgur.com/EFmjd5I.png" alt="a-block" className="" /> */}
      </div>

      <div className="clouds"></div>

      <div className="rocket">
        <img src="https://i.imgur.com/57IN6rJ.png" alt="Rocket" className="z-10 w-[100%]" />
      </div>

    </div>
    </>
  );
}

export default Home;