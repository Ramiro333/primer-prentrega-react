import "./CartWidget.css"
import { FaCartPlus } from "react-icons/fa";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext/CartProvider";
const CartWidget = () => {
  const {cart,getTotal}= useContext(CartContext)

  return (
    <div className="nav-cart">
      {getTotal()}
      <FaCartPlus />
    </div>
  )
}

export default CartWidget
