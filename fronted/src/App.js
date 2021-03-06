import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {BrowserRouter, Link, Route} from 'react-router-dom'
import CartScreen from './screens/CartScreen';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import SigninScreen from './screens/SigninScreen';
// import Signout from './screens/Signout';
import Associates from './screens/Associates';
import { signout } from './actions/userActions';
import RegisterScreen from './screens/RegisterScreen';

function App(){
  const cart = useSelector(state=>state.cart);
  const {cartItems} = cart;
  const userSignin = useSelector((state)=>state.userSignin);
  const {userInfo} = userSignin;
  const dispatch = useDispatch();
  const signoutHandler = ()=>{
    dispatch(signout());
  }
  return(
    <BrowserRouter>
     <div className="grid-container">
      <header className="row">
        <div>
          <Link className="brand" to="/"><img src="https://worldref.co/wp-content/uploads/2021/01/WorldRef-White.svg" alt="" srcset="" width="50%"/></Link>
        </div>
        <div>
          <Link to="/cart">Cart
          {cartItems.length>0 && (
            <span className="badge">{cartItems.length}</span>
          )}
          </Link>
          {
            userInfo ? (
              <div className="dropdown">
              <Link to="#">{userInfo.name}<i className="fa fa-caret-down"></i></Link>
              <ul className="dropdown-content">
                <Link to="#signout"onClick={signoutHandler}>Sign Out</Link>
              </ul>
              </div>
            ):
            (

              <Link to="/signin">Sign In</Link>
            )
          }
          {/* <Link to="/signout">Sign Out</Link> */}

        </div>
      </header>
      <main>
        <Route path="/cart/:id?" component={CartScreen} />
       <Route path="/product/:id" component={ProductScreen} />
       <Route path="/signin" component={SigninScreen} />
       <Route path="/register" component={RegisterScreen} />

      <Route path="/" component={HomeScreen} exact/>
      <Route path="/associates" component={Associates} exact/>

      </main>
      <footer className="row center">All right reserved</footer>
    </div>
    </BrowserRouter>
  )
}


export default App;