import React, {useContext} from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
    
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
            <div  style={{ margin: '10px 20px', padding: '10px 20px' }}>
                {actualCart.map(({ title, price, index, quantity }) => (
                <li key={index}> {quantity} x {title} - U$S {price} </li>
                ))}
            </div>
            <form  style={{ margin: '10px 20px', padding: '10px 20px' }} key="form" onSubmit={handleSubmit}>
                <div style={{ padding: '10px 20px' }}>
                    <input type="text" id="nombre" placeholder="Nombre"/>
                </div>
                <div style={{ padding: '10px 20px' }}>
                    <input type="email" id="email" placeholder="e-mail"/>
                </div>
                <div style={{ padding: '10px 20px' }}>
                    <input type="number" id="number" placeholder="Telefono"/>
                </div>
                <Link className="btn btn-success mx-lg-2" to="/checkout"> Proceder con la compra </Link>
            </form>
            <button className="btn btn-success mx-lg-2" onClick={cartValues.clearCart}> Clear </button>
        </div>
    )
}

export default Cart