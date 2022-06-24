import { useState } from "react"
import ItemCount from "./ItemCount";

function ItemDetail ({item}) {
    
    const [cant, setCant] = useState(true)

    const onAdd = (cant) => {
        setCant(cant)
        console.log(cant)
    }

    return (
        <div className="detail">
            <h4>{item.title}</h4>
            <img src={item.image} alt="thumbnail" className="detail-image" width="400"/>
            <p>{item.description}</p>
            <h5>Precio: ${item.price}</h5>
            <ItemCount stock={9} initial={1} onAdd={onAdd}/>
        </div>
        )
    }

export default ItemDetail