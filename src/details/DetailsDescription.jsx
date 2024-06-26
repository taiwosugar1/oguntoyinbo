import React from 'react'
import "./DetailsDescription.css"
import { FaSearch } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'

const DetailsDescription = () => {
  return (
  
    <div className='details-description'>
    
        <div className="description">
          <div className="input">
             <input type="text" /> <FaSearch className='search-icon'/>
          </div>
        
        <div className="post">
        <h3>Recent Posts</h3>
      <NavLink to={"https://modern-networks.co.uk/it-services/the-impact-of-it-support-services-on-customer-satisfaction"} style={{textDecoration:"none"}}><h4>Issues with IT Support and <br /> customer satisfaction</h4></NavLink> 
       
       </div>

       <div className="comment">
       <h3>Recent Comments</h3>
       <h4>No comments to show.</h4>
       </div>

       <div className="archieve">
       <h3>Archives</h3>
       <h4>June 2024</h4>
       </div>
      
      <div className="category">
       <h3>Categories</h3>
       <h4>IT Support</h4>
    </div>

          
        </div>
    </div>
   
  )
}

export default DetailsDescription