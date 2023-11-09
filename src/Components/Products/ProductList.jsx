import React, { useEffect } from 'react'
import './ProductList.css'
import ProductCard from './ProductCard'
import useData from '../Hooks/useData'
// import Skeleton from 'react-loading-skeleton'
import ProductCardSkelton from './ProductCardSkelton' 
import { useSearchParams } from 'react-router-dom'
import Pagination from '../Common/Pagination'
const ProductList = () => {   

  const [search,setSearch] = useSearchParams() 
    const category=search.get('category') 
    const page =search.get('page') 
    
  const {data,err,loading}=useData('/products',
  {
    params:
    { 
      category, 
      page, 
      perPage:10,
    }
  }
  ,[category,page]) 
  console.log(data,"HI")
  const skeletons =[1,2,3,4,5,6,7,8]  
  const handlePageChange = () => {
    // Parse the current page as an integer with a default value of 1
    const currentPage = parseInt(page, 10) || 1; // Change this line
  
    // Update the URL with the new page value
    setSearch({ ...Object.fromEntries([...search]), page: currentPage + 1 });
  };
  useEffect(()=>{ 
    const handleScroll = () =>{
      const {scrollTop,clientHeight,scrollHeight} = document.documentElement; 
      if(scrollTop+clientHeight >= scrollHeight-1){
        console.log("REACHED BOTTOM"); 
        handlePageChange(); 
        console.log(page,"Boom"); 
        console.log(isNaN(page))
      }
    }
    window.addEventListener("scroll",handleScroll)
  },[])
  return (
    <section className="products_list_section">
        <header className="align_center products_list_header">
            <h2>Products</h2> 
            <select name="sort" id="" className='product_sorting'>
                <option value="">Relevance</option>
                <option value="price desc">Price HIGH TO LOW</option>
                <option value="price asc">Price LOW To HIGH</option>
                <option value="rate desc">Rate HIGH TO LOW</option>
                <option value="rate asc">Rate LOW To HIGH</option>
            </select>
        </header>
        <div className="products_list">
          {err && <em className='form_error'> {err} </em>} 
           {loading ? skeletons.map(n => <ProductCardSkelton key={n} />):
            data?.products && data.products.map(product =>  <ProductCard key={product._id} id={product._id} image=
{product.images [0]} price={product.price} title={product.
title} rating={product.reviews.rate} ratingCounts={product.reviews.counts} stock={product.stock} />)}  
    
          
        </div> 
        {/* {data && <Pagination totalPosts={data.totalProducts} currentPage={page} postsPerPage={8} onClick={handlePageChange} />}  */}
        
    </section>
  )
} 


export default ProductList
