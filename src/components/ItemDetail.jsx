import React from "react";
import ItemCount from "./ItemCount";

const ItemDetail = ({item}) => {
    return (
        <div className="detail">
            <h4>{item.title}</h4>
            <img src={item.image} alt="thumbnail" className="detail-image" width="400"/>
            <p>{item.description}</p>
            <h5>Precio: ${item.price}</h5>
            <ItemCount stock={9} initial={1} />
        </div>
    )
}

export default ItemDetail