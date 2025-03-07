// write product card here
import React from "react";
import ViewProductButton from "./button";

import img from "../assets/images/ps5pronew.webp";


const ProductCard = () => {
    const productImage = img;
    const productName = "PlayStation 5";
    const productPrice = "$562.06";

    return(
        <div className="productcard">
            <img src={productImage} alt={productName} width={"500px"}/>
            <h2>{productName}</h2>
            <p>{productPrice}</p>
            <ViewProductButton />
        </div>
    )
}

export default ProductCard;