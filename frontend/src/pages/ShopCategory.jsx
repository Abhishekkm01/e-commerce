import React, { useContext } from 'react'

import './CSS/ShopCategory.css'

import dropdown_icon from '../Assets/dropdown_icon.png';
import Item from '../components/Item/Item';
import { ShopContext } from '../context/ShopContext';


const ShopCategory = (props) => {
  const {all_product}  =useContext(ShopContext)
  return (
    <div className='shop-category'>
  <img className="shopcategory-banner" src={props.banner} alt="" />
  <div className="shopcategory-indexsort">
<p><span>Showing 1-12 </span> Out of 36 Products</p>

<div className="shopcategory-Sort">
  Sort by <img src={dropdown_icon} alt="" />
</div>

  </div>

  <div className="shopCategory-products">
    {
      all_product.map((item,i)=>{

        if(props.category===item.category){
          return <Item key={i} id={item.id} name={item.name} image={item.image} old_price={item.old_price} new_price={item.new_price}  />
        }
        else{
          return null
        }

      })
    }
  </div>
  <div className="explore-btn">
    Explore more
  </div>
    </div>
  )
}

export default ShopCategory