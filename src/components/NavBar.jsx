import CartWidget from "./CartWidget";
import {Link} from "react-router-dom"

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand">Tiny House Pinamar</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                <li className="nav-item active">
                    <Link className="nav-link" to="/">Home</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="category/electronics">Electronics</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="category/jewelery">Jewelery</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="category/clothing">Men's clothing</Link>
                </li>
                <li className="nav-item">
                    <CartWidget />
                </li>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar;