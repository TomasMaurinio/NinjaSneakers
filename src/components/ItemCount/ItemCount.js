import './ItemCount.css';
import React,{useState } from 'react'
import Button from '@mui/material/Button';
import { click } from '@testing-library/user-event/dist/click';

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
            <Button disabled={clicks<=0} variant='outlined' className='botonMasMenos' onClick={less}>-</Button>
            <p>{clicks}</p>
            <Button variant='outlined' className='botonMasMenos' onClick={more}>+</Button>
        </div>
    );

}