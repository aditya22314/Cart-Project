import React from 'react'
import './Quantityinp.css'
const QuantityInp = () => {
  return (
    <>
      
      <button className="quantity_input_button" disabled> - </button> 
            <p className="quantity_input_count">1</p>
            <button className="quantity_input_button" > +</button> 
    </>
  )
}

export default QuantityInp
