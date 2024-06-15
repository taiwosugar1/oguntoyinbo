import React, { useEffect, useState } from 'react'
import "./Home.css"
import { FaAlignLeft, FaGithub } from "react-icons/fa6";
import { FaAt } from "react-icons/fa";
import { BsLinkedin, BsPersonWorkspace, BsTwitter } from "react-icons/bs";
import { RiMessage2Fill } from "react-icons/ri";
import { BiSolidMessageSquareDetail } from "react-icons/bi";
import { IoPersonSharp } from "react-icons/io5";
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import About from '../details/About';
import { Contact } from '../details/Contact';
import { Resume } from '../details/Resume';
import { Blog } from '../details/Blog';
import { Works } from '../details/Works';
import { MdPerson } from "react-icons/md";
import DetailsDescription from '../details/DetailsDescription';
import { Link } from 'react-router-dom';




const Home = () => {
    const [activeTab, setActiveTab] = useState('about');
    const [titleIndex, setTitleIndex] = useState(0);
    const [isOpen, setIsOpen] = useState(false); // new state variable

    const handleTabChange = (tab) => {
      setActiveTab(tab);
    };

    const handleToggle = () => { // new function
      setIsOpen((prevIsOpen) => !prevIsOpen);
    };
  

    useEffect(() => {
      const intervalId = setInterval(() => {
        setTitleIndex((prevIndex) => (prevIndex + 1) % 3);
        // 3 is the number of titles
      }, 5000);
       // 4000ms = 4 seconds
  
      return () => clearInterval(intervalId);
    }, []);
  return (
    <div className='home'>
      <div className="container">
        <div className="one">
           
           
        <div className="box1"  style={{marginBottom:'10px'}}><FaAlignLeft className='icon special-icon'  onClick={handleToggle}/>
        {isOpen && ( // new conditional rendering
              <div className="details">
                {/* add your details here */}
         
                  <DetailsDescription/>
               
              </div>
            )}
        </div>
           <div className="box2 phone" >
            <div onClick={() => handleTabChange('about')}>
           <IoPersonSharp className='icon'/>
           <h3 >ABOUT</h3> 
           </div>
           <hr />

           <div  onClick={() => handleTabChange('contact')}>
           <FaAt className='icon'/>
           <h3>CONTACT</h3>
           </div>
           <hr />

           <div  onClick={() => handleTabChange('resume')}>
           <BiSolidMessageSquareDetail className='icon' />
           <h3>RESUME</h3>
           </div>
           <hr />
           <div  onClick={() => handleTabChange('works')}>
           <BsPersonWorkspace className='icon'/>
           <h3 >WORKS</h3>
           </div>
           <hr />
           <div onClick={() => handleTabChange('blog')}>
           <RiMessage2Fill className='icon'/>
           <h3 >BLOG</h3>
           </div>

           </div>
           

        </div>
        <div className="two">

            <div className="image-container">
                <img src="https://media.licdn.com/dms/image/D4D03AQHKieTe_SeVSw/profile-displayphoto-shrink_800_800/0/1699351850648?e=1723680000&v=beta&t=diiHM_4CEEK-1bbw_SJmAci0TCqAlbhhun8XvtvpQ-k" alt="" />
            </div>

            <div className="profile-details">
                <h1>Oguntoyinbo Taiwo K.</h1>
                <div className="titles">
             {[
              <h2 key="title1">Javascript FullStack Developer</h2>,
              <h2 key="title2">Project Management</h2>,
              <h2 key="title3">Printing Productions</h2>,
             ][titleIndex]}
              </div>
                <div className="social">
                 <Link to="https://instagram.com/multibrandprints"><FaInstagramSquare className='icon'/></Link>

                 <Link to="https://github.com/taiwosugar1"> <FaFacebookSquare className='icon'/></Link> 

                 <Link to="https://twitter.com/oguntoyintaiwo"><BsTwitter className='icon'/></Link> 

                  <Link to="https://linkedin.com/in/oguntoyinbo-taiwo-894466127"><BsLinkedin  className='icon'/></Link>

                  <Link to="https://github.com/taiwosugar1">< FaGithub className='icon'/></Link>
                </div>

                <hr />

                <div className="contact-me">
                    <h3  onClick={() => handleTabChange('contact')}>CONTACT ME <MdPerson className='icon'/></h3>
                </div>
            </div>
        </div>
        <div className="three">
        {activeTab === 'about' && <About />}
            {activeTab === 'contact' && <Contact />}
            {activeTab === 'resume' && <Resume />}
            {activeTab === 'blog' && <Blog />}
            {activeTab === 'works' && <Works />}
        </div>
      </div>
    </div>
  )
}

export default Home
