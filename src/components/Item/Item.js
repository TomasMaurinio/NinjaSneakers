import React from 'react';
import ItemCount from '../ItemCount/ItemCount';
import './Item.css'
import { Link } from 'react-router-dom'

export default function Item({data}) {

    return(
            <div className="item-container">
                <img className='fotos' src= {data.img} alt={data.name} width="250" height="250"/>
                <h3>{data.name}</h3>
                <b>${data.price}</b>
                <ItemCount />
                <p>Stock: {data.stock}</p>
                <button className='btn-comprar'>Comprar</button>
                <Link to= {`/ItemDetailPage/${data.id}`}><button className='btn-ver'>Ver</button></Link>
            </div>
          )
}