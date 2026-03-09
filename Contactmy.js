import React, { useEffect, useState, useRef } from 'react';
import 'animate.css';
import 'animate.css/animate.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Calliimg from './Callimage.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';
import { faBackspace } from '@fortawesome/free-solid-svg-icons';
import { height } from '@fortawesome/free-brands-svg-icons/fa11ty';

import { faContactBook, faPhone, faHandshake, faMailForward , faClockRotateLeft} from '@fortawesome/free-solid-svg-icons';

export default function Contactmy({currentState}) {

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  const divStyle ={
    background: "radial-gradient(circle, rgba(51, 213, 225, 0.93), rgba(67, 137, 216, 0.69), rgba(151, 235, 241, 0.93))",
    height:'100vh',
    
  }
  return (
    <>
<div className='container ' >

 <div className="row" >
          <div className='col-lg-6 p-5 '>
            <h1>
                        <FontAwesomeIcon icon={faHandshake} size="1x" color={currentState ? '#ffffff' : '#000000'} />
            
            Get in touch</h1>
                        <h5>We're always on the lookout to work with new clients. If you're interested in working with us, please get in touch in one of the following ways.</h5>
                        <h3>
                        <FontAwesomeIcon icon={faContactBook} size="1x" color={currentState ? '#ffffff' : '#000000'} />
                        
                        Address</h3>
                        <p>8014 Edith Blvd NE, Albuquerque, New York, United States</p>
                              <div className='row'>
                                        <div className='col-6'>
                                          <h3>
                        <FontAwesomeIcon icon={faPhone} size="1x" color={currentState ? '#ffffff' : '#000000'} />
                                          
                                          Phone</h3>
                                          <p>(505) 792-2430</p>
                                        </div>
                                          <div className='col-6'>
                                            <h3>
                        <FontAwesomeIcon icon={faMailForward} size="1x" color={currentState ? '#ffffff' : '#000000'} />
                                            
                                            E-Mail</h3>
                                            <p>poojavartia@gmail.com</p>
                                          </div>
                              </div>
                        <h3>
                        <FontAwesomeIcon icon={faClockRotateLeft} size="1x" color={currentState ? '#ffffff' : '#000000'} />
                        
                        Opening Hours</h3>
                        
          </div>
          <div className='col-lg-6 p-5 rounded ' data-aos="fade-up"  style={{backgroundColor:'whitesmoke',color:'purple',fontSize:'20px'}}>
           <form>
<div className="form-group row ">
    <label for="username" className=" col-form-label">User Name</label>
    <div className="col-sm-12">
      <input type="text" className="form-control" id="username" placeholder="Username"/>
    </div>
  </div>

  <div className="form-group row" >
        <div className='col-lg-6'>
          <label for="staticEmail" className=" col-form-label">Email</label>
          <input type="text"  className="form-control" id="staticEmail" placeholder="email@example.com"/>
        </div>
  <div className='col-lg-6'>
    <label for="inputPassword" className=" col-form-label">Password</label>
      <input type="password" className="form-control" id="inputPassword" placeholder="Password"/>
    </div>
  </div>
  <div className="col-sm-12">
      <input type="text" className="form-control mt-5" id="username" placeholder="Subject"/>
    </div>


<div class="form-group mt-5">
    <label for="exampleFormControlTextarea1"> Message</label>
    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
  </div>

<button className='btn btn-warning col-lg-12 mt-3'>Send message</button>
          </form>
          </div>

</div>
</div>
 

    </>
  )
}
