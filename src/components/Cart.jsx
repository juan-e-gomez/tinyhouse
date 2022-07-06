import React, {useContext} from "react";
import { CartContext } from "../context/CartContext";
    
const Cart = () => {

    const cartValues = useContext(CartContext);

    const actualCart = cartValues.carrito;
    console.log(actualCart);

    const handleSubmit = (e) => {
        e.preventDefault();
        const nombre = e.target.elements.nombre.value
        const email = e.target.elements.email.value
        const tel = e.target.elements.number.value

        const user = {nombre, email, tel}
        console.log(user);
    }

    return (
        <div className="container-fluid">
            <h2>El carrito contiene: </h2>
            <div>
                {actualCart.map(({ title, price, index, quantity }) => (
                <li key={index}> {quantity} x {title} - U$S {price} </li>
                ))}
            </div>
            <form key="form" onSubmit={handleSubmit}>
                <div>
                    <input type="text" id="nombre" placeholder="Nombre"/>
                </div>
                <div>
                    <input type="email" id="email" placeholder="e-mail"/>
                </div>
                <div>
                    <input type="number" id="number" placeholder="Telefono"/>
                </div>
                <button className="btn btn-success mx-lg-2"> Comprar </button>
            </form>
            <button className="btn btn-success mx-lg-2" onClick={cartValues.clearCart}> Clear </button>
        </div>
    )
}

export default Cart