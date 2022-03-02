import './ItemDetail.css';
import ItemCount from '../ItemCount/ItemCount';
import React,{useContext} from 'react';
import CartContext from '../../context/CartContext';

export default function ItemDetail({ data }) {
    const { addProducts, products } = useContext(CartContext)

    const onAdd = (value) => {
        addProducts(
            {
                name: data.name,
                id: data.id,
                price: data.price,
                image: data.img,
                quantity: value
            }
        )
        console.log("hice click: ", products)
    }

    return (
        <div id='detalle'>
            <div id='ItemDetail'>

                <div className='ItemContenedor'>
                    <div className='left'>
                        <img className='imagenDeProducto' src= {data.img} alt={data.name} width={250} height={250} />
                    </div>
                    <div className='right'>
                        <h3 className='productName'> {data.name}</h3>
                        <b className='price'>Precio : ${data.price}</b>
                        <p className='stock'>Stock: {data.stock}</p>
                        <ItemCount stock={data.stock} onAdd={onAdd} />
                    </div>
                </div>
            </div>
        </div>
    )
}