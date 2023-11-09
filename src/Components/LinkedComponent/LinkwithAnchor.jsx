import React from 'react'
import { NavLink } from 'react-router-dom'

const LinkwithAnchor = ({title,link,image,sidebar}) => {
  return (
     <div className={sidebar ? 'align_center sidebar_link':'align_center jy'}>
     <NavLink to={link}>{title} 
       </NavLink>  
       <img className='sidebar_icon' src={image} alt="" />
       </div>
    
  )
}

export default LinkwithAnchor
