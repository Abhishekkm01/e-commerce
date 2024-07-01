import React from 'react'
import './footer.css'
import logo  from '../../Assets/logo.png'
import instagram_icon  from '../../Assets/instagram_icon.png'
import pintester_icon  from '../../Assets/pintester_icon.png'
import whatsapp_icon  from '../../Assets/whatsapp_icon.png'
const Footer = () => {
  return (
    <div className='footer-container'>
<div className="logo">
    <img src={logo} alt="" />
    <h1>Shopper</h1>
</div >
<ul className='footer-links'>

    <li>Company</li>
    <li>Products</li>
    <li>offers</li>
    <li>About</li>
    <li>Contact</li>
</ul>

<div className="socialmedia-container">

<div className="social-icon">
    <img src={instagram_icon} alt="" />
</div>
<div className="social-icon">
    <img src={pintester_icon} alt="" />
</div>
<div className="social-icon">
    <img src={whatsapp_icon} alt="" />
</div>

</div>
<hr/>

<div className="copyright">
    <p>CopyRight@2024-ALL Right reserved</p>
</div>



    </div>
  )
}

export default Footer