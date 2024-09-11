import "./CartWidget.css"
import { FaCartPlus } from "react-icons/fa";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext/CartProvider";
import { Link } from "react-router-dom";
const CartWidget = () => {
  const {getTotal}= useContext(CartContext)

  return (
    <Link to="/cart">
      <div className="nav-cart">
        {getTotal()}
        <FaCartPlus />
      </div>
    </Link>
  )
}

export default CartWidget
