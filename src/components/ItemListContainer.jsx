import React, { useEffect, useState } from 'react'
import ItemList from './ItemList'
import { useParams } from 'react-router-dom'
import { db } from '../firebase'
import { getDocs, collection, query, where } from "firebase/firestore"


const ItemListContainer = ({greeting}) => {

  const [items, setItems] = useState([])
  const {categoryId} = useParams()

  useEffect(() => {

      const collectionItems = collection(db, "items")
      const consulta = getDocs(collectionItems)

      consulta
        .then((resultado)=>{
          const productos_mapeados = resultado.docs.map(reference=>{
            const aux = reference.data()
            aux.id = reference.id
            return aux
        })
        setItems(productos_mapeados)
        })
        .catch((error)=>{
          console.log(error)
        }) 
  }, [categoryId])

/*   useEffect(() => {

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
    })}, [categoryId]) */

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