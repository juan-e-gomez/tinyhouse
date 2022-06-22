import React from "react"
import {Link} from "react-router-dom"

const Item = ({item}) => {
  return (
    <div className="item" style={{ margin: '10px 20px', border: '2px solid black' }}>
      <h4>{item.title}</h4>
      <img src={item.image} alt="thumbnail" width="200"/>
      <p>Precio : ${item.price}</p>
      <Link to={`/item/${item.id}`}>Detalle</Link>
    </div>
  )
}
export default Item