import Header from "./Header"
import Footer from "./Footer"
import Main from "./Main";
import ItemListContainer from "./components/ItemListContainer";

function App () {
    return (
        <>
            <Header/>
            <Main/>
            <ItemListContainer greeting="Bienvenido!"/>
            <Footer/>
        </>
    )
}

export default App;