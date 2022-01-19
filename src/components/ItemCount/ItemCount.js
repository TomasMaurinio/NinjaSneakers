import './ItemCount.css';
import React,{useState, useEffect} from 'react'
import Button from '@mui/material/Button';

export default function ItemCount() {
    const [clicks, setClicks] = useState(0);

    const more = () => {
        setClicks(clicks + 1);
    };

    const less = () => {
        setClicks(clicks - 1);
    }

    return(
        <div id="contador" className='item-count__buttons' >
            <Button variant='outlined' className='botonMasMenos' onClick={less}>-</Button>
            <p>{clicks}</p>
            <Button variant='outlined' className='botonMasMenos' onClick={more}>+</Button>
        </div>
    );

}