import ItemDetailContainer from './components/ItemDetailContainer'
import ItemListContainer from './components/ItemListContainer'
import { Routes, Route } from "react-router-dom"

const Main = () => {
    return (
        <main className="container-fluid">
            <Routes>
                <Route path="/" element={<ItemListContainer greeting={"Bienvenidos!"}/>} />
                <Route path="/category/:categoryId" element={<ItemListContainer greeting={"Una categoria"}/>} />
                <Route path="/item/:itemId" element={<ItemDetailContainer />} />
            </Routes>
        </main>
    )
}

export default Main;