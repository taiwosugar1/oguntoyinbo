import React from 'react'
import "./Contact.css"
import { FaArrowRightLong } from "react-icons/fa6";

export const Contact = () => {
  return (
    <div>
    <div className='contact'>
         <h3><span>G</span>et in Touch</h3>

         <hr />

         <img src="image/map.png" alt="" />

       
         <a href="https://maps.app.goo.gl/bVB84GPu43wmaNjW7" >View larger map</a>
         
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
           <h5>Your Name</h5>
           <input type="text" />

          <h5>Your Email</h5>
           <input type="text" />

           <h5>Subject</h5>
           <input type="text" />

           <h5>Your message (optional)</h5>
           <input type="text" style={{height:"90px"}} />

           <button><h4>SEND MESSAGE <FaArrowRightLong /></h4></button>

           <input type="text" placeholder='We Remain the Best in All that We do'/>

         </div>
      </div> 
    </div>
  )
}
