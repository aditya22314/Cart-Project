import React from 'react'
import HeroSection from './HeroSection'
import iphone from '../../assets/iphone-14-pro.webp'
import mac from '../../assets/mac-system-cut.jfif'
import FeaturedProducts from './FeaturedProducts'
const HomePage = () => {
  return (
    <div>
        <HeroSection title="Buy Iphone 14 Now"  subtitle="With the most impressive dual-camera system on iPhone. Capture stunning photos in low light and bright light" link="/" image={iphone}/> 
        <FeaturedProducts />
        <HeroSection title="Build the ultimate setup"  subtitle="You can add Studio Display and colour matched Magic accessories to your bag after configure your Mac mini" link="/" image={mac}/>
        {/* Featured Section*/}
        {/* Hero Section*/}
    </div>
  )
}

export default HomePage
