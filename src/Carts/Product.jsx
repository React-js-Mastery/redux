import React from "react";
import logo from "../assets/img/logo.jpg";
import ProductItems from "./ProductItems";
import watch from "../assets/img/watch.jpg";
import phone from "../assets/img/phone.jpg";
import Iphone from "../assets/img/iphone.jpg";
import buds from "../assets/img/buds.jpg";
import monitor from "../assets/img/monitors.jpg";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import '../assets/css/styles.css'

const Product = () => {
  const cartItem = useSelector((state) => state.Cart.cart);
  console.log(cartItem);
  return (
    <>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <img className="logo" src={logo} alt="logo" height={100} width={150} />
        <h4>
          {" "}
          <Link className="Product-Collections" to="/checkout"><span className="Product-Counting-title">Cart:</span><span className="Product-Counting">{cartItem.length}</span></Link>
        </h4>
      </div>
      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        <ProductItems id="1" title="watch" image={watch} />
        <ProductItems id="2" title="phone" image={phone} />
        <ProductItems id="3" title="Iphone" image={Iphone} />
        <ProductItems id="4" title="buds" image={buds} />
        <ProductItems id="5" title="Monitors" image={monitor} />
      </div>
    </>
  );
};

export default Product;