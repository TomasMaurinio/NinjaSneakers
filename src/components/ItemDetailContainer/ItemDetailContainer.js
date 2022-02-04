import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import ItemDetail from '../ItemDetail/ItemDetail';

export default function ItemDetailContainer() {

    const [products, setProducts] = useState([])
    const { id } = useParams()
    const [loaded, setLoaded] = useState(true)

    const dataProducts = [
        {
            id: 1,
            name: 'Adidas Supernova',
            price: 15500,
            img: '../assets/zapatillas1.jpg',
            stock: 4,
            category: 1,
        },

        {
            id: 2,
            name: 'Adidas Forum Mid',
            price: 19000,
            img: '../assets/zapatillas2.jpg',
            stock: 3,
            category: 1,
        },

        {
            id: 3,
            name: 'Adidas Postmove',
            price: 11000,
            img: '../assets/zapatillas3.jpg',
            stock: 2,
            category: 1,
        },

        {
            id: 4,
            name: 'Adidas ZX 2K Boost 2.0',
            price: 21000,
            img: '../assets/zapatillas4.jpg',
            stock: 5,
            category: 1,
        },

        {
            id: 5,
            name: 'Adidas Adilette lite',
            price: 3500,
            img: '../assets/ojotas1.jpg',
            stock: 2,
            category: 2,
        },

        {
            id: 6,
            name: 'Adidas Adilette Comfort',
            price: 4000,
            img: '../assets/ojotas2.jpg',
            stock: 5,
            category: 2,
        },
    ]



    useEffect(() => {
        setProducts(dataProducts.find(product => product.id == id))
    }, [id])

    useEffect(() => {
        setTimeout(() => {
            setLoaded(false);
        }, 1400)
    }, []);

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    return (
        <>
            {loaded ?
                <div className='loading-container'>
                    <div class="loadingio-spinner-bean-eater-ej6q7dlni"><div class="ldio-kpr815xf35">
                    <div><div></div><div></div><div></div></div><div><div></div><div></div><div></div></div></div></div>
                </div> :
            <div> 
            {<ItemDetail data={products} />}
            </div>}
        </>
    )
}