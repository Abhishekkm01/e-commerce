import React, { useEffect, useState } from 'react'
import './NewCollection.css'

// import new_collections from '../../Assets/new_collections'
import Item from '../Item/Item'

const NewCollection = () => {

  const [new_collections,setnewcollection]=useState([]);

  useEffect(()=>{

    fetch('http://localhost:4000/newcollection').then((response)=>response.json()).then((data)=>setnewcollection(data));
  },[])

  return (
    <div className='collection-container'>
        <h1>New Collections</h1>
        <hr/>
        <div className="collections">
        {
    new_collections.map((item,i)=><Item id={item.id} key={i} name={item.name} image={item.image} old_price={item.old_price} new_price={item.new_price}  />)
    }
        </div>


    </div>
  )
}

export default NewCollection