import React from 'react'
import './RelatedProduct.css'
import data_product from '../../Assets/data'
import Item from '../Item/Item'
const RelatedProduct = () => {
  return (
    <div className='relatedProduct-container'>
<h1>Related Products</h1>
<hr />
<div className="related-products">
    {
        data_product.map((item,i)=><Item id={item.id} key={i} name={item.name} image={item.image} old_price={item.old_price} new_price={item.new_price} />)
    }

    
</div>


    </div>
  )
}

export default RelatedProduct