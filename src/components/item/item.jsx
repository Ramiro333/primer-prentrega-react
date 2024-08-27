
import "./Item.css"
import { Link } from "react-router-dom"
const itemlist = ({item}) => {
  return (
    <Link className='link' to={`/item/${item.id}`}>
      <div key={item.id} className='card'>
          <h2>{item.name}</h2>
          <img src={item.image} alt="" />
          <p>Precio: {item.price}US$</p>
          <div className="contenedor-colores">
            <p>Color:</p>
            <div style={{backgroundColor: item.color[0]}} className="colores"></div>
            <div style={{backgroundColor: item.color[1]}} className="colores"></div>
          </div>
      </div>
    </Link>
  )
}

export default itemlist
