import React from 'react'
import ItemCount from './ItemCount'

function Item({id, name, image, stock}) {
  return (
    <div className="container-fluid">
        <h4>{name}</h4>
        <img src={image} alt={id} />
        <ItemCount stock={stock} initial={0} onAdd={()=>{}}/>
    </div>
  )
}

export default Item