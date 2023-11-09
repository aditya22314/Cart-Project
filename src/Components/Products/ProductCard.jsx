import React from 'react'
import iphone from '../../assets/iphone.jpg' 
import star from '../../assets/white-star.png' 
import basket from '../../assets/basket.png' 
import './ProductCard.css' 
import { NavLink } from 'react-router-dom'
const ProductCard = ({ id, image, price, title, rating, ratingCounts, stock }) => {
  return (
    
       <article className="product_card"> 
       <div className="product_image">
        <NavLink to={`/products/${id}`}><img className='product_img'src={`http://localhost:5000/products/${image}`} alt="" /></NavLink>
       </div> 

       <div className="product_details">
        <h3 className="product_price">${price}</h3>
        <p className="product_title">{title}</p>
       </div> 

    <footer className="align_center product_info">
        <div className="align_center">
            <p className="align_center product_rating">
                <img src={star} alt="star" /> {rating}
            </p> 
            <p className="product_review_count"> {ratingCounts} </p>
        </div> 
       { stock>0 && <button className="add_to_cart">
            <img className='basket_boy' src={basket} alt="" />
        </button>}
    </footer>
       </article>
   
  )
}

export default ProductCard
