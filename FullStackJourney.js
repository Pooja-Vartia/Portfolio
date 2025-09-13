import React,{useState} from 'react'
import './MyStyle.css';
import 'animate.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Html from './Html.png'
import javascript from './javascript.png';
import Jquery from './Jquery.png';
import CssImg from './CssImg.png';
import Phpimg from './Phpimg.png'
import mySqimg from './mySqimg.png'
import Reactimg from './Reactimg.png';
import BootstrapFile from './BootstrapFile.png';
import AOS from 'aos';
import 'aos/dist/aos.css';

import { useEffect } from 'react';

export default function FullStackJourney() {

useEffect(() => {
  AOS.init({ duration: 2000 });
}, []);



 
  return (
<>
      
    <div className='container mt-5 myFullStackDiv' data-aos="fade-down" >
      <h2 className="text-center mb-5">My Full Stack Web Development Journey</h2>

      <div className="row mb-4">
        <div className="col-md-6 col-lg-3 designing">
        <img src={Html} className='img img-fluid w-25 d-flex justify-content-center' data-aos="flip-left"></img>
          <h5> HTML</h5>
          <p>
            I craft the structural foundation of every web page using semantic HTML, ensuring clarity and accessibility.
          </p>
        </div>
        <div className="col-md-6 col-lg-3 designing">
        <img src={CssImg} className='img img-fluid w-25 d-flex justify-content-center' data-aos="flip-down"></img>

          <h5> CSS</h5>
          <p>
            With CSS, I design responsive, visually engaging interfaces that adapt seamlessly across devices.
          </p>
        </div>
         <div className="col-md-6 col-lg-3 designing">
        <img src={javascript} className='img img-fluid w-25 d-flex justify-content-center' data-aos="flip-up"></img>

          <h5>JavaScript</h5>
          <p>
            JavaScript powers the interactivity in my projects, enabling dynamic content and smooth user experiences.
          </p>
        </div>
        <div className="col-md-6 col-lg-3 designing">
        <img src={Reactimg} className='img img-fluid w-25 d-flex justify-content-center' data-aos="flip-right"></img>

          <h5> React</h5>
          <p>
            I build scalable, component-driven applications with React, focusing on performance and modular design.
          </p>
        </div>
      </div>
<div className="row mb-4">
        <div className="col-md-6 col-lg-3 designing">
          <img src={BootstrapFile} className='img img-fluid w-25 d-flex justify-content-center' data-aos="flip-down"></img>

          <h5> Bootstrap</h5>
          <p>
            Bootstrap helps me rapidly prototype responsive layouts with consistency and elegance.
          </p>
        </div>
        <div className="col-md-6 col-lg-3 designing">
          <img src={Jquery} className='img img-fluid w-25 d-flex justify-content-center' data-aos="flip-up"></img>
          <h5> jQuery</h5>
          <p>
            I use jQuery to simplify DOM manipulation and enhance legacy projects with modern interactions.
          </p>
        </div>
        <div className="col-md-6 col-lg-3 designing">
          <img src={Phpimg} className='img img-fluid w-25 d-flex justify-content-center' data-aos="flip-left"></img>
          <h5> PHP</h5>
          <p>
            PHP powers my server-side logic, enabling dynamic content generation and backend functionality.
          </p>
        </div>
        <div className="col-md-6 col-lg-3 designing">

          <img src={mySqimg} className='img img-fluid w-25 d-flex justify-content-center' data-aos="flip-right"></img>
          <h5>MySQL</h5>

          <p>
            I design and manage efficient databases with MySQL, ensuring secure and scalable data handling.
          </p>
        </div>
      </div>

    </div>
   
</>
  )
}
