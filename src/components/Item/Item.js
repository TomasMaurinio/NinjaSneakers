import React from 'react';
import ItemCount from '../ItemCount/ItemCount';
import './Item.css'

export default function Item({data}) {
  return <div>
    <img src={data.img} alt={data.name} width={250} height={250} />
    <h3>{data.name}</h3>
    <b>${data.price}</b>
    <p>Stock: {data.stock}</p>
    <ItemCount />
    <button className='btn-comprar'>Comprar</button>
  </div>;
}

