import React, {useState, useEffect, useContext} from 'react'
import './CartWidget.css'
import CartContext from '../../context/CartContext';
import ModalCart from '../ModalCart/ModalCart';
//externo fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faCartPlus } from '@fortawesome/free-solid-svg-icons'


const CartWidget = () => {
    const [showCart, setShowCart ] = useState(false)
    useEffect(() => {
        //console.log("products cartWidget" , products)
    })
    const {products} = useContext(CartContext)

    const openCart = () => {
        setShowCart(!showCart)
    }

    return(
        <div className="cart-container">
            <FontAwesomeIcon icon={faCartPlus} onClick={openCart} />
            {showCart && <ModalCart products={products}/>}
        </div>
    )
}

export default CartWidget