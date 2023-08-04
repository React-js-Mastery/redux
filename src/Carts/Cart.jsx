import React from "react";
import { useSelector } from "react-redux";
// import ProductItems from "./ProductItems";
import { RemoveItem } from "../features/AddCart";
import { useDispatch } from "react-redux";

const Cart = () => {
  const dispatch=useDispatch();
  const data = useSelector((state) => state.Cart.cart);
  return (
    <div style={{display:'flex',justifyContent:'space-around'}}>
      {data.map((item, index) => {
        return (
          <div key={index} >
            <h4>{item.title}</h4>
            <img src={item.image} alt='proudctImage' height={150} width={150}/>
            <button onClick={()=>dispatch(RemoveItem({id:item.id}))}>Remove from Cart</button>
          </div>
        );
      })}
    </div>
  );
};

export default Cart;