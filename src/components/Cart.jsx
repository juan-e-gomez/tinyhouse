import React, {useContext} from "react";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";


    
const Cart = () => {

    const cartValues = useContext(CartContext);

    const actualCart = cartValues.carrito;
    console.log(actualCart);
    const navigate = useNavigate();


    const handleSubmit = (e) => {
        e.preventDefault();
        e.stopPropagation();
        const nombre = document.getElementById("nombre").value;
        const email = document.getElementById("email").value;
        const tel = document.getElementById("number").value;
        const date = new Date();

        if(nombre === "" || email === "" || tel === ""){
            alert("Por favor, complete todos los campos");
        } else {
            let userData = {
                nombre: nombre,
                email: email,
                tel: tel,
                date: date,
                items: actualCart
            }
            console.log(userData);

            localStorage.setItem("userData", JSON.stringify(userData));

            navigate("/checkout");
        }
    }

    

    let deleteItem = (id) => {
        cartValues.removeItem(id)

    }


        

    return (
        <div id="cart" className="container-fluid">
            <h2>El carrito contiene: </h2>
                <div style={{ margin: '10px 20px', padding: '10px 20px' }}>
                    {actualCart.map((({index, title, price, quantity, id}) => (
                        <li key={id}> {quantity} x {title} - U$S {quantity*price} <button key={index} onClick={() => deleteItem({index})} className="material-symbols-outlined">delete</button></li>
                    )))}
                </div>
            <div>
                <h3>Total: U$S {cartValues.precio_total}</h3>
            </div>
            <form  style={{ margin: '10px 20px', padding: '10px 20px' }} key="purchase-form" onSubmit={handleSubmit}>
                <div style={{ padding: '10px 20px' }}>
                    <input type="text" id="nombre" placeholder="Nombre"/>
                </div>
                <div style={{ padding: '10px 20px' }}>
                    <input type="email" id="email" placeholder="e-mail"/>
                </div>
                <div style={{ padding: '10px 20px' }}>
                    <input type="tel" id="number" placeholder="Telefono"/>
                </div> 
                <button className="btn btn-success mx-lg-2" type="submit" to="/checkout"> Crear orden de compra </button>
            </form>
            <button className="btn btn-success mx-lg-2" onClick={cartValues.clearCart}> Limpiar carrito </button>
        </div>
    )
}

export default Cart;