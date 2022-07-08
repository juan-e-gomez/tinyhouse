import React, { useEffect, useState } from 'react'
import ItemList from './ItemList'
import { useParams } from 'react-router-dom'
import { db } from '../firebase'
import { getDocs, collection, query, where } from "firebase/firestore"


const ItemListContainer = ({greeting}) => {

  const [items, setItems] = useState([])
  const {category} = useParams()

  useEffect(() => {

    if(category) {

    const collectionItems = collection(db, "items")
    const filtroDeCategoria = query(collectionItems, where("category", "==", category))
    const consulta = getDocs(filtroDeCategoria)

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
    } else {
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
    }
  }, [category])

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