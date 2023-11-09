import React from 'react'
 import './FeaturedProducts.css'
import ProductCard from '../Products/ProductCard' 
import  iphone from '../../assets/iphone.jpg'
const FeaturedProducts = () => {
  return (
    <> 
      <section className="featured_products">
        <h2 className="feature_title">Featured Products</h2>
        <div className="product align_center">
           <ProductCard image={iphone} id={1} title={"Iphone 14"} price={499} rating={4.5} ratingCounts={15} stock={2}/>
           <ProductCard image={iphone} id={1} title={"Iphone 14"} price={499} rating={4.5} ratingCounts={15} stock={2} />
           <ProductCard image={iphone} id={1} title={"Iphone 14"} price={499} rating={4.5} ratingCounts={15} stock={2} />
        </div>
      </section>
    </>
  )
}

export default FeaturedProducts
