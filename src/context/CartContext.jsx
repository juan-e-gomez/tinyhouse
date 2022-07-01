import { createContext, useState } from "react";

export const CartContext = createContext();

const Provider = CartContext.Provider;

export const CartProvider = ({ children }) => {
    const [carrito, setCarrito] = useState([])
    const [cantidad_total, setCantidadTotal] = useState(0)
    const [precio_total, setPrecioTotal] = useState(0)

    const addItem = (item,quantity) => {
        const copia = [...carrito]
        
        const nuevo_producto = {
            ...item,
            quantity : quantity
        }

        copia.push(nuevo_producto)
        setCarrito(copia)
        setCantidadTotal(cantidad_total + nuevo_producto.quantity)
    }

    const removeItem = (itemId) => {
        // setCarrito()
    }

    const clearCart = () => {
        setCarrito([]);
    }

    const isInCart = (itemId) => {
        // return true or false
    }

    const ContextValues = {
        carrito : carrito,
        cantidad_total : cantidad_total,
        precio_total : precio_total,
        addItem : addItem,
        removeItem : removeItem,
        clearCart : clearCart,
        isInCart : isInCart
    }

    return (
        <Provider value={ContextValues}>
            {children}
        </Provider>
    )
}