import React from 'react'
import { FaApple, FaFacebook, FaGithub, FaInstagram, FaTwitter } from 'react-icons/fa';
import "./SocialAnimate.css"

const SocialAnimate = () => {
  return (
    <div className='social-animate'>
        <ul>
            <li>
                <a href="#">
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
                    <i className='fab'><FaTwitter/></i>
                </a>
            </li>
            <li>
                <a href="https://github.com/taiwosugar1">
                    <i className='fab'><FaGithub/></i>
                </a>
            </li>
        </ul>
       

        
    </div>
  )
}

export default SocialAnimate