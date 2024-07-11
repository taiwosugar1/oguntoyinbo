import React from 'react'
import "./Contact.css"
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import Feedback from './Feedback';

export const Contact = () => {
  return (
    <div>
    <div className='contact'>
         <h3><span>G</span>et in Touch</h3>

         <hr />

         <img src="image/map.png" alt="" />

       
         <Link to="https://maps.app.goo.gl/bVB84GPu43wmaNjW7" ><button>View larger map</button></Link> 
         
         <div className="address-one">
             <h5>Address:</h5> <p>Shomolu, Lagos.</p>
             <h5>Email:</h5> <p>multibranddigital@gmail.com</p>
         </div>
         <div className="address-two  ">
             <h5>Phone:</h5> <p>    +234 802 9299 901</p> 
             <h5>Developer:</h5> <p>Available</p>
         </div>

         {/* -----------contact form------------- */}

        <div className="contact-form">
           <h3><span>C</span>ontact Form</h3>
           <hr />
         <Feedback/>

         </div>
      </div> 
    </div>
  )
}
