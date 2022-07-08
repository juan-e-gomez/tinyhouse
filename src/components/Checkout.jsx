import { db } from '../firebase'
import { collection, addDoc } from "firebase/firestore"
import { CartContext } from '../context/CartContext'
import { useContext , useState } from 'react'

const Checkout = () => {

    const [idPurchase, setIdPurchase] = useState('')

    const cartValues = useContext(CartContext);
    const actualCart = cartValues.carrito;

    const handlePurchase = () => {
        const collectionOrders = collection(db, "orders")
        const orderData = {
            buyer : {
                name : 'Juan',
                email : 'test@test.com',
                tel : '123456789',
            },
            items : {
                id : '1',
                title : 'Producto prueba',
                price : '10',
                quantity : '1',
            },
            date : null,
            total : null
        }
        const consulta = addDoc(collectionOrders, orderData)

        consulta
            .then(resultado=>{
                setIdPurchase(resultado.id)
            })
            .catch(error=>{
                console.log(error)
    })
    }

    return (
        <>
            <div>Checkout</div>
            <button className="btn btn-success mx-lg-2" onClick={handlePurchase}> Guardar </button>
        </>
    )
}

export default Checkout