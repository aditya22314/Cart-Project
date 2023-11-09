import React from 'react'
import './Navbar.css'
import LinkwithAnchor from '../LinkedComponent/LinkwithAnchor' 
import rocket from '../../assets/rocket.png'
import star from '../../assets/glowing-star.png'
import idButton from '../../assets/id-button.png'
import memo from '../../assets/memo.png'
import order from '../../assets/package.png'
import lock from '../../assets/locked.png'
import '../LinkedComponent/LinkwithAnchor.css'
import { NavLink } from 'react-router-dom'
const Navbar = () => {
  return ( 
        <nav className='first_nav align_center navbar'>
       <div className=' align_center'>  
       <h1 className='navbar_heading' > Cart Love</h1> 
       <form className=' align_center navbar_form' action="">
         
         <input type="text" className='navbar_search' placeholder='Search Products'/> 
         <button type="submit" className='search_submit'>Search</button> 
         </form>
         </div> 
       <div className='navbar_links align_center'>   
        <LinkwithAnchor title="Home" link="/" image={rocket} />
        <LinkwithAnchor title="Products" link="/products" image={star} />
        <LinkwithAnchor title="Login" link="/login" image={idButton} />
        <LinkwithAnchor title="Signup" link="/signup" image={memo} />
        <LinkwithAnchor title="My Orders" link="/order" image={order} />
        <LinkwithAnchor title="Logout" link="/logout" image={lock} />
    <NavLink className='align_center' to="/cart">Cart <p className='cart_p align_center'>1 </p></NavLink>

       </div>
       </nav>
  )
}

export default Navbar
