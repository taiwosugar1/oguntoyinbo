import React, { useEffect, useState } from 'react';
import "./Home.css";
import { FaAt } from "react-icons/fa";
import { RiMessage2Fill } from "react-icons/ri";
import { BiSolidMessageSquareDetail } from "react-icons/bi";
import { IoPersonSharp } from "react-icons/io5";
import { BsPersonWorkspace } from "react-icons/bs";
import { FaAlignLeft } from "react-icons/fa6"; // Open/close icon
import About from '../details/About';
import { Contact } from '../details/Contact';
import { Resume } from '../details/Resume';
import { Blog } from '../details/Blog';
import { Works } from '../details/Works';
import { MdPerson } from "react-icons/md";
import SocialAnimate from '../sliderAndAnimations/SocialAnimate';

const Home = () => {
  const [activeTab, setActiveTab] = useState('about');
  const [titleIndex, setTitleIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false); // For the sidebar

  // Handle tab switch logic
  const handleTabChange = (tab) => {
    setActiveTab(tab);
    
    // Scroll to the relevant section
    const section = document.getElementById(tab);
    if (section) {
      const topOffset = section.getBoundingClientRect().top + window.pageYOffset - 100; // Adjusted offset
      window.scrollTo({
        top: topOffset,
        behavior: 'smooth'
      });
    }

    // Close the sidebar after clicking an item
    setIsOpen(false);
  };

  // Toggle sidebar open/close
  const handleToggle = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  // Rotate between titles for the profile section
  useEffect(() => {
    const intervalId = setInterval(() => {
      setTitleIndex((prevIndex) => (prevIndex + 1) % 3);
    }, 5000);
  
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className='home'>
      <div className="container">
        {/* Sidebar and Toggle Icon */}
        <div className={`sidebar ${isOpen ? 'open' : ''}`}>
          <div className={`toggle-icon ${isOpen ? 'x' : ''}`} onClick={handleToggle}>
            {isOpen ? '✖' : <FaAlignLeft />} 
          </div>

          {isOpen && (
            <div className="box2">
              <div onClick={() => handleTabChange('about')}>
                <IoPersonSharp className='icon' />
                <h3>ABOUT</h3>
              </div>
              <hr />
              <div onClick={() => handleTabChange('contact')}>
                <FaAt className='icon' />
                <h3>CONTACT</h3>
              </div>
              <hr />
              <div onClick={() => handleTabChange('resume')}>
                <BiSolidMessageSquareDetail className='icon' />
                <h3>RESUME</h3>
              </div>
              <hr />
              <div onClick={() => handleTabChange('works')}>
                <BsPersonWorkspace className='icon' />
                <h3>WORKS</h3>
              </div>
              <hr />
              <div onClick={() => handleTabChange('blog')}>
                <RiMessage2Fill className='icon' />
                <h3>BLOG</h3>
              </div>
            </div>
          )}
        </div>

        {/* Profile Section */}
        <div className="two">
          <div className="image-container">
            <img src="/image/profile.jpeg" alt="Profile" />
          </div>

          <div className="profile-details">
            <h1>Oguntoyinbo Taiwo K.</h1>
            <div className="titles">
              {[<h2 key="title1">Javascript FullStack Developer</h2>,
                <h2 key="title2">Project Management</h2>,
                <h2 key="title3">Printing Productions</h2>][titleIndex]}
            </div>
            <div className="social">
              <SocialAnimate />
            </div>

            <br />

            <div className="contact-me">
              <h3 onClick={() => handleTabChange('contact')}>CONTACT ME <MdPerson className='icon' /></h3>
            </div>
          </div>
        </div>

        {/* Tab Content Section */}
        <div className="three">
          <div className="three-container">
            <div id="about">{activeTab === 'about' && <About />}</div>
            <div id="contact">{activeTab === 'contact' && <Contact />}</div>
            <div id="resume">{activeTab === 'resume' && <Resume />}</div>
            <div id="works">{activeTab === 'works' && <Works />}</div>
            <div id="blog">{activeTab === 'blog' && <Blog />}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
