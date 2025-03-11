import React, { useEffect, useState } from 'react'
import "./Resume.css"

import { RxDropdownMenu } from 'react-icons/rx';

import { GiOpenBook } from 'react-icons/gi';
import { IoMdCheckmark } from 'react-icons/io';
import { FaFlag } from 'react-icons/fa6';
import { TbTools } from 'react-icons/tb';
import ResumingToolsPercentage from '../sliderAndAnimations/ResumingToolsPercentage';


export const Resume = () => {
  const [titleIndex, setTitleIndex] = useState(0);
  
 

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTitleIndex((prevIndex) => (prevIndex + 1) % 3);
      // 3 is the number of titles
    }, 5000);
     // 4000ms = 4 seconds

    return () => clearInterval(intervalId);
  }, []);
  return (
    <div className='f-c resume'>
      
      <h3 className='head'><span>R</span>esume</h3>
      <hr />

      <div className="resume-experience">
      <div className="f-c experience">
        <h3>EXPERIENCE</h3>
        <span className="date">2019 - Present</span>
        <div className="image">
        <h3>Project Manager /<br /> Business Consultant</h3>
        
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdMP4is1lINAe1lHJhGnPe6t48uIJYdjXTO80GlKtAQ6Q4aQ3tH8qKWf46bA&s" alt="" style={{width:"50px"}} />
        </div>
        <p>Multibrand Digital Services</p>
        
        <h4>Conduct technology analysis, project management, business consulting, General Printing merchandise and IT service and management</h4>
        </div>
        <div className="f-c experience">
        <h3 style={{marginTop:"-50px"}}>EDUCATION</h3>
        <span className="date">2018</span>
        <div className="image">
        <h3>University of Lagos</h3>
        <img src="https://iconape.com/wp-content/files/wf/195254/svg/195254.svg" alt="" style={{width:"50px", marginLeft:"20px"}}/>
        </div>
        <p>Akoka, Lagos, Nigeria</p>
        <h4>Barchelor of Science in Economics & the Future of Data statistics</h4>
      </div>
      
      </div>
      <div className="resume-experience">
      <div className="f-c experience">
       
        <span className="date">2014 - Present</span>
        <div className="image">
        <h3>General Printing /<br />Quality Control</h3>
        <img src="https://static.scientificamerican.com/sciam/cache/file/1DDFE633-2B85-468D-B28D05ADAE7D1AD8_source.jpg?w=1200" alt="" style={{width:"50px", marginLeft:"20px"}}/>
        </div>
        <p>Creative Affiars Limited</p>

        <h4>Ensure All Printing projects are finished on schedule, under budget, and to specifications, and that all stakeholders are informed and happy</h4>
        </div>
        <div className="f-c experience">
        
        <span className="date" style={{marginTop:"60px"}}>2021-2022</span>
        <div className="image">
        <h3>Javascript Fullstack <br />Developement <br />with MernStack</h3>
        <img src="https://media.licdn.com/dms/image/sync/C4E27AQH6sPA5g1UnJQ/articleshare-shrink_800/0/1711585354417?e=2147483647&v=beta&t=OSlvHorigRzq29vVI26QTH9OpNN2WfLGxVYBywqNC08" alt="" />
        </div>
        <p>Yaba, Lagos, Nigeria (Online)</p>
        <h4>Use of Javascript, MongoDB, Expressjs,Reactjs and Nodejs with other Javascript Framework  to build and deploy a scalable and resposive website which would serve as solutions to the real world Problems</h4>
      </div>
      
      </div>
      <div className="f-c skill">
         <h3><span>S</span>kills</h3>
   <hr />
       
         <div className="skill-list">
        <div className="skill-list-one knowledge-base" >
        <h2>< GiOpenBook className='icon'/> KNOWLEDGE BASE </h2>
        <hr style={{width:"100%", height:"0.5px", background:"grey"}}/>
          <h3>Project Management</h3>
          <hr />
          <h3>Web Development</h3>
          <hr />
          <h3>Economics Analysis</h3>
          <hr />
          <h3>IT Service Management</h3>
          <hr />
          <h3> General Printing Services</h3>
          <hr />
        </div>
        <div className="skill-list-one"  style={{height:"650px"}}>
        <h2><RxDropdownMenu className='icon'/> SKILLS </h2>
        <hr style={{width:"100%", height:"0.5px", background:"grey"}}/>
        <div className="mark">
          <div><IoMdCheckmark className='icon-two'/><h3>Business analysis</h3></div>
          <div><IoMdCheckmark  className='icon-two'/><h3>Project Management</h3></div>
          <div><IoMdCheckmark  className='icon-two'/><h3>Javascript, Nodejs & MongoDB</h3></div>
          <div><IoMdCheckmark  className='icon-two'/><h3>Reactjs, HTML, and CSS</h3></div>
          <div><IoMdCheckmark  className='icon-two'/><h3>Process optimization</h3></div>
          <div><IoMdCheckmark  className='icon-two'/><h3>Information Technology Service Management (ITIL)</h3></div>
           </div>
        </div>
           
         </div>
         <div className="skill-list">
        <div className="skill-list-one" >

        <h2><TbTools className='icon'/> TOOLS </h2>
        <hr style={{width:"100%", height:"0.5px", background:"grey"}}/>
        <div className="rounded">
          <ResumingToolsPercentage/>
        </div>
          
        </div>
       
        <div className="skill-list-one" style={{marginTop:"-150px"}}>
        <h2 className='rank-h2'><FaFlag className='icon'/> LANGUAGES </h2>
        <hr style={{width:"100%", height:"0.5px", background:"grey"}}/>
         <h3 className='rank-h3'>English</h3>
         <div className="rank">
          <div className="rank-round"></div>
          <div className="rank-round"></div>
          <div className="rank-round"></div>
          <div className="rank-round"></div>
          <div className="rank-round"></div>
          <div className="rank-round"></div>
          <div className="rank-round"></div>
          <div className="rank-round"></div>
          <div className="rank-round"></div>
          <div className="rank-round"></div>
          </div>

        </div>
           
         </div>
         <div className="skill-list-one" style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
        <h3><span>T</span>estimonies</h3>

       

       {[
          <div key="title1" className="testimony"> 
              <i >" My experience working with Taiwo shows he is a very reliable, time-conscious, and business-minded fellow.
         "</i>
        <img src="image/exeter-image.png" alt="" />
        <h3>Queen Blessing</h3>
        
        <h4>Fullstack Developer</h4>
        </div>,

         <div key="title2" className="testimony">
         <i >" My experience working with Taiwo shows he is a very reliable, time-conscious, and business-minded fellow.
          "</i>
         <img src="image/profPic1.jpg" alt="" />
         <h3> Samuel kolawole</h3>
        <p>partner</p>
        <h4> Fullstack developer</h4>
         </div>,

         <div key="title3" className="testimony">
         <i >" Taiwo has been a great guy to work with. In terms of coordinating and managing teams, I have worked under Taiwo's supervision for a couple of projects now and I must say he is very good at what he does. Keep it up.
          "</i>
 
         <img src="image/exeter-image.png" alt="" />
         <h3>  Tunde Obatayo</h3>
        <p>partner</p>
        <h4>Data Scientist & Implementation Consultant at ACTO</h4>
         </div>,
          <div key="title4" className="f-c testimony">
          <i >" Taiwo is a dedicated worker with exceptional work ethic and a drive to always exceed all client expectations. He continually thrives to improve at his craft and is an essential team player at Bincom ICT.
         Tunde Obatayo
         
           "</i>
  
          <img src="image/exeter-image.png" alt="" />
          <h3>  Tunde Obatayo</h3>
          <h4>Data Scientist & Implementation Consultant at ACTO</h4>
          </div>

             ][titleIndex]}

        </div>
        <hr />
      </div>
    </div>
  )
};


