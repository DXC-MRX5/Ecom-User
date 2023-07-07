import React from 'react'
import { Link } from 'react-router-dom';
import Checkmark from '../CheckAnimation';

const ConfirmOrder = () => {
    const name = sessionStorage.getItem('userName');
  return (
    <div className='ConfirmLog'>
        <Checkmark/>
        <p>Hurrah !<span>{name ? name : null}</span> Your order placed Successfully. It will be delivered shortly.</p>
        <Link to='/' style={{textDecoration:'none', color:'blue', fontFamily:'sans-serif'}}>Shop More</Link>
    </div>
  )
}

export default ConfirmOrder