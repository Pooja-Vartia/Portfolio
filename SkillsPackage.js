import React from 'react'
// import MyportfolioHome from './myportfolioHome';
import 'bootstrap/dist/css/bootstrap.min.css';
 import 'animate.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

import { useEffect } from 'react';

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faHamburger } from '@fortawesome/free-solid-svg-icons';
// import { height } from '@fortawesome/free-brands-svg-icons/fa11ty';
export default function SkillsPackage() {

    
    useEffect(() => {
      AOS.init({ duration: 2000 });
    }, []);
    
const myskills ={
   background:"radial-gradient( circle  ,rgba(248, 234, 104, 0.925), rgb(233, 211, 85),rgba(247, 167, 62, 0.925))",
        backgroundClip: "text",
            webkitbackgroundClip: "text",
            color: "transparent",
          /* font-weight: "bold; */
          fontSize: "5vw",
          transform: "scale(1)",
          lineHeight: "1"
}
const myskillscontent ={
          margin:" 1% 3%",
          borderRight:" 2px solid goldenrod"
        }
  return (
    <>
        <div className='container-fluid'>
      <div className='container-fluid'>
                <div className='row '>
                    <div className='col-lg-12 col-md-12 mt-5'>

                       <div data-aos="fade-right">
        
                      <p className="  col-sm-10 py-5 text " style={myskills}>About Me: Computer Application Graduate, Front-end and Back-end Proficient + UX Designer</p>
            </div>
                    </div>
                    <div>
                    <div className='conatiner row col-lg-12' >
                      <div className='col-lg-3 col-md-3 col-sm-12 col-xs-12 ' style={myskillscontent}>
                       <h3 data-aos="zoom-out">Education</h3>
                        <h4 data-aos="fade-right" >I recently completed my bachelor's degree in computer application, developing a strong foundation in programming languages and web technologies.</h4>
                      </div>
                      <div className='col-lg-3 col-md-3 col-sm-12 col-xs-12 ' style={myskillscontent}>
                          <h3 data-aos="zoom-out">Skills</h3>
                          <h4  data-aos="fade-up">I am proficient in both front-end and back-end development, with expertise in HTML, CSS, jQuery, JavaScript, PHP, Bootstrap, and DBMS queries.</h4>
                      </div>
                      <div className='col-lg-3 col-md-3 col-sm-12 col-xs-12 ' style={myskillscontent}>
                         <h3 data-aos="zoom-out">Certifications</h3>
                          <h4  data-aos="fade-left">I have recently obtained a UX Design certification, enhancing my ability to create user-centric web experiences.</h4>
                      </div>
                        </div>
                    </div>
                </div>
      </div>
    </div>
    </>
  )
}
