import React, {  } from 'react'
import './ProductsSidebar.css' 
import LinkwithAnchor from '../LinkedComponent/LinkwithAnchor'
import useData from '../Hooks/useData' 


const ProductsSidebar = () => { 
  const {data:cat,err} =useData('/category')
  return (
    <aside className="products_sidebar">
    <h2>Category</h2>
    <div className="category_links">   
    {err && <em className='form_error'>{err}</em>}
    {cat && cat.map(category => {
  return (
    <LinkwithAnchor
      key={category._id}
      title={category.name}
      link={`/products?category=${category.name}`}
      image={`http://localhost:5000/category/${category.image}`}
      sidebar={true}
    />
  );
})}

     </div>
 </aside> 
  )
}

export default ProductsSidebar
