import React from 'react'
import Rating from '../components/Rating'
import {Link} from 'react-router-dom';
export default function Product(props) {
 const {product} =props;
 return (
      <div class="card" key={product._id}>
              <Link to={`/product/${product._id}`}>
               
                <img class="medium" src={product.image} alt={product.name} />
              </Link>
              <div class="card-body">
              <Link to={`/product/${product._id}`}>

                  <h2>{product.name}</h2>
                </Link>
               <Rating rating={product.rating} numReviews={product.numReviews}/>
                <div class="price">${product.price}</div>
              </div>
            </div>
 )
}
