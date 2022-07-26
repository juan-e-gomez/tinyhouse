import { db } from '../firebase'
import { collection, addDoc } from "firebase/firestore"
import { CartContext } from '../context/CartContext'
import { useContext , useState } from 'react'
import { Swal } from 'sweetalert2'
import { Navigate } from 'react-router-dom'
import { async } from '@firebase/util'

const Checkout = () => {

    const [purchaseId, setPurchaseId] = useState('')

    const cartValues = useContext(CartContext);

    const purchasedetails = localStorage.getItem("userData");
    const userData = JSON.parse(purchasedetails);

    const handlePurchase = () => {
        const collectionOrders = collection(db, "orders")
        const orderData = {
            id: purchaseId,
            user: userData.nombre,
            email: userData.email,
            tel: userData.tel,
            items: userData.items,
            total: cartValues.precio_total,
            date: userData.date
        }
        
        const consulta = addDoc(collectionOrders, orderData)

        consulta.then(resultado=>{
                setPurchaseId(resultado.id);
            })
            .catch(error=>{
                console.log(error)
            })
    }


    return (
        <>
            <h1>Checkout</h1>
            <p>¡Gracias {userData.nombre}, por comprar en Tiny House Pinamar!</p>
            <p>Por favor confirmar tu orden de compra y nos contactaremos a la brevedad para completar el pago.</p>
            <button className="btn btn-success mx-lg-2" onClick={handlePurchase}> Confirmar orden </button>
        </>
    )
}

export default Checkout;