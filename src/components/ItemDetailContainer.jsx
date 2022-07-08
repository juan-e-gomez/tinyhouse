import React, { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail'
import {useParams} from 'react-router-dom'
import {db} from '../firebase'
import {getDoc, collection, doc } from "firebase/firestore"

const ItemDetailContainer = () => {

  const [item, setItem] = useState({})
  const {id} = useParams()

  useEffect(() => {

    const collectionItems = collection(db, "items")
    const docRef = doc(collectionItems, id)
    const consulta = getDoc(docRef)

    consulta 
      .then((resultado)=>{
        const producto = resultado.data()
        setItem(producto)
      })
      .catch((error)=>{
        console.log(error)
      })
    }, [])

  return (
    <ItemDetail item={item} />
  )
}

export default ItemDetailContainer