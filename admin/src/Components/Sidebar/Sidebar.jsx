import React from "react";
import './Sidebar.css';

import  add_product_icon from '../../assets/Product_Cart.svg';

import  Product_list_icon from '../../assets/Product_list_icon.svg';

import { Link } from "react-router-dom";

const Sidebar=()=>{
    return(
        <div className="sidebar">
<Link to={'/addproduct'} style={{textDecoration:"none"}}>
<div className="sidebar-item">
    <img src={add_product_icon} alt="" />
    <p>Add Product </p>
</div>
</Link>
<Link to={'/listproduct'} style={{textDecoration:"none"}}>
<div className="sidebar-item">
    <img src={Product_list_icon} alt="" />
    <p>Add Product list </p>
</div>
</Link>
          
        </div>
    )
}

export default Sidebar;