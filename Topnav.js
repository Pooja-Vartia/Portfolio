import React, { useEffect, useState, useRef } from 'react';
import myLogo from './myLogo.png';
import { Link } from 'react-router-dom';
import 'animate.css';
import 'animate.css/animate.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHamburger, faCode, faHouse, faLaptopCode, faPhoneFlip } from '@fortawesome/free-solid-svg-icons';

export default function Topnav({ mytoggler, currentState} ) {

    const [menuOpen, setMenuOpen] = useState(false);
    // const textRef = useRef(null);
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
   const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <div className='conatiner-fluid'>
      <nav className="navbar navbar-expand-lg py-1 px-3" style={navStyle} id='navbarContent'>
        <div className="d-flex align-items-center w-100 justify-content-between">

          

          <Link to="/Home" className="navbar-brand">
            <img src={myLogo} alt="Logo" style={{ height: '90px' }} />
          </Link>
          <h6 className="mb-0 ">UX DESIGNER + FULL STACK WEB DEVELOPER</h6>
          <FontAwesomeIcon icon={faCode} size="1x" color={currentState ? '#ffffff' : '#000000'} />

          <div className="d-none d-lg-flex flex-grow-1 justify-content-end">
  <ul className="navbar-nav flex-row gap-4 align-items-center" style={{ fontSize: '18px' }}>
    <li className="nav-item">
      <Link className="nav-link d-flex align-items-center gap-2" style={navStyle} to="/home">
        <FontAwesomeIcon icon={faHouse} size="1x" color={currentState ? '#ffffff' : '#000000'} />
        Home
      </Link>
    </li>
    <li className="nav-item">
      <Link className="nav-link d-flex align-items-center gap-2" style={navStyle} to="/about">
        <FontAwesomeIcon icon={faCode} size="1x" color={currentState ? '#ffffff' : '#000000'} />
        About
      </Link>
    </li>
    <li className="nav-item">
      <Link className="nav-link d-flex align-items-center gap-2" style={navStyle} to="/work">
        <FontAwesomeIcon icon={faLaptopCode} size="1x" color={currentState ? '#ffffff' : '#000000'} />
        Work
      </Link>
    </li>
    <li className="nav-item">
      <Link className="nav-link d-flex align-items-center gap-2" style={navStyle} to="/contact">
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
            <button className="btn" style={buttonStyle} onClick={mytoggler}>
              {currentState ? 'white' : 'black'}
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="d-lg-none mt-2 w-100" style={{ backgroundColor: currentState ? '#222' : '#eee' }}>
            <ul className="navbar-nav flex-column pl-3" style={{ fontSize: '18px' }}>
              <li className="nav-item"><Link className="nav-link" style={navStyle} to="/home">Home</Link></li>
              <li className="nav-item"><Link className="nav-link" style={navStyle} to="/about">About</Link></li>
              <li className="nav-item"><Link className="nav-link" style={navStyle} to="/work">Work</Link></li>
              <li className="nav-item"><Link className="nav-link" style={navStyle} to="/contact">Contact</Link></li>
            </ul>
          </div>
        )}
      </nav>

    </div>
  )
}
