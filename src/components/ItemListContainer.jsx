import React, { useEffect, useState } from 'react'
import customFetch from '../misc/customFetch'
import productos from '../misc/productos'
import ItemList from './ItemList'

function ItemListContainer() {
    const [items, setItems] = useState([])

    useEffect(() => {
        customFetch(3000, productos)
        .then(r => setItems(r))
    }, [items])


  return (
    <div className="container-fluid">
        <ItemList products= {items}/>
    </div>
  )
}

export default ItemListContainer