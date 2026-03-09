import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import canvapic from './canvapic.png';
import figmapic from "./figmapic.png";
import visual from "./visual.png";
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { height, width } from '@fortawesome/free-brands-svg-icons/fa11ty';
import { faGithub, faGoodreads, faFigma } from '@fortawesome/free-brands-svg-icons';
// import GoogleCertificate from './GoogleCertificate.png';
// import { height } from '@fortawesome/free-brands-svg-icons/fa11ty';


import AOS from 'aos';
import 'aos/dist/aos.css';

import { useEffect } from 'react';

export default function ToolsKnowledge() {


useEffect(() => {
  AOS.init({ duration: 2000 });
}, []);


  const myTools ={
    background:"radial-gradient( circle  ,rgba(248, 234, 104, 0.925), rgb(233, 211, 85),rgba(247, 167, 62, 0.925))",
        backgroundClip: "text",
            webkitbackgroundClip: "text",
            color: "transparent",
          /* font-weight: "bold; */
          fontSize: "5vw",
          transform: "scale(1)",
          lineHeight: "1",
           animationDuration: '3.4s', animationDelay: '0.9s'
           
  }
  
  const toolstyle = {
        // outline: "1px solid grey",
        // outlineOffset: "-5",
        // borderRadius:" 15px",
        listStyle:'none',
          backgroundColor: 'rgba(0, 0, 0, 0.05)',
          // color: currentState ? 'white' : 'black',
        backdropFilter: 'blur(10px)',
          WebkitBackdropFilter: 'blur(10px)'
      }
   const headings={
    // borderBottom:'2px solid gold',
    // textAlign:'center'
   } 
const StyleList ={
  padding:'5vh 2vw',
  
}
  return (
    <>    
    <div className='container-fluid  mt-5 '> 
    <section className="tools-section col-lg-8" id="myCertification" >
      <h2  style={myTools}>Software I Use in My Coding Journey</h2>
      </section>
      <section>
      <ul className="container tools-list" style={toolstyle} data-aos="fade-down">
         <div className=' row' >
            <li className='col-lg-4 ' style={StyleList}>
            <h4 className='center' style={headings}>Canva</h4>
            <img src={canvapic} alt="" className="img img-fluid" data-aos="flip-left"></img>
            <p>I use Canva to create simple designs and graphics for my projects and presentations.</p>
            </li>
             <li className='col-lg-4 ' style={StyleList}>
            <h4 className='center'   style={headings}>Figma</h4>
            <img src={figmapic} alt="" className="img img-fluid " data-aos="flip-down"></img>
            <p>Figma helps me design website layouts and user interfaces. I also use it to share ideas with others.</p>
            </li>
             <li className='col-lg-4 ' style={StyleList}>
            <h4 className='center'  style={headings}>Visual Studio Code</h4>
            <img src={visual} alt="" className="img img-fluid " data-aos="flip-right"></img>
            <p>This is my main code editor. I use it to write and test my code easily with helpful extensions.</p>
            </li>
         </div>
         <div  className=' row'>
            <li className='col-lg-4 ' style={StyleList}>
            <h4 className='center'  style={headings}>Git</h4>
            <img src={canvapic} alt="" className="img img-fluid" data-aos="flip-right"></img>
            <p>Git helps me keep track of changes in my code. I can go back if something breaks or gets messy.</p>
            </li>
             <li className='col-lg-4 ' style={StyleList}>
            <h4 className='center' style={headings} >GitHub</h4>
            <img src={canvapic} alt="" className="img img-fluid"  data-aos="flip-right"></img>
            <p>I use GitHub to store my code online and share it with others. It also helps me work on team projects.</p>
            </li>
         </div>

      </ul>
    </section>
    </div>
    </>
  );
};

