import React from "react";
import Header from "./Header"
import Footer from "./Footer"
import Main from "./Main";
import { BrowserRouter } from "react-router-dom"
import { CartProvider } from "./context/CartContext";

function App () {
    return (
        <BrowserRouter>
            <CartProvider>
                <Header/>
                <Main/>
            </CartProvider>
            <Footer/>
        </BrowserRouter>
    )
}

export default App;