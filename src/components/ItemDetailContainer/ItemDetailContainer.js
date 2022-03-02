import React, { useEffect, useState, useContext } from 'react'
import { useParams } from 'react-router-dom';
import ItemDetail from '../ItemDetail/ItemDetail';
//Firebase
import { doc, getDoc } from 'firebase/firestore'
import db from '../../firebase'

export default function ItemDetailContainer() {

    const [product, setProduct] = useState([])
    const { id } = useParams()
    const [loaded, setLoaded] = useState(true)

    async function productos(db)  {
        const docRef = doc(db, "products", id);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            let producto = docSnap.data();
            producto.id = docSnap.id
            setProduct(producto) 
        } else {
            console.log("No such document!");
        }
    }

    useEffect(() => {
        productos(db)
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
            {<ItemDetail data={product} />}
            </div>}
        </>
    )
}