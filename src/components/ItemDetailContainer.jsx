import React, { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail'


function ItemDetailContainer() {
  const [item, setItems] = useState([])
  
  useEffect(() => {

    fetch('https://fakestoreapi.com/products/15')
    .then((response) => {
      const p = response.json()
      return p
    })
    .then((response) => {
      setItems(response)
    })
    .catch((error) => {
      console.log(error)
    })}, [])

  return (
    <ItemDetail item={item} />
  )
}

export default ItemDetailContainer