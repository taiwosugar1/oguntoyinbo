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
         <br />

         <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15855.619789088147!2d3.3586393476993415!3d6.53368784534376!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8d8c600a2cb7%3A0xdaaab60f3c2c9173!2sMultibrand%20Digital%20Services!5e0!3m2!1sen!2sng!4v1728391450231!5m2!1sen!2sng" width="600" height="450" style={{border:"1px solid teal", borderRadius:"10px"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"/>
         
         <div className="address-one">
             <h5><strong>Address:</strong> Shomolu, Lagos.</h5>
             <h5><strong>Email:</strong> multibranddigital@gmail.com</h5> 
             <h5><strong>Tel:</strong> +234 802 9299 901</h5> 
             <h5><strong>Developer:</strong> Available</h5>
         </div>

         {/* -----------contact form------------- */}

        <div className="contact-form">
           <br />
         <Feedback/>
         </div>
      </div> 
    </div>
  )
}
