import "./CartWidget.css"
import { FaCartPlus } from "react-icons/fa";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext/CartProvider";
const CartWidget = () => {
  return (
    <div className="nav-cart">
      333
      <FaCartPlus />
    </div>
  )
}

export default CartWidget
