import React from "react";
import Header from "./Header"
import Footer from "./Footer"
import Main from "./Main";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";

function App () {
    return (
        <>
            <Header/>
            <Main/>
            <ItemListContainer greeting="Bienvenidos!"/>
            <ItemDetailContainer />
            <Footer/>
        </>
    )
}

export default App;