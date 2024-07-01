import React, { useEffect, useState } from 'react'
import './popular.css'
// import data from '../../Assets/data'
import Item from '../Item/Item'

const Popular = () => {

  const [popularProduct,setPopularProduct]=useState([]);

  useEffect(()=>{

    fetch('http://localhost:4000/popularwomen').then((response)=>response.json()).then((data)=>setPopularProduct(data));
  },[])
  
  return (
    <div className='popular-container'>
        <h1>Popular in women</h1>
           <hr  />
        <div className="popular-item">
{
    popularProduct.map((item,i)=><Item id={item.id} key={i} name={item.name} image={item.image} old_price={item.old_price} new_price={item.new_price}  />)
}

        </div>
       
    </div>
  )
}

export default Popular