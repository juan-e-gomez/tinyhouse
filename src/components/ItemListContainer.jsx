import React, { useEffect, useState } from 'react'
import ItemList from './ItemList'
import {useParams} from 'react-router-dom'

function ItemListContainer({greeting}) {
  const [items, setItems] = useState([])

  const {categoryId} = useParams()

  useEffect(() => {

    fetch(`https://fakestoreapi.com/products/category/${categoryId}`)
    .then((response) => {
      const p = response.json()
      return p
    })
    .then((products) => {
      setItems(products)
    })
    .catch((error) => {
      console.log(error)
    })}, [categoryId])

  return (
    <>
    <div>
      <h1>{greeting}</h1>
      <ItemList items={items}/>
    </div>
    </>
  )
}

export default ItemListContainer