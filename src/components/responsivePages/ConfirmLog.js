import React from 'react'
import { Link } from 'react-router-dom';

const ConfirmLog = () => {
    const name = sessionStorage.getItem('userName');
  return (
    <div className='ConfirmLog'>
        <h2>You have successfully Looged In to  <span>Shop<span style={{fontFamily:" 'Anton', sans-serif"}}>ON</span></span> !</h2>
        <p>Welcome <span>{name ? name : null}</span> to this shopping experience. Enjoy your shopping.</p>
        <Link to='/' style={{textDecoration:'none', color:'blue', fontFamily:'sans-serif', fontSize:'1em'}}>Start shopping</Link>
    </div>
  )
}

export default ConfirmLog