import React from 'react';
import './offers.css';

import  exclusive_image from '../../Assets/trend3.png'
const Offers = () => {
  return (
    <div className='offers-container'>

<div className="offers-left">
    <h1>Exclusive</h1>
    <h1>Offers for you</h1>
    <p>Only one best Selling Product</p>
    <button>Check Now</button>
</div>

<div className="offers-right">
    <img src={exclusive_image} alt="" />

</div>

    </div>
  )
}

export default Offers