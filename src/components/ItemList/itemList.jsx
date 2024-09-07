import React, { useContext } from 'react'
import Item from '../item/item'
import './itemList.css'
const itemList = ({productos}) => {
    return (
        <div className='card-container'>
            {productos.map((item)=>(
                <Item key={item.id} item={item}/>
            ))}
        </div>
    )
}

export default itemList
