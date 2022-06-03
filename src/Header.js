import NavBar from "./NavBar";
import Webimage from "./Webimage"

const Header = () => {
    return (
        <header className="container-fluid">
            <Webimage />
            <NavBar/>
        </header>
    )
}

export default Header;