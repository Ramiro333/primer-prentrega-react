
import "./Item.css"
const itemlist = ({item}) => {
  return (
    <div key={item.id} className='card'>
        <h2>{item.name}</h2>
        <img src={item.image} alt="" />
        <p>Precio: {item.price}US$</p>
        {/* <p>{item.description}</p> */}
        <p>Color: {item.color[0]}, {item.color[1]}</p>
        {/* <p>Marca: {item.category}</p> */}
    </div>
  )
}

export default itemlist
