import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import GoogleCertificate from './GoogleCertificate.png';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faHamburger } from '@fortawesome/free-solid-svg-icons';
// import { height } from '@fortawesome/free-brands-svg-icons/fa11ty';
import AOS from 'aos';
import 'aos/dist/aos.css';

import { useEffect } from 'react';

export default function MyUx() {

useEffect(() => {
  AOS.init({ duration: 2000 });
}, []);


    const myCertification={
  background: "radial-gradient(circle, rgba(248, 234, 104, 0.925), rgb(233, 211, 85), rgba(247, 167, 62, 0.925))",
  backgroundClip: "text",
  WebkitBackgroundClip: "text", // ✅ Corrected
  color: "transparent",
  fontSize: "5vw",
  lineHeight: "1"

          
}
  return (
    <div className='container-fluid ml-5 mt-5' >
        <section className="col-lg-12 fade-in" >
            <div className="row" >
                 <section className="col-lg-6">

                     <h1 className='text' style={myCertification} data-aos = "zoom-out"  >UX Design Certification: Enhancing My Skilled</h1>

                     <ul className="mt-5 list-unstyled" >
                      <li className="li-contents">
                      <h3>User Research</h3>
                      <h6>Learned techniques to deeply understand user needs and pain points.</h6>
                      </li>
                      <li  className="li-contents" >
                      <h3>Interaction Design</h3>
                      <h6>Developed skills in crafting intuitive and engaging user interfaces.</h6>
                      </li> 
                      <li className="li-contents" >
                        <h3>Usability Testing</h3>
                        <h6>Gained expertise in evaluating and iterating on design solutions.</h6>
                      </li>
                      
                     </ul>
                 </section>
                  <section className="col-lg-6 mt-5 d-flex justify-content-sm-center " data-aos="flip-left">
                    <img src={GoogleCertificate} alt="loading" 
                    className="col-lg-12 col-md-12 col-sm-6 col-xs-6 img img-fluid img-thumbnail"/>
                  </section>
            </div>
        </section>
    </div>
  )
}
