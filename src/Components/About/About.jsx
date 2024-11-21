import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/profile_img.jpg'
const About = () => {
  return (
    <div id="about" className='about'>
      <div className="about-title">
        <h1>About me</h1>
        <img src={theme_pattern} alt="theme_pattern"/>
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img src={profile_img} alt=""/>
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>Experienced Frontend Developer
            Over 1 year of expertise in building user interfaces.</p>
            <p>My passion for frontend development is not only reflected in my extentive experience but also in the enthusianm and dedication I bring to each project</p>
          </div>
          <div className="about-skills">
                <div className="about-skill"><p>HTML & CSS</p><hr style={{ width: "80%" }} /></div>
                <div className="about-skill"><p>JavaScript</p><hr style={{ width: "70%" }} /></div>
                <div className="about-skill"><p>React JS</p><hr style={{ width: "60%" }} /></div>
                <div className="about-skill"><p>Next JS</p><hr style={{ width: "30%" }} /></div>
          </div>  
        </div>
        </div>
        <div className="about-achievements">
          <div className="about-achievement">
            <h1>1+</h1>
            <p>Years of experience</p>
          </div>
          <hr/>

          <div className="about-achievement">
            <h1>100+</h1>
            <p>Target to complete projects</p>
          </div>
        
         
        </div>
      </div>
   
  )
}

export default About