import React from 'react'

import './newsletter.css'
const NewsLetter = () => {
  return (
    <div className='newsletter'>
        <h1>Get Exclusive Offers on Your Email</h1>
        <p>Subscribe to our newletter and stay updated</p>

        <div className="newletter-box">
<input type="text" placeholder='your email address' />
<button>Subscribe</button>

        </div>

    </div>
  )
}

export default NewsLetter