import React, { useState } from 'react';
import { gsap } from 'gsap';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoCloseSharp } from 'react-icons/io5';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';
import './navbar.css';

gsap.registerPlugin(ScrollTrigger);

export default function Navbar() {
  const handleScrollToFooter = () => {
    const footerSection = document.getElementById('footer');
    window.scrollTo({
      top: footerSection.offsetTop,
      behavior: 'smooth',
    });
  };

  const [toggle, setToggle] = useState(false);

  const handleCloseOverlay = () => {
    setToggle(false);
  };

  return (
    <div className="app__navbar">
      <div className="tedxlogo">
        <img src="./images/logo-white.png" alt="tedxdavv-logo" />
      </div>
      <div className="app__navbar-lg flex__center">
        <ul className="app__navbar-links whitetext flex__center">
          <li>
            <Link to="/" onClick={handleCloseOverlay}>
              HOME
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={handleCloseOverlay}>
              ABOUT
            </Link>
          </li>
          <li>
            <button onClick={() => {
              handleScrollToFooter();
              handleCloseOverlay();
            }}>
              CONTACT US
            </button>
          </li>
        </ul>
      </div>
      {/* For small screens */}
      <div className="app__navbar-sm flex__center">
        <div className="burgericon">
          <GiHamburgerMenu
            color="#fff"
            className="hamburger"
            fontSize={27}
            onClick={() => {
              setToggle(true);
            }}
          />
        </div>
        {toggle && (
          <div className="app__navbar-sm-overlay flex__center slide-bottom">
            <IoCloseSharp
              color="#fff"
              className="hamburger"
              fontSize={27}
              onClick={handleCloseOverlay}
            />
            <ul className="app__navbar-smlinks">
              <li>
                <Link to="/" onClick={handleCloseOverlay}>
                  HOME
                </Link>
              </li>
              <li>
                <Link to="/about" onClick={handleCloseOverlay}>
                  ABOUT
                </Link>
              </li>
              <li>
                <button onClick={() => {
                  handleScrollToFooter();
                  handleCloseOverlay();
                }}>
                  CONTACT US
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
