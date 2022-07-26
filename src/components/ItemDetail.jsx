import { useState } from "react"
import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import ItemCount from "./ItemCount";

function ItemDetail ({item}) {

    const cartValues = useContext(CartContext);
    
    const [cant, setCant] = useState(0)

    const onAdd = (cant) => {
        setCant(cant)
        cartValues.addItem(item, cant)
    }

    let initial = () => {
        if(item.id in cartValues.carrito) {
            return cartValues.carrito[item.id].quantity
        } else {
            return 0
        }
    }

    
    return (
        <div className="detail">
            <h4  style={{ margin: '10px 20px', padding: '10px 20px' }} className="bg-light">{item.title}</h4>
            <img src={item.image} alt="thumbnail" className="detail-image" width="400"/>
            <p  style={{ margin: '10px 20px', padding: '10px 20px' }} className="bg-light">{item.description}</p>
            <h5 style={{ margin: '10px 20px', padding: '10px 20px' }} className="bg-light">Precio: ${item.price}</h5>
            <ItemCount  style={{ margin: '10px 20px', padding: '10px 20px' }} stock={5} initial={initial} onAdd={onAdd}/>
        </div>
        )
    }

export default ItemDetail