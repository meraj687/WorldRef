import { CART_ADD_ITEM } from "../constants/cartConstants";

export const cartReducer = (state={cartItem:[]},action)=>{
  switch(action.type){
   case CART_ADD_ITEM:
    const item = action.payload;
    const existitem = state.cartItem.find(x=>x.product===item.product);
    if(existItem){
     return{
      ...state,
      cartItem:state.cartItem.ma
     }
    }
   default:
    return state;
  }
}