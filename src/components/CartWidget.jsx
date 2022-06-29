import React, { useContext } from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { CartContext } from "../context/CartContext";


const CartWidget = () => {

    const cartValues = useContext(CartContext);
    console.log(cartValues);

    return (
    <>
        <span className="material-symbols-outlined">shopping_cart</span>
        <NavLink to="/carrito">{cartValues.cantidad_total}</NavLink>
    </>
    )
}

export default CartWidget;
