import './ItemDetail.css';
import ItemCount from '../ItemCount/ItemCount';
import React from 'react'

export default function ItemDetail({ data }) {

    return (
        <div id='detalle'>
            <div id='ItemDetail'>

                <div className='ItemContenedor'>
                    <div className='left'>
                        <h3 className='productName'> {data.name}</h3>
                        <br/>
                        <img className='imagenDeProducto' src= {data.img} alt={data.name} width={250} height={250}></img>
                    </div>
                        <br/><br/>
                    <div className='right'>
                        <b>Precio : ${data.price}</b>
                        <br/>
                        <p>Stock: {data.stock}</p>
                        <ItemCount stock={data.stock} />
                    </div>
                </div>
            </div>
        </div>
    )
}