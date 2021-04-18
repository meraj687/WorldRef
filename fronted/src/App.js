import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom'
import CartScreen from './screens/CartScreen';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';

function App(){
  return(
    <BrowserRouter>
     <div className="grid-container">
      <header className="row">
        <div>
          <a className="brand" href="index.html"><img src="https://worldref.co/wp-content/uploads/2021/01/WorldRef-White.svg" alt="" srcset="" width="50%"/></a>
        </div>
        <div>
          <a href="/cart">Cart</a>
          <a href="/signin">Sign In</a>
        </div>
      </header>
      <main>
        <Route path="/cart/:id?" component={CartScreen} />
       <Route path="/product/:id" component={ProductScreen} />
      <Route path="/" component={HomeScreen} exact/>
      </main>
      <footer className="row center">All right reserved</footer>
    </div>
    </BrowserRouter>
  )
}


export default App;