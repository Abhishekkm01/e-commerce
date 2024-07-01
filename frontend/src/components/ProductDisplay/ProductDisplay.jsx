import React, { useContext } from 'react'

import './ProductDisplay.css'

import star_icon from '../../Assets/star_icon.png'
import star_dull from '../../Assets/star_dull_icon.png'
import { ShopContext } from '../../context/ShopContext'

const ProductDisplay = (props) => {
    const {product}=props;

    const {addToCart}=useContext(ShopContext)
    
  return (
    <div className='display-container'>
     <div className="product-display-right">
        <div className="product-image-small">
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
        </div>

        <div className="product-main-image">
        <img src={product.image} alt="" />

        </div>
     
     </div>
     <div className="product-display-left">
        <h1 className='product-display-name'>{product.name}</h1>

        <div className="stars">
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_dull} alt="" />
            <p>(22)</p>
        </div>

        <div className="prices">
        <p className='oldprice'>${product.old_price}</p>
        <p className='newprice'>${product.new_price}</p>
     </div>

     <div className="info">
        <p className='info'>Enhanced with the smart 6x SmartTech°, our Workday Shirt is 6 times smarter than your regular one!</p>
     </div>
     <div className="select-sizes">
        <h1>Select Size</h1>
        <div className="product-display-select">
            <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>X</div>
            <div>XXL</div> 
        </div>
     </div>

     <button onClick={()=>{
      addToCart(product.id)
     }}>Add TO cart</button>
       <div className="cat-tags">
        <p>Category :<span>Women  T-shirts,</span></p>
        <p>Tags :<span>Modern-latest</span></p>
       </div>

     </div>
    </div>
  )
}

export default ProductDisplay