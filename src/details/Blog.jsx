import React from 'react'
import './Blog.css'
import { Link } from 'react-router-dom';

export const Blog = () => {
  return (

	<div className="blog">
       <h3><span style={{color:'royalblue'}}>B</span>log</h3>
       <hr />
    <div className='button'>
        <button className="animated-button">
			<div className="hidden-layer">
				<div className="line"></div>
				<div className="arrow"></div>
			</div>
			<div className="layer"></div>
			<span className="text">Learn More</span>
		</button>
    </div>

	<div className="blog-container">
         <div className="blog-box">

			<div className="blog1"></div>
			<div className="blog1"></div>
			
		 </div>


		 <div className="blog-box">
		     <div className="blog1"></div>
		     <div className="blog1"></div>
	     </div>

	</div>
	<Link to={"/different-animation"}><button style={{marginLeft:"235px", marginBottom:"20px"}}> Animations</button></Link>
	</div>
  )
};
