import "./NavBar.css"
import CartWidget from "../CartWidget/CartWidget"; 
import { Link,NavLink } from "react-router-dom";
const NavBar = ()=>{

    return(
        <nav className="navegacion">
            <div className="navegacion-logo">
                <Link to="/">UnLogo</Link>
            </div>
            <div className="navegacion-a">
                <ul className="navegacion-ul">
                    <li>
                        <NavLink to="/category/nike" className="navegacion-a" activeClassname="active">Nike/Jordan</NavLink>
                    </li>
                    <li>
                        <NavLink to="/category/new-balance" className="navegacion-a" activeClassname="active">New Balance</NavLink>
                    </li>
                    <li>
                        <NavLink to="/category/adidas" className="navegacion-a" activeClassname="active">Adidas</NavLink>
                    </li>
                    <li>
                        <NavLink to="/category/fila" className="navegacion-a" activeClassname="active">Fila</NavLink>
                    </li>
                </ul>
            </div>
            <CartWidget/>
        </nav>
    )
}

export default NavBar;