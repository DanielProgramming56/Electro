import React from "react";
import "../styles/productBox.scss";
import NavigateNextSharpIcon from '@mui/icons-material/NavigateNextSharp';
import imageProduct from "../assets/product01.png"
const CategoryProductBox = () => {
  return <div className="product-container">
    <div className="product-details">
        <h1>Laptop Collection</h1>
        <span> SHOP NOW <NavigateNextSharpIcon/></span>
    </div>
    <div className="product-image">
        <img src={imageProduct}  alt=""/>
    </div>
  </div>;
};

export default CategoryProductBox;
