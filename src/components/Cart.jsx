import React, {useContext} from "react";
import { CartContext } from "../context/CartContext";
    
const Cart = () => {

    const cartValues = useContext(CartContext);

    const actualCart = cartValues.carrito;
    console.log(actualCart);

    return (
    <div className="container-fluid">
        <h2>El carrito contiene: </h2>
        <div>
            {actualCart.map(({ title, price, index, quantity }) => (
            <li key={index}> {quantity} x {title} - U$S {price} </li>
            ))}
        </div>
    </div>
    )
}

export default Cart