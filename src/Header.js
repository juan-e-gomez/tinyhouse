import NavBar from "./components/NavBar";
import Webimage from "./components/Webimage"

const Header = () => {
    return (
        <header className="container-fluid bg-light">
            <Webimage />
            <NavBar/>
        </header>
    )
}

export default Header;