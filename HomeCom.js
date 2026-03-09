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


export default function HomeCom({ currentState }) {

const [menuOpen, setMenuOpen] = useState(false);
const textRef = useRef(null);
useEffect(() => {
  AOS.init({ duration: 2000 });
}, []);


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
    <>
    <div className="container-fluid " >
      

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
              Welcome! I'm a Full Stack Web Developer—feel free to explore my portfolio and biodata using navigation to see my work and skills in action.
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

    <div>
      


    <div className="container my-5">
      <h1 className=" mb-3 bold">Experience</h1>
      <h4 className=" ">
        Welcome to my journey! Here's why this matters: every step reflects growth, grit, and a passion for design and development. If you're curious about how a self-taught learner evolves into a full-stack creator, read on.
      </h4>

      <div className="row col-12 mt-4">
        <div className="col-md-6 mb-4">
          <div className="border p-3 rounded shadow-sm col-lg-12">
            <h5>🎓 School Education</h5>
            <p><strong>What:</strong> Arts Field</p>
            <p><strong>Where:</strong> Local Government Girl School Amloh</p>
            <p><strong>When:</strong> Completed in 2020</p>
            <p><em>Experience:</em> Built a strong foundation in creativity and expression.</p>
          </div>
        </div>

        <div className="col-md-6 mb-4">
          <div className="border p-3 rounded shadow-sm col-lg-12">
            <h5>🎓 Graduation</h5>
            <p><strong>What:</strong> Bachelor's Degree In Computer Application</p>
            <p><strong>Where:</strong> MGC College, Fatehgarh Sahib</p>
            <p><strong>When:</strong> Completed in 2023</p>
            <p><em>Experience:</em> Gained academic depth in Full Stack Web Development.</p>
          </div>
        </div>
</div>
<div className="row col-12 mt-4">
        <div className="col-md-6 mb-4">
          <div className="border p-3 rounded shadow-sm">
            <h5>📜 UX Design Certification</h5>
            <p><strong>What:</strong> Google UX Design Program</p>
            <p><strong>Where:</strong> Online</p>
            <p><strong>When:</strong> 6-month program completed in 2024 </p>
            <p><em>Experience:</em> Learned user-centered design, wireframing, prototyping, and usability testing.</p>
          </div>
        </div>

        <div className="col-md-6 mb-4">
          <div className="border p-3 rounded shadow-sm">
            <h5>💻 Web Development Practice</h5>
            <p><strong>What:</strong> Self-study & Projects</p>
            <p><strong>Where:</strong> Home + Online Resources</p>
            <p><strong>When:</strong> Ongoing</p>
            <p><em>Experience:</em> Designed web pages using HTML, CSS, JavaScript, React, Bootstrap, PHP & MySQL. Currently diving deeper into full-stack development.</p>
          </div>
        </div>
      </div>
    </div>

     
    </div>
    </div>
   </> 
  );
}