import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom';
import {register} from '../actions/userActions';
import {useDispatch, useSelector} from 'react-redux';
import MessageBox from '../components/MessageBox';
import LoadingBox from '../components/LoadingBox';

export default function RegisterScreen(props) {

 const[name,setName] = useState(' ');
 const[email,setEmail] = useState(' ');
 const[password,setPassword] = useState('');
 const[confirmPassword,setConfirmPassword] = useState('');


 const redirect = props.location.search?props.location.search.split('=')[1]:'/';
 const userRegister = useSelector((state)=>state.userRegister);
  const {userInfo,loading,error} = userRegister;
 const dispatch = useDispatch();
 const submitHandler = (e)=>{
  e.preventDefault();
  if(password!==confirmPassword){
   alert("Password and confirm Password are not match");
  }else{
  //Todo for signin action
  dispatch(register(name,email,password));
 }
}
 useEffect(()=>{
  if(userInfo){
   props.history.push(redirect);
  }
 },[props.history,redirect,userInfo])
 return (
  <>
  <div className="row">
   <Link to="/signin"><button className="success">Company</button></Link>
   <Link to ="/associates"><button className="danger"> Associate</button></Link>
  </div>
  <div>
   <form action="" className="form" onSubmit={submitHandler}>
    <div>
     <h1>Create Account</h1>
    </div>
    {loading && <LoadingBox></LoadingBox>}
    {error && <MessageBox variant="danger">{error}</MessageBox>}
    <div>
     <label htmlFor="name">Name</label>
     <input type="text" id="name" placeholder="Enter name" required onChange={e=>setName(e.target.value)}/>
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
     <label htmlFor="confirmPassword">Confirm Password</label>
     <input type="password" id="confirmPassword" placeholder="Enter confirm Password" required onChange={e=>setConfirmPassword(e.target.value)}/>
    </div>
    <div>
    <label htmlFor=""></label>
    <button className="primary" type="submit">Register</button>
    </div>
    <div>
     <label htmlFor=""></label>
     <div>
      Already have an account ? {' '}
      <Link to={`/signin?redirect=${redirect}`} >Sign In</Link>
     </div>
    </div>
   </form>
  </div>
  </>
  
 )
}
