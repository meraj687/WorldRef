import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom';
import {signin} from '../actions/userActions';
import {useDispatch, useSelector} from 'react-redux';
import MessageBox from '../components/MessageBox';
import LoadingBox from '../components/LoadingBox';

export default function SigninScreen(props) {

 const[email,setEmail] = useState(' ');
 const[password,setPassword] = useState('');

 const redirect = props.location.search?props.location.search.split('=')[1]:'/';
 const userSignin = useSelector((state)=>state.userSignin);
  const {userInfo,loading,error} = userSignin;
 const dispatch = useDispatch();
 const submitHandler = (e)=>{
  e.preventDefault();
  //Todo for signin action
  dispatch(signin(email,password));
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
     <h1>Sign In For Company </h1>
    </div>
    {loading && <LoadingBox></LoadingBox>}
    {error && <MessageBox variant="danger">{error}</MessageBox>}
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
