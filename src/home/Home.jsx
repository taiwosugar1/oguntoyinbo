import React from 'react'
import "./Home.css"
import { FaAlignLeft } from "react-icons/fa6";
import { FaAt } from "react-icons/fa";
import { BsLinkedin, BsPersonWorkspace, BsTwitter } from "react-icons/bs";
import { RiMessage2Fill } from "react-icons/ri";
import { BiSolidMessageSquareDetail } from "react-icons/bi";
import { IoPersonSharp } from "react-icons/io5";
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";



const Home = () => {
  return (
    <div className='home'>
      <div className="container">
        <div className="one">
           
           
        <div className="box1"  style={{marginBottom:'10px'}}><FaAlignLeft className='icon' />
        </div>
           <div className="box2">
           <IoPersonSharp className='icon'/>
           <h3>ABOUT</h3> 
           <hr />

           <FaAt className='icon'/>
           <h3>CONTACT</h3>
           <hr />
           <BiSolidMessageSquareDetail className='icon' />
           <h3>RESUME</h3>
           <hr />
           <BsPersonWorkspace className='icon'/>
           <h3>WORKS</h3>
           <hr />
           <RiMessage2Fill className='icon'/>
           <h3>BLOG</h3>

           </div>
           

        </div>
        <div className="two">

            <div className="image-container">
                <img src="https://media.licdn.com/dms/image/D4D03AQHKieTe_SeVSw/profile-displayphoto-shrink_800_800/0/1699351850648?e=1723680000&v=beta&t=diiHM_4CEEK-1bbw_SJmAci0TCqAlbhhun8XvtvpQ-k" alt="" />
            </div>

            <div className="profile-details">
                <h1>Oguntoyinbo Taiwo K.</h1>
                <div className="titles">
                 <h2> Javascript FullStack <br />Developer</h2>
                </div>
                <div className="social">
                  <a href="https://linkedin.com/in/oguntoyinbo-taiwo-894466127"><FaInstagramSquare className='icon'/></a>
                  <FaFacebookSquare className='icon'/>
                  <BsTwitter className='icon'/>
                  <BsLinkedin  className='icon'/>
                </div>
                <hr />
                <div className="contact-me">
                    <h3>CONTACT ME</h3>
                </div>
            </div>
        </div>
        <div className="three"></div>
      </div>
    </div>
  )
}

export default Home
