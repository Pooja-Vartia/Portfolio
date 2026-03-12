import React, { useEffect, useState, useRef } from 'react';
// import {Link} from 'react-router-dom';
import 'animate.css';
import 'animate.css/animate.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import CloudDashboard from './CloudDashboard.JPG';
import Singleleaf from './Singleleaf.png';
import  busFullScreen from './busFullScreen.JPG';
import portfolioWork2 from './portfolioWork2.JPG';
import myLogo from './myLogo.png';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';

export default function Mywork() {
const [menuOpen, setMenuOpen] = useState(false);
const textRef = useRef(null);
useEffect(() => {
  AOS.init({ duration: 2000 });
}, []);
  return (
    <>
    <div>
   
    <div className="container-fluid ">
    
    <div className='row mt-5'  style={{
      height:'50vh'
    }}>
    <div className='col-lg-12'>
      <h1  style={{
            textAlign:'center',
            fontSize:'5rem',
            color:'blue'
          }}>CloudColor Dashboard
      <h2 className='text-center' style={{
        color:'black'
      }}
       data-aos="zoom-out">DESIGNING CONTRAST, EMPOWERING ACCESSIBILITY.</h2>
       </h1>
        <div className='row d-flex justify-content-center '>
        <button className='col-lg-1 btn btn-dark m-1'>Project</button>
         <button className='col-lg-2 btn btn-dark m-1'>Case Studies</button>
        <button className='col-lg-1 btn btn-dark m-1'>Git Repo</button>

        </div>  
        </div>
    </div>
      {/* Row 1 */}
      <div className="row "  style={{
      height:'100vh',
     }}>
          <div className=' col-lg-6 '>
               <img src={CloudDashboard} className='img img-fluid ' alt="LOADING.." style={{
                boxShadow:'0 0 20px black',
                borderRadius:'10px'
               }} />
              
          </div>
          <div  className=" col-lg-6 p-5" style={{
          backgroundImage: `url(${Singleleaf})`,
        backgroundSize: "contain",
        backgroundSize:'30% 50%',
        backgroundPosition: "right bottom",
        backgroundRepeat:'no-repeat',
          }}>
          <p className='mt-5' style={{
            color:'rgb(150, 80, 216)'
          }}>CloudColors Dashboard is a modern web application designed to empower web designers, UI beginners, and accessibility-conscious creators with the art and science of color contrast. Built with inclusivity at its core, the platform helps users craft visually appealing and readable interfaces for everyone—including those with weak eyesight or color blindness.</p>
          <div>
            <button type='button' className="btn  projectbtn m-1">Check Website</button>
            <button type='button'  className="btn  projectbtn m-1">Case Studies</button>
            <button type='button' className='btn projectbtn m-1' >GitHub Repo</button>
          </div>
       </div>
        
      </div>
      <br></br>
       {/* Row 2 */}
<div className='row mt-5'  style={{
      height:'50vh'
    }}>
    <div className='col-lg-12'>
      <h1  style={{
            textAlign:'center',
            fontSize:'5rem',
            color:'blue'
          }}>BusLink Amloh 
      <h2 className='text-center' style={{
        color:'black'
      }}
       data-aos="zoom-out">CLEAR ROUTES. EASY SCHEDULES. SMOOTH TRAVEL.</h2>
       </h1>
        <div className='row d-flex justify-content-center '>
        <button className='col-lg-1 btn btn-dark m-1'>Project</button>
         <button className='col-lg-2 btn btn-dark m-1'>Case Studies</button>
        <button className='col-lg-1 btn btn-dark m-1'>Git Repo</button>

        </div>  
        </div>
    </div>
     <div className="row mt-2" style={{
      height:'100vh'
     }}>
     
        <div  className=" col-lg-6 singleleaf"   style={{
          backgroundImage: `url(${Singleleaf})`,
        backgroundSize: "contain",
        backgroundSize:'30% 50%',
        backgroundPosition: "center bottom",
        backgroundRepeat:'no-repeat',
        
          }}>
        <h1 style={{color:' rgba(255, 225, 56, 0.795)', fontWeight:'bold'}} className='mt-5'>BusLink Amloh</h1>
          <p>BusLink Amloh is your smart travel guide, bringing bus routes, timings, and destinations together in one simple app. From quick departure checks to organized schedules and an interactive map view, it makes planning journeys effortless. Whether you’re a student, visitor, or daily commuter, BusLink Amloh saves time, reduces confusion, and ensures smoother travel every day.</p>
          <div>
            <button type='button' style={{backgroundColor:'  rgba(255, 225, 56, 0.795)'}} variant="primary" className="btn m-1">Check Website</button>
            <button type='button' style={{backgroundColor:'  rgba(255, 225, 56, 0.795)'}} variant="secondary" className="btn m-1">Case Studies</button>
            <button type='button' style={{backgroundColor:'  rgba(255, 225, 56, 0.795)'}} variant="dark" className="btn m-1">GitHub Repo</button>
          </div>
       </div>
       <div className=' col-lg-6 '>
           <img src={busFullScreen} className='img img-fluid' alt="LOADING.." style={{
                boxShadow:'0 0 20px black',
                borderRadius:'10px',
                height:'70vh'
               }} />
              
          </div>
       </div>
       {/* {Row 3} */}
       <div className="row mt-5 " style={{
        height:'60vh'
       }}>
       <div className='row mt-5'  style={{
      height:'50vh'
    }}>
    <div className='col-lg-12'>
      <h1  style={{
            textAlign:'center',
            fontSize:'5rem',
            color:'blue'
          }}>Portfolio 
      <h2 className='text-center' style={{
        color:'black'
      }}
       data-aos="zoom-out">POOJA VARTIA — CREATING CLEAN AND ACCESSIBLE WEBSITES.</h2>
       </h1>
        <div className='row d-flex justify-content-center '>
        <button className='col-lg-1 btn btn-dark m-1'>Project</button>
         <button className='col-lg-2 btn btn-dark m-1'>Case Studies</button>
        <button className='col-lg-1 btn btn-dark m-1'>Git Repo</button>

        </div>  
        </div>
    </div>
          <div className='col-lg-6 '>
            <img src={portfolioWork2} className='img img-fluid w-100' alt="LOADING.." style={{
                boxShadow:'0 0 20px black',
                borderRadius:'10px',
                height:'100%'
               }} />
          </div>
          <div  className=" col-lg-6">
            <h1 style={{color:'rgba(88, 85, 240, 0.712)', fontWeight:'bold'}} className='mt-5'>
            Portfolio
            </h1>
          <p>This dashboard helps designers ensure accessibility compliance.</p>
          <div>
            <button type='button' style={{backgroundColor:'rgba(88, 85, 240, 0.712)',color:'white'}} className="btn  m-1">Check Website</button>
            <button type='button'  style={{backgroundColor:'rgba(88, 85, 240, 0.712)',color:'white'}} className="btn m-1">Case Studies</button>
            <button type='button' style={{backgroundColor:'rgba(88, 85, 240, 0.712)',color:'white'}} className='btn  m-1' >GitHub Repo</button>
          </div>
       </div>
        
      </div>
       </div>
    </div>
    </>
  );
}
