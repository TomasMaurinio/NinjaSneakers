import React, { useEffect, useState } from 'react'
import Item from '../Item/Item';
import './ItemListContainer.css';
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {

    const [products, setProducts] = useState([])
    const [loaded, setLoaded] = useState(true)
    const { category } = useParams()

    const dataProducts = [
        {
            id: 1,
            name: 'zapatillas1',
            price: 15500,
            img: './assets/zapatillas1.jpg',
            stock: 4,
            category: 1,
        },

        {
            id: 2,
            name: 'zapatillas2',
            price: 19000,
            img: './assets/zapatillas2.jpg',
            stock: 3,
            category: 1,
        },

        {
            id: 3,
            name: 'zapatillas3',
            price: 11000,
            img: './assets/zapatillas3.jpg',
            stock: 2,
            category: 1,
        },

        {
            id: 4,
            name: 'zapatillas4',
            price: 21000,
            img: './assets/zapatillas4.jpg',
            stock: 5,
            category: 1,
        },

        {
            id: 5,
            name: 'ojotas1',
            price: 3500,
            img: './assets/ojotas1.jpg',
            stock: 2,
            category: 2,
        },

        {
            id: 6,
            name: 'ojotas2',
            price: 4000,
            img: './assets/ojotas2.jpg',
            stock: 5,
            category: 2,
        },
    ]

    const getProducts = new Promise((resolve, reject) => {
        resolve(dataProducts)
    })

    useEffect(() => {
        getProducts.then(data => {
            if (!category) {
                setProducts(data)
            }
            if (category === 1) {
                const productosFiltrados = data.filter(unProducto => unProducto.category === 1)
                setProducts(productosFiltrados)
            }
            if (category === 2) {
                const productosFiltrados = data.filter(unProducto => unProducto.category === 2)
                setProducts(productosFiltrados)
            }
        })
    }, [])

    useEffect(() => {
        setTimeout(() => {
            setLoaded(false);
        }, 2000)
    }, []);

    return (
        <>
            {loaded ?
            <div className='loading-container'>
                <div class="loadingio-spinner-bean-eater-ej6q7dlni"><div class="ldio-kpr815xf35">
                <div><div></div><div></div><div></div></div><div><div></div><div></div><div></div></div></div></div>
            </div> :
            <div>
                <h2 className='subtitulo'>Nuestros productos</h2>
                <div className='item-list-container'>
                {products.map(product => {
                    return (
                        <Item data={product} />
                    )
                })}
            </div>
            </div>}

        </>
    )
}

export default ItemListContainer;