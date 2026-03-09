import React from 'react'
import {Link} from 'react-router-dom';
export default function Mywork() {
  return (
    <>
    <div>
    <h1>This is mmy work ...</h1>
    
    {/* http://127.0.0.1:5500/BusLinkAmloh_repo/AmlohHome.html */}
    <h4>BusLink Mobile Application</h4>
     <Link to =
    "http://127.0.0.1:5500/BusLinkAmloh_repo/AmlohHome.html">
      Figma UX design...
    </Link>
    <h4>JunngleJoy Mobile Application</h4>
    <h4>Textutile web Application </h4>
    <Link to =
    "https://www.figma.com/proto/YfKmqD2pqJq3wsANZdtfLY/Schedule-Management-website?node-id=146-50&t=dU1fUbeSI3PtcKdL-0&scaling=scale-down-width&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=146%3A50">
      Figma UX design...
    </Link>
    </div>
    </>
  )
}
