import React, { useEffect, useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faGoodreads, faFigma } from '@fortawesome/free-brands-svg-icons';
import { faHamburger, faCode, faHouse, faLaptopCode, faPhoneFlip } from '@fortawesome/free-solid-svg-icons';
import 'animate.css';
import 'animate.css/animate.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';



import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';

export default function Headernav(handleToggle) {
  return (
    <>
<div className='container-fluid '>
 <nav className="navbar navbar-expand-lg py-1 px-3" style={navStyle}>
        <div className="d-flex align-items-center w-100 justify-content-between">
          <Link  className="navbar-brand">
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
</div>
    </>
  )
}
