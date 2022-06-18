import React, { useEffect, useState } from 'react'
import ItemList from './ItemList'
import ItemCount from './ItemCount'
import { ProductLoader } from "./ProductLoader"

function ItemListContainer({greeting}) {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {

    setLoading(true)

    fetch('https://fakestoreapi.com/products?limit=10')
    .then((response) => {
      const p = response.json()
      return p
    })
    .then((productos) => {
      setItems(productos)
      setLoading(false)
    })
    .catch((error) => {
      console.log(error)
    })}, [])

  return (
    <>
    <div>
      <h1>{greeting}</h1>
      {loading ? <ProductLoader /> : <ItemList items={items} />}
    </div>
    </>
  )
}

export default ItemListContainer