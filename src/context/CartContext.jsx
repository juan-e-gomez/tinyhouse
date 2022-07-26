import { createContext, useState } from "react";
import Swal from "sweetalert2";

export const CartContext = createContext();

const Provider = CartContext.Provider;

export const CartProvider = ({ children }) => {

    const [carrito, setCarrito] = useState([])
    const [cantidad_total, setCantidadTotal] = useState(0)
    const [precio_total, setPrecioTotal] = useState(0)

    const addItem = (item, cant) => {
        let isInCart = carrito.find(item => item.id === item.id)

        console.log(isInCart);
        
        if(isInCart === undefined || isInCart === null || item.id !== isInCart.id) {
            console.log(item)
            console.log(cant)
            setPrecioTotal(precio_total + item.price * cant)
            setCantidadTotal(cantidad_total + cant)
            setCarrito([...carrito, {...item, quantity: cant}])


            Swal.fire({
                title: '¡Agregado!',
                text: `${item.title} agregado al carrito`,
                icon: 'success',
                confirmButtonText: 'Ok'
            })

        } else { 
            Swal.fire({
                title: '¡Error!',
                text: `${item.title} ya está en el carrito`,
                icon: 'error',
                confirmButtonText: 'Ok'
            })
        }
    }



    const removeItem = (item, quantity) => {
        const selectedItem = carrito.find(item => item.id === item.id)
        
        if(selectedItem.quantity > 1) {
            console.log(selectedItem.quantity)
            setCantidadTotal(cantidad_total - selectedItem.quantity)
            setPrecioTotal(precio_total - selectedItem.price * selectedItem.quantity)

            Swal.fire({
                title: '¡Eliminado!',
                text: `${selectedItem.title} eliminado del carrito`,
                icon: 'success',
                confirmButtonText: 'Ok'
            })

            setCarrito(carrito.filter(item => item.id !== selectedItem.id))
        }
    }

    const clearCart = () => {
        setCarrito([]);
        setCantidadTotal(0);
        setPrecioTotal(0);
    }


    const ContextValues = {
        carrito : carrito,
        cantidad_total : cantidad_total,
        precio_total : precio_total,
        addItem : addItem,
        removeItem : removeItem,
        clearCart : clearCart,
    }

    return (
        <Provider value={ContextValues}>
            {children}
        </Provider>
    )
}