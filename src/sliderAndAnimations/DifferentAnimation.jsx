import React from 'react'
import AnimationRotate from './AnimationRotate'
import LogoAnimation from '../details/LogoAnimation'
import ResumingToolsPercentage from './ResumingToolsPercentage'
import SocialAnimate from './SocialAnimate'
import { Link } from 'react-router-dom'
import Sliders from '../sliderAndAnimations/Sliders';
import ImageSlider2 from '../sliderAndAnimations/ImageSlider2'
import Feedback from '../details/Feedback'
import Booking from './Booking'
import Table from '../details/Table'
import IsOpenComponent from '../details/IsOpenComponent'

const DifferentAnimation = () => {
  return (
    <div style={{display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center"}}>
        <h1>Different List of Animations</h1>
        <div><Link to={"/"}><button style={{padding:"10px", color:"red"}}>Go back</button></Link></div>
        <br /><hr /><br />
        <AnimationRotate/>
        <br /><hr /><br />
        <LogoAnimation/>
        <br /><hr /><br />
        <ResumingToolsPercentage/>
        <br /><hr /><br />
        <SocialAnimate/>
        <br /><hr /><br />
        <Sliders/>
        <br /><hr /><br />
        {/* <ImageSlider/> */}
        <ImageSlider2/>
        <br /><hr /><br />
        <Feedback/>
        <br /><hr /><br />
        <Booking/>
        <Table/>
        <IsOpenComponent/>
        </div>
  )
}

export default DifferentAnimation