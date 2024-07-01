import React, { useState } from 'react'

import './CSS/loginsignup.css';
const Loginsignup = () => {

  const [state,setState]=useState("Login");

  const [formData,setFormData]=useState({
    name:"",
    email:"",
    password:"",

  })



  const handler=(e)=>{
    setFormData({...formData,[e.target.name]:e.target.value});

  }


  const signUp=async ()=>{

console.log("sign up function called",formData);

let responseData;
await fetch('http://localhost:4000/signup',{
  method:'POST',
  headers:{
    accept:'application/json',
    'content-type':'application/json'
  },
  body:JSON.stringify(formData),
}).then((respose)=>respose.json()).then((data)=>responseData=data);

console.log(responseData.success);;
if(responseData.success){
  console.log('routing')
localStorage.setItem('auth-token',responseData.token);
window.location.replace("/");
}
else{
  alert(responseData.errors)
}

  }

  const Login =async()=>{

  console.log("login function called",formData);
  let responseData;
    await fetch('http://localhost:4000/login',{
    method:'POST',
    headers:{
      accept:'application/json',
      'content-type':'application/json'
    },
    body:JSON.stringify(formData),
  }).then((respose)=>respose.json()).then((data)=>responseData=data);
  
  console.log(responseData);
  console.log(responseData.success);;
  if(responseData.success){
    console.log('routing')
  localStorage.setItem('auth-token',responseData.token);
  window.location.replace("/");
  }
  else{
    alert(responseData.errors)
  }
  

  }

  return (
    <div className='loginsignup'>
     
     <div className="loginsignupcontainer">
 <h1>{state}</h1>

 <div className="signuplogin-fields">
  
  {state==='signup'?<input type="text" name='name' value={formData.name}  placeholder='your name' onChange={handler}/>:<></>}
  <input name='email'    type="email" value={formData.email} placeholder='email address' onChange={handler} />
  <input name='password' type="password" value={formData.password} placeholder='password' onChange={handler} />
 </div>

 <button onClick={()=>state==='Login'?Login():signUp()}>Continue</button>
 
 {
  state==='Login'?<p>create an account <span style={{cursor:"pointer"}} onClick={()=>{setState("signup")
  }}>click here</span></p>:<p>already have an account <span style={{cursor:'pointer'}} onClick={()=>setState("Login")}>login here </span></p>
 }
 
 

 <p></p>
 <div className="agree">
  <input type="checkbox" name='' id='' />
  <p>By continuing ,i agree to the terms of use and privacy policy</p>
 </div>

     </div>



    </div>
  )
}

export default Loginsignup