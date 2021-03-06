//Hooks
import React, {useState} from 'react';
//Material UI
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
//Components
import './ContactModal.css'
//firebase
import db from '../../firebase';
import { collection, addDoc } from 'firebase/firestore';

export default function ContactModal({open, handleClose, products, total}) {

    const [formData, setFormData] = useState({
        nombre: '',
        telefono: '',
        mail: ''
    })
    const [orderId, setOrderId] = useState(null)
    let date = new Date();
    let dateArgentina = date.toLocaleDateString("es-ES");
    let horaArgentina = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({...formData, [name] : value})
    }

    const sendOrder = () => {
        let order = {}
        order.buyer = formData
        order.items = products
        order.total = total
        order.time = `El día ${dateArgentina} a las ${horaArgentina}`
        
        pushOrder(order)
        console.log(order)
        
    }

    const nameValidation =()=>{
        const validation =/^[a-z]+\s[a-z]+$/i
        const util = /nicolas/
        const result = validation.test(util)
    }
    nameValidation()

    const pushOrder = async(order) => {
        const orderFirebase = collection(db, 'ordenes')
        const orden = await addDoc(orderFirebase, order)
        setOrderId(orden.id)
    }


    return (
        <div className='modal'>
            <Dialog
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={open} 
                className="modal-contact-data"
            >
                {orderId != null ? <h2 className='iframe'>La orden se genero exitosamente. Gracias por su compra!<iframe className='money' src="https://giphy.com/embed/j3x5hjUoXIesM" width="220" height="104" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/gf-asks-shopping-j3x5hjUoXIesM">via GIPHY</a></p></h2> :
                    <>
                        <DialogTitle>Completa tus datos</DialogTitle>
                            <DialogContent>
                                <Box component="form" noValidate autoComplete="off" className="form-container" >
                                    <TextField label="Nombre" name="nombre" variant="outlined" value={formData.nombre} required onChange={handleChange}/>
                                    <TextField label="Telefono" name="telefono" variant="outlined" value={formData.telefono} required onChange={handleChange}/>
                                    <TextField label="Mail" name="mail" variant="outlined" value={formData.mail} required onChange={handleChange}/>
                                    <Button variant="outlined" onClick={sendOrder}>Finalizar Compra</Button>
                                </Box>
                        </DialogContent>
                    </>
                }
                
            </Dialog>
        </div>
    );
}