import React from 'react';
import Item from '../Item/Item';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import './ItemListContainer.css';

const ItemListContainer = ()=> {

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

    return <Container className="product-container">
    <Grid container spacing={2}>
        {dataProducts.map(product => {
            return(
                <Grid item xs={4} key={product.id}>
                        <Item data={product}/>
                </Grid>
            )
        })}
    </Grid>
    </Container>;
}

export default ItemListContainer;
