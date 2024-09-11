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
                        <NavLink to="/productos" className={({isActive})=> (isActive ? "navegacion-a active":"navegacion-a" )}>Todos Los productos</NavLink>
                    </li>
                    <li>
                        <NavLink to="/category/nike" className={({isActive})=> (isActive ? "navegacion-a active":"navegacion-a" )}>Nike/Jordan</NavLink>
                    </li>
                    <li>
                        <NavLink to="/category/new-balance" className={({isActive})=> (isActive ? "navegacion-a active":"navegacion-a" )}>New Balance</NavLink>
                    </li>
                    <li>
                        <NavLink to="/category/adidas" className={({isActive})=> (isActive ? "navegacion-a active":"navegacion-a" )}>Adidas</NavLink>
                    </li>
                    <li>
                        <NavLink to="/category/fila" className={({isActive})=> (isActive ? "navegacion-a active":"navegacion-a" )}>Fila</NavLink>
                    </li>
                </ul>
            </div>
            <CartWidget/>
        </nav>
    )
}

export default NavBar;