import { useState } from "react"
import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import ItemCount from "./ItemCount";

function ItemDetail ({item}) {

    const cartValues = useContext(CartContext);
    console.log(cartValues);
    
    const [cant, setCant] = useState(0)

    const onAdd = (cant) => {
        setCant(cant)
        console.log("La cantidad seleccionada es "+ cant)
        cartValues.addItem(item, cant)
    }

    return (
        <div className="detail">
            <h4  style={{ margin: '10px 20px', padding: '10px 20px' }} className="bg-light">{item.title}</h4>
            <img src={item.image} alt="thumbnail" className="detail-image" width="400"/>
            <p  style={{ margin: '10px 20px', padding: '10px 20px' }} className="bg-light">{item.description}</p>
            <h5 style={{ margin: '10px 20px', padding: '10px 20px' }} className="bg-light">Precio: ${item.price}</h5>
            <ItemCount  style={{ margin: '10px 20px', padding: '10px 20px' }} stock={9} initial={1} onAdd={onAdd}/>
        </div>
        )
    }

export default ItemDetail