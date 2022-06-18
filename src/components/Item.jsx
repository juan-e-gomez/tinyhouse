import React from "react"
import ItemCount from "./ItemCount"

const Item = ({item}) => {
  return (
    <div className="item" style={{ margin: '10px 20px', border: '2px solid black' }}>
      <h4>{item.title}</h4>
      <img src={item.image} alt="thumbnail" width="200" />
      <p>Precio : ${item.price}</p>
      <ItemCount stock={10} initial={0} onAdd={()=>{}}/>
    </div>
  )
}
export default Item