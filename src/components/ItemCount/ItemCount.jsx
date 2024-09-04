import { useState } from "react"
const ContadorSec = ({initial, stock, onAdd}) => {
    const[Contador,setContador]=useState(initial)
    const handleIncrement = () => {
      if(Contador <stock){
        setContador(Contador+1)
      }
    }
    const handleDecrement = () =>{
      if(Contador!=initial && Contador<=stock){
        setContador(Contador-1)
      }
    }
  

  return (
    <div>
      <p>{Contador}</p>
      <button onClick={handleIncrement}>INCREMENTAR</button>
      <button onClick={handleDecrement}>decrementar</button>
      <button onClick={()=>onAdd(Contador)}>agregar al carrito</button>
    </div>
  )
}

export default ContadorSec
