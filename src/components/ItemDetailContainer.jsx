import React, { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail'
import {useParams} from 'react-router-dom'

function ItemDetailContainer() {
  const [item, setItem] = useState([])

  const {id} = useParams()

  useEffect(() => {

    fetch(`https://fakestoreapi.com/products/${id}`)
    .then((response) => {
      const p = response.json()
      return p
    })
    .then((product) => {
      setItem(product)
    })
    .catch((error) => {
      console.log(error)
    })}, [id])

  return (
    <ItemDetail item={item} />
  )
}

export default ItemDetailContainer