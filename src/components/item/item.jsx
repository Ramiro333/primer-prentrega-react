
import "./Item.css"
import { Link } from "react-router-dom"
const itemlist = ({item}) => {
  return (
    <Link to={`/item/${item.id}`}>
      <div key={item.id} className='card'>
          <h2>{item.name}</h2>
          <img src={item.image} alt="" />
          <p>Precio: {item.price}US$</p>
          <p>Color: {item.color[0]}, {item.color[1]}</p>
      </div>
    </Link>
  )
}

export default itemlist
