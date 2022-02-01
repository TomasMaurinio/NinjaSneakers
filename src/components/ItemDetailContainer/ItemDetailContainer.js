import React, {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom';
import ItemDetail from '../ItemDetail/ItemDetail';

export default function ItemDetailContainer() {

    const [products, setProducts] = useState([])
    const {id} = useParams()

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



    useEffect(() => {
        dataProducts(dataProducts)
        dataProducts.then((res)=>{
            if(id){
                const resultadoFiltrado = res.find(product => product.id === id)
                setProducts(resultadoFiltrado)
            }
        })
    }, [id])

    return(
        <div> 
        {<ItemDetail data={products} />}
        </div>
    )
}