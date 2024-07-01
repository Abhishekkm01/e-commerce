import React, { useContext, useRef, useState } from 'react';
import logo  from '../../Assets/logo.png'
import cart from '../../Assets/cart_icon.png'
import './navbar.css';
import { Link } from 'react-router-dom';
import { ShopContext } from '../../context/ShopContext';
import dropdown_icon from '../../Assets/dropdown_icon.png'

const Navbar = () => {
    const [menu,setMenu]=useState("");

    const {getTotalCartItems}=useContext(ShopContext);

    const menuRef=useRef();

    const dropdown_toggle=(e)=>{
    menuRef.current.classList.toggle('nav-menu-visible');
    e.target.classList.toggle('open');
                    }


               

  return (
    <div className='nav-container'>

<div className='logo'>
<img src={logo} alt="" />
<p>Shopper</p>
</div>
<img  className="nav-dropdown" onClick={dropdown_toggle} src={dropdown_icon} alt=""  />
<ul ref={menuRef} className="nav-list">
<li onClick={()=>setMenu("Shop")}><Link style={{textDecoration:"none"}} to='/'>Shop</Link>{menu==="Shop"?<hr/>:<></>} </li>
<li onClick={()=>setMenu("men")}><Link  style={{textDecoration:"none"}} to='/men'>Men</Link>{menu==='men'?<hr/>:<></>}</li> 
<li onClick={()=>setMenu("women")}><Link  style={{textDecoration:"none"}} to='/women'>Women</Link>{menu==="women"?<hr/>:<></>}</li>
<li onClick={()=>setMenu("kids")}><Link   style={{textDecoration:"none"}} to="/Kids">Kids</Link>{menu==="kids"?<hr/>:<></>}</li>
</ul>
<div className="nav-login-cart">
  {localStorage.getItem("auth-token")?<button onClick={()=>{
    localStorage.removeItem("auth-token");
    window.location.replace('/')
  }}>Logout</button>:<Link to="/login"> <button>Login</button></Link>}
   
   <Link to="/cart"><img src={cart} alt="" /></Link>
    <div className="nav-cart-count">{getTotalCartItems()}</div>
</div>

    </div>
  )
}

export default Navbar