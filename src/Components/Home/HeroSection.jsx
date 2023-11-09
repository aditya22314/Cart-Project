import React from 'react'
import iphone from '../../assets/iphone-14-pro.webp' 
import './HeroSection.css'
const HeroSection = ({title,subtitle,link,image}) => {
  return (
   <section className="hero_section">
    <div className="align_center">
        <h2 className="hero_title">
           {title}  {/* Buy Iphone 14 Now */}
        </h2> 
        <p className="hero_subtitle">
           {subtitle} {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus laboriosam, quisquam quia iste maxime magni. */}
        </p> 
        <a href={link} className="hero_link">Buy Now</a>
    </div>
    <div className="align_center">
        <img src={image} alt="" className="hero_image" />
    </div>
   </section>
  )
}

export default HeroSection
