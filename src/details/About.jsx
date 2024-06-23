import React from 'react'
import "./About.css"
import { HiOutlineDesktopComputer } from "react-icons/hi";
import { TfiWorld } from "react-icons/tfi";
import { FaBook } from 'react-icons/fa6';
import { FiPrinter } from 'react-icons/fi';
import { FaChalkboardTeacher } from "react-icons/fa";


const About = () => {
  return (
    <div className='about'>

    <div>
      <div  className='about-body'>
      <h3><span>A</span>BOUT ME</h3>

      <hr />
      <p className='about-paragraph'>I have experience in every stage of the product and project management life cycle and consider myself to be a committed, effective, and passionate professional.

Due to my strong interpersonal abilities, I am able to get the cooperation of senior management, clients, and members of other departments.

I am a diligent organizer who actively pursues quality standards and continual development. I constantly create and uphold a good environment that inspires others and fosters a sense of teamwork.

I have a strong mix of business and technical abilities, and in all of the IT Products and Projects I have managed and am now managing, my technical background and love for data has inspired my drive to understand new trends in IT such as data analytics/ data science, which is a plus to career projection.</p>
</div>
<div className="about-body-two">
<h3><span>M</span>Y SERVICES</h3>
<div className="my-services">
  <div className="service">
  <TfiWorld className='web'/>
  <h2>Web Development</h2>
       <p className='p'>Every customer wants a seamless digital experience with personalized service. Digital presence is handy for customer satisfaction</p>
  </div>
  <div className="service">
  <HiOutlineDesktopComputer className='web'/>
  <h2>IT Service <br />Management</h2>
    <p className='p'>
    A functional IT department is always a necessary condition for every firm's success and the foundation for business repositioning.</p>
  </div>

  <div className="service">
    <FiPrinter className='web'/>
    <h2>IT Consulting</h2>
    <p>
       Guiding the organization on everything from overall General Printing strategies such as type of technology and Quality control of all Productions etc.</p>
  </div>
  <div className="service">
  <FaBook className='web'/>
  <h2>General Printing</h2>
    <p>
       Guiding the organization on everything from overall General Printing strategies such as type of technology and Quality control of all Productions etc.</p>
  </div>
  <div className="service">
  <FaBook className='web'/>
  <h2>Economic Analysis</h2>
    <p>
    I organise, and assess data sets in order to answer a question, provide insights or make it useful for decision making in a range of businesses and organisations.</p>
  </div>

  <div className="service">
  <FaChalkboardTeacher className='web'/>
  <h2>Coaching & Training</h2>
    <p>
    People see things differently, they understand things differently and they behave in a different manner when placed under the same circumstance</p>
  </div>
</div>
</div>
<div className="client">
         <h3><span>C</span>LIENTS</h3>
   <hr />
         <div className="client-list">
           <img src="image/exeter-image.png" alt="" />
           <img src="image/unilag-image.png" alt="" />
           <img src="image/metaphor-lab-image.png" alt="" />
           <img src="image/enspace-image.png" alt="" />
           <img src="image/gomycode-image.png" alt="" />
           <img src="image/ai-africa-image.png" alt="" />
        </div>
      </div>

    </div>
    </div>
  )
}

export default About
