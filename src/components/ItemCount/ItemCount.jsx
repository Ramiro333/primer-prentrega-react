import { useState } from "react"
const ContadorSec = ({stock}) => {
    const[Contador,setContador]=useState(1)


    const handleIncrement = () => {
      if(Contador <15){
        setContador(Contador+1)
      }
    }
    const handleDecrement = () =>{
      console.log(stock)
      if(Contador!=0 && Contador<=stock){
        setContador(Contador-1)
      }
    }
    const agregarCarrito =()=>{
        alert( `se agregron ${Contador} al carrito `)
    }

  return (
    <div>
      <p>{Contador}</p>
      <button onClick={handleIncrement}>INCREMENTAR</button>
      <button onClick={handleDecrement}>decrementar</button>
      <button onClick={agregarCarrito}>agregar al carrito</button>
    </div>
  )
}

export default ContadorSec
