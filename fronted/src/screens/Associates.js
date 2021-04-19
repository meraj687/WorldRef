import React, { useState } from 'react'
import {Link} from 'react-router-dom';

export default function Associates() {

 const[email,setEmail] = useState(' ');
 const[password,setPassword] = useState('');
 const submitHandler = (e)=>{
  e.preventDefault();
  //Todo for signin action
 }
 return (
  <>
  <div className="row">
   <Link to="/signin"><button className="success">Company</button></Link>
   <Link to ="/associates"> <button className="danger">Associate</button></Link>
  </div>
  <div>
   <form action="" className="form" onSubmit={submitHandler}>
    <div>
     <h1>Sign In For Associates </h1>
    </div>
    <div>
     <label htmlFor="email">Email address</label>
     <input type="email" id="email" placeholder="Enter email" required onChange={e=>setEmail(e.target.value)}/>
    </div>
    <div>
     <label htmlFor="password">Password</label>
     <input type="password" id="password" placeholder="Enter password" required onChange={e=>setPassword(e.target.value)}/>
    </div>
    <div>
    <label htmlFor=""></label>
    <button className="primary" type="submit">Sign In</button>
    </div>
    <div>
     <label htmlFor=""></label>
     <div>
      New customer ? {' '}
      <Link to="/register" >Create your account</Link>
     </div>
    </div>
   </form>
  </div>
  </>
 )
}
