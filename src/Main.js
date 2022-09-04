import ItemDetailContainer from './components/ItemDetailContainer'
import ItemListContainer from './components/ItemListContainer'
import Cart from './components/Cart'
import Checkout from './components/Checkout'
import { Routes, Route } from "react-router-dom"

const Main = () => {
    return (
        <main className="container-fluid">
            <Routes>
                <Route path="/" element={<ItemListContainer greeting={"Bienvenidos!"}/>} />
                <Route path="/category/:category" element={<ItemListContainer greeting={"Bienvenidos!"}/>} />
                <Route path="/item/:id" element={<ItemDetailContainer />} />
                <Route path="/carrito" element={<Cart />} />
                <Route path="/checkout" element={<Checkout />} />
            </Routes>
        </main>
    )
}

export default Main;