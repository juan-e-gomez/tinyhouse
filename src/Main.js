import ItemDetailContainer from './components/ItemDetailContainer'
import ItemListContainer from './components/ItemListContainer'
import Cart from './components/Cart'
import { Routes, Route } from "react-router-dom"

const Main = () => {
    return (
        <main className="container-fluid">
            <Routes>
                <Route path="/" element={<ItemListContainer greeting={"Bienvenidos!"}/>} />
                <Route path="/category/:categoryId" element={<ItemListContainer greeting={"Una categoría"}/>} />
                <Route path="/item/:id" element={<ItemDetailContainer />} />
                <Route path="/carrito" element={<Cart />} />
            </Routes>
        </main>
    )
}

export default Main;