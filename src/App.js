import React from 'react';
import { useState, useEffect } from "react";
import { Routes, Route } from 'react-router-dom'
import $ from 'jquery'
import Loader from "./Components/Loader";
import HeroPage from "./Components/HeroPage";
import About from "./Components/About";
import Footer from "./Components/Footer";
import Whyus from "./Components/Whyus";
import Navbar from "./Components/Navbar";
import Speaker from "./Components/Speaker";
import Team from './Components/Team';
import HeroNew from './Components/HeroNew';
import Sponsor from './Components/sponsor';

function App() {

  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true)
    const onPageLoad = () => {
      setTimeout(() => {
        $("#content").fadeIn(1000)
        setLoading(false)
      }, 5500)
    }

    if (document.readyState === 'complete') {
      onPageLoad();
    } else {
      window.addEventListener('load', onPageLoad);

      return () => window.removeEventListener('load', onPageLoad)
    }
  }, [])
  return (
    <div className="App">
      {
        loading ?
          <Loader /> //works if loader is true else neeche wala
          :
          <>
            {/* <Navbar /> */}
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Footer />} />
            </Routes>
            <Footer />
          </>
      }
    </div>
  );
}
const HomePage = () => {
  const isHomePage = window.location.pathname === '/';

  return (
    <div>
      {isHomePage &&
        <>
      {/* <HeroPage /> */}
      <HeroNew/>
      <Speaker />
      {/* Gallery Component is to be here */}
      <Team />
      <Whyus />
      <Sponsor/>
      </>
      }
    </div >
  );
}
export default App;
