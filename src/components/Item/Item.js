import React from 'react';
import './Item.css'
import { Link } from 'react-router-dom'

export default function Item({data}) {

    return(
            <div className="item-container">
                <img className='fotos' src= {data.img} alt={data.name} width="250" height="250"/>
                <h3>{data.name}</h3>
                <b>${data.price}</b>
                <p>Stock: {data.stock}</p>
                <Link to= {`/product/${data.id}`}><button className='btn-comprar'>Comprar</button></Link>
            </div>
          )
}