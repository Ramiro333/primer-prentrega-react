import React from 'react'
import Item from '../item/item'
import './itemList.css'
const itemList = ({products}) => {

    return (
        <div className='card-container'>
            {products.map((item)=>(
                <Item key={item.id} item={item}/>
            ))}
        </div>
    )
}

export default itemList
