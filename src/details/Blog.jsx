import React from 'react'
import './Blog.css'
import LogoAnimation from './LogoAnimation';
import AnimationRotate from './AnimationRotate';
import ResumingToolsPercentage from './ResumingToolsPercentage';
import SocialAnimate from './SocialAnimate';

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

			<div className="blog1"> <AnimationRotate/></div>
			<div className="blog1"><LogoAnimation/></div>
			
		 </div>


		 <div className="blog-box">
		     <div className="blog1"><ResumingToolsPercentage/></div>
		     <div className="blog1"><SocialAnimate/></div>
	     </div>
	</div>
	</div>
  )
};
