import React, {useEffect, useState} from 'react'
import Item from '../Item/Item';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import './ItemListContainer.css';

const ItemListContainer = ()=> {

    const [products, setProducts] = useState([])

    const dataProducts = [
        {
            id: 1,
            name: 'hamburguesa1',
            price: 300,
            img: './assets/hamburguesa1.png',
            stock: 1,
            category: '',
        },

        {
            id: 2,
            name: 'hamburguesa2',
            price: 300,
            img: './assets/hamburguesa2.png',
            stock: 1,
            category: '',
        },

        {
            id: 3,
            name: 'hamburguesa3',
            price: 300,
            img: './assets/hamburguesa3.png',
            stock: 1,
            category: '',
        },

        {
            id: 4,
            name: 'hamburguesa4',
            price: 300,
            img: './assets/hamburguesa4.png',
            stock: 1,
            category: '',
        },
    ]

    const getProducts = new Promise( (resolve, reject) => {
        //el resolve dice que es lo que 
        //debe hacer la promesa al ejecutarse
        setTimeout(() => {
            resolve(dataProducts)
        }, 2000)
    })

    useEffect(() => {
        //llamamos a la promesa con el then
        getProducts.then((data) => {
            console.log('respuesta de promesa', data)
            setProducts(data)
            //ocultar loader
        })
    }, [])

    console.log("state products: ", products)

    return(
        
        <Container className="product-container">
            <Grid container spacing={2}>
                {dataProducts.map(product => {
                    return(
                        <Grid item xs={4} key={product.id}>
                                <Item data={product}/>
                        </Grid>
                    )
                })}
            </Grid>
        </Container>);
}

export default ItemListContainer;
