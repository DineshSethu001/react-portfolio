import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.jpg'
const Hero = () => {
  return (
    <div className="hero">
        <img src={profile_img} alt="profile_img"/>
        <h1><span>I'm Dinesh Thanigaivel,</span> Frontend developer based in India</h1>
        <p>I am a frontend developer from Tamil Nadu, Vellore</p>
        <div className="hero-action">
            <div className="hero-connect">Connect with me</div>
            <div className="hero-resume">My Resume</div>
        </div>
    </div>
  )
}

export default Hero