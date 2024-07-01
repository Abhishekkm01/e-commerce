import React from 'react'
import './banner.css'
import hand_icon from '../../Assets/hand_icon.png'
import arrow_icon from '../../Assets/arrow.png'
import hero_image from '../../Assets/heroImage.png'
//  import hero_image from '../../Assets/hero_image.png'


const Banner = () => {
  return (
    <div className='ban-container'>
<div className="ban-info-left">

    <h4>New Arrivals Only</h4>
    <div className="hand_icon">
        <p>new</p>
        <img src={hand_icon} alt="" />
    </div>
    <p>collections </p>
    <p>for Everyone</p>
    <div className='latest-btn'>
        <div>latest Collection</div>
        <img src={arrow_icon} alt="" />
    </div>


</div>

<div className='ban-info-right'>

    <img src={hero_image} alt="" height="500px" />


</div>


    </div>
  )
}

export default Banner