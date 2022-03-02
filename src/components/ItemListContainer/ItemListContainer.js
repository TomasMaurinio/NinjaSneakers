import React, { useEffect, useState } from 'react'
import Item from '../Item/Item';
import './ItemListContainer.css';
import { useParams } from 'react-router-dom';
//Firebase
import db from '../../firebase';
import { collection, getDocs } from 'firebase/firestore';

const ItemListContainer = () => {

    const [products, setProducts] = useState([])
    const [loaded, setLoaded] = useState(true)
    const { category } = useParams()

    async function productos()  {
        const productsCol = collection(db, 'products');
        const productsSnapshot = await getDocs(productsCol);
        const productsList = productsSnapshot.docs.map(doc => {
            let producto = doc.data()
            producto.id = doc.id
            return producto
        });
        return productsList;
    }

    useEffect(() => {
        productos(db).then(data => {
            if (!category) {
                setProducts(data)
            }
            if (category === 'zapatillas') {
                const productosFiltrados = data.filter(unProducto => unProducto.category === 'zapatillas')
                setProducts(productosFiltrados)
            }
            if (category === 'ojotas') {
                const productosFiltrados = data.filter(unProducto => unProducto.category === 'ojotas')
                setProducts(productosFiltrados)
            }
        })
    }, [])

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
                    <h2 className='subtitulo'>Nuestros productos</h2>
                    <div className='item-list-container'>
                    {products.map(product => {
                        return (
                            <Item data={product} />
                        )
                    })}
                </div>
                </div>
            }

        </>
    )
}

export default ItemListContainer;