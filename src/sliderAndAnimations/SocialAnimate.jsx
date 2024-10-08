import React from 'react'
import { FaApple, FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import "./SocialAnimate.css"
import { FaX } from 'react-icons/fa6';

const SocialAnimate = () => {
  return (
    <div className='social-animate'>
        <ul>
            <li>
                <a href="https://facebook.com/multibrandprint">
                    <i  className='fab'><FaFacebook/></i>
                </a>
            </li>
            <li>
                <a href="https://instagram.com/multibrandprints">
                    <i className='fab'><FaInstagram/></i>
                </a>
            </li>
            <li>
                <a href="https://twitter.com/oguntoyintaiwo">
                    <i className='fab'><FaX/></i>
                </a>
            </li>
           
            <li>
                <a href="https://linkedin.com/in/oguntoyinbo-taiwo-894466127">
                    <i className='fab'><FaLinkedin/></i>
                </a>
            </li>
        </ul>
       

        
    </div>
  )
}

export default SocialAnimate