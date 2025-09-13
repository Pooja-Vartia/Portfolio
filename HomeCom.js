import React, { useEffect, useState, useRef } from 'react';
import myLogo from './myLogo.png';
import MYphoto from './MYphoto.png';
import HomePic from './HomePic.png';
import 'animate.css';
import 'animate.css/animate.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faGoodreads, faFigma } from '@fortawesome/free-brands-svg-icons';
import { faHamburger, faCode, faHouse, faLaptopCode, faPhoneFlip } from '@fortawesome/free-solid-svg-icons';

import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';


export default function HomeCom({ handleToggle, currentState }) {

const [menuOpen, setMenuOpen] = useState(false);
const textRef = useRef(null);
useEffect(() => {
  AOS.init({ duration: 2000 });
}, []);


  const navStyle = {
    position: 'sticky',
    top: 0,
    zIndex: 1000,
    background: currentState ? 'black' : 'white',
    color: currentState ? 'white' : 'black',
  };

  const buttonStyle = {
    background: currentState ? 'white' : 'black',
    color: currentState ? 'black' : 'white',
    cursor: 'pointer',
  };

  const HeadingColor = {
    background: "radial-gradient(circle, rgba(225, 208, 51, 0.93), rgba(216, 193, 67, 0.91), rgba(237, 163, 68, 0.93))",
    backgroundClip: "text",
    WebkitBackgroundClip: "text",
    color: "transparent",
    fontSize: "50px",
     animationDuration: '3.4s', animationDelay: '0.9s'
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="container-fluid " >
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg py-1 px-3" style={navStyle}>
        <div className="d-flex align-items-center w-100 justify-content-between">
          <Link to="/Home" className="navbar-brand">
            <img src={myLogo} alt="Logo" style={{ height: '90px' }} />
          </Link>
          <h6 className="mb-0 ">UX DESIGNER + FULL STACK WEB DEVELOPER</h6>
          <FontAwesomeIcon icon={faCode} size="1x" color={currentState ? '#ffffff' : '#000000'} />

          <div className="d-none d-lg-flex flex-grow-1 justify-content-end">
            <ul className="navbar-nav flex-row gap-4" style={{ fontSize: '18px' }}>
              <li className="nav-item">
               
              <Link className="nav-link" style={navStyle} to="/about">
              <FontAwesomeIcon icon={faHouse} size="1x" color={currentState ? '#ffffff' : '#000000'} /> 
              About
              </Link>
              </li>
              <li className="nav-item">
              <Link className="nav-link" style={navStyle} to="/work">
              <FontAwesomeIcon icon={faLaptopCode} size="1x" color={currentState ? '#ffffff' : '#000000'} /> 
              Work
              </Link>
              </li>
              <li className="nav-item">
              <Link className="nav-link" style={navStyle} to="/contact">
              <FontAwesomeIcon icon={faPhoneFlip} size="1x" color={currentState ? '#ffffff' : '#000000'} /> 
              Contact
              </Link>
              </li>
            </ul>
          </div>

          <div className="d-flex align-items-center">
            <button className="btn d-lg-none me-2" onClick={toggleMenu}>
              <FontAwesomeIcon icon={faHamburger} size="2x" color={currentState ? '#ffffff' : '#000000'} />
            </button>
            <button className="btn" style={buttonStyle} onClick={handleToggle}>
              {currentState ? 'white' : 'black'}
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="d-lg-none mt-2 w-100" style={{ backgroundColor: currentState ? '#222' : '#eee' }}>
            <ul className="navbar-nav flex-column pl-3" style={{ fontSize: '18px' }}>
              <li className="nav-item"><Link className="nav-link" style={navStyle} to="/about">About</Link></li>
              <li className="nav-item"><Link className="nav-link" style={navStyle} to="/work">Work</Link></li>
              <li className="nav-item"><Link className="nav-link" style={navStyle} to="/contact">Contact</Link></li>
            </ul>
          </div>
        )}
      </nav>

      {/* Content Section */}
      <div data-aos="fade-up"
        className="mx-auto "
        style={{
          width: '80vw',
          marginTop: '13vh',
          backgroundColor: currentState ? 'rgba(0, 0, 0, 0.09)' : 'rgba(0, 0, 0, 0.04)',
          color: currentState ? 'white' : 'black',
          boxShadow: '0 8px 32px rgba(31, 38, 135, 0.37)',
          borderRadius: '20px',
          backdropFilter: 'blur(10px)',
          WebkitBackdropFilter: 'blur(10px)',
          padding: '15vh 7vw'
        }}
      >
        <div className="row " >
          <div
            className="col col-lg-4 col-md-12 col-sm-12 col-xs-12"
            style={{
              paddingTop: '5vh',
              paddingBottom: '5vh',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'column'
            }}
          >
            <h1 className=" ">Hi..I'm</h1>


            <div data-aos="fade-right">
              <h1 className=' animate_animation animate_tada' style={HeadingColor}>Pooja Vartia</h1>
            </div>


            {/* ✅ Typewriter Text Appears Here */}
          </div>

          <div className="container ml-5 center col-lg-6 col-md-12 col-sm-12 col-xs-12" >
            <h4 className=" " style={{ fontFamily: 'serif', fontSize: '20px' }}>
              Welcome! I'm a Full Stack Web Developer—feel free to explore my portfolio and biodata below to see my work and skills in action.
            </h4>
            <FontAwesomeIcon icon={faCode} size="2x" color={currentState ? '#ffffff' : '#000000'} />
            <div
              ref={textRef}
              style={{
                marginTop: '20px',
                fontSize: '20px',
                 background: "radial-gradient(circle, rgba(55, 48, 148, 0.93), rgba(57, 80, 211, 0.91), rgba(117, 117, 253, 0.93))",
          boxShadow: '0 8px 32px rgba(31, 38, 135, 0.37)',

    backgroundClip: "text",
    WebkitBackgroundClip: "text",
    color: "transparent",
                fontWeight: 'bold',
                fontFamily: 'serif',
                // color: currentState ? 'white' : 'black',
                minHeight: '40px',
                textAlign: 'center'
              }}
            >
            <p>Portfolio!</p>
            </div>
          </div>
        </div>
      </div>

            <h3 className="container mt-5" style={{
              borderTop: '4px solid goldenrod',

              fontStyle: 'italic',
              padding: '10vh 2vw'
            }} data-aos="fade-left">
              "I'm a Computer Applications graduate skilled in Front-end and Back-end development, with a recent Google UX Design certification. I design and develop intuitive interfaces using Figma, Canva and VS Code. 
              <div className='container mt-5 d-flex justify-content-end  '  style={{
          width: '30vw',
          backgroundColor: currentState ? 'rgba(0, 0, 0, 0)' : 'rgba(0, 0, 0, 0.18)',
          color: currentState ? 'white' : 'black',
          boxShadow: '0 8px 32px rgba(17, 28, 188, 0.37)',
          //  backdropFilter: 'blur(10px)',
          // WebkitBackdropFilter: 'blur(10px)',
          // borderRadius: '20px',
          backdropFilter: 'blur(10px)',
          WebkitBackdropFilter: 'blur(10px)',
        }}>
             <FontAwesomeIcon icon={faGithub} size="2x" color={currentState ? '#ffffff' : '#000000'} />
             <FontAwesomeIcon icon={faGoodreads} size="2x" color={currentState ? '#ffffff' : '#000000'} />
             <FontAwesomeIcon icon={faFigma} size="2x" color={currentState ? '#ffffff' : '#000000'} />
              </div>
            </h3>

    </div>
  );
}