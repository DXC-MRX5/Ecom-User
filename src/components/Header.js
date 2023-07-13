import React, { useState } from 'react'
import {FiUser} from 'react-icons/fi'
import{ MdOutlineShoppingCart } from 'react-icons/md'
import { BiSearchAlt, BiLogOutCircle } from 'react-icons/bi'
import { Link, useNavigate } from 'react-router-dom'
import logo from '../assets/logo.jpg';


const Header = ({passCount}) => {
  const navigate = useNavigate();
  const isLogged = sessionStorage.getItem('receivedToken')
  const [logout, setLogout] = useState(false);
  const [searched, setSearched] = useState({});
  const handleLogout = ()=>{
    sessionStorage.clear();
    alert('Logged Out Successfully !')
    setLogout(false);
    navigate('/');
  }
  const handleProfile = ()=>{
    setLogout(!logout)
    navigate('/confirmlog')
  }
  const handleHistory = ()=>{
    setLogout(!logout)
    navigate('/history')
  }
  const handleCart = ()=>{
    navigate('/cart');
  }
  const handleChange = (e)=>{
    setSearched({searched:e.target.value});
  }
  const handleSeach = ()=>{
    navigate('/search', {state:searched})
  }
  return (<>
    <div className='topBar'>
      <div className='topLeft'>
        <div style={{display:'flex', alignItems:'center'}}>
        <Link to='/'><img src={logo} alt='logo' style={{width:'30px'}}/></Link>
        <p>Shop<span>ON</span></p>
        </div>
        <div style={{width:'180px', display:'flex', alignItems:'center'}}>
          <input type='text' id='search' placeholder='Search...' onChange={handleChange}/>
          <button className='inside-icon' onClick={handleSeach}><BiSearchAlt/></button>
        </div>
      </div>
      <div className='topRight'>
        {isLogged ? 
        <>
          <button onClick={()=>setLogout(!logout)}><FiUser className='topBar-icon'/>My Profile</button>
          <button onClick={handleCart}><MdOutlineShoppingCart className='topBar-icon'/>My cart<span style={{color:'red'}}>{passCount}</span></button>
        </>
          :
        <>
          <button onClick={()=>navigate('/signup')}><FiUser className='topBar-icon'/>SignUp/Login</button>
          <button onClick={()=>navigate('/login')}><MdOutlineShoppingCart className='topBar-icon'/>My cart</button>
        </>}
      </div>
    </div>
    {logout ? <div className='logDrop'>
      <button onClick={handleLogout}><BiLogOutCircle/>LogOut</button>
      <button onClick={handleProfile}><FiUser/>MyProfile</button>
      <button onClick={handleHistory}>My Orders</button>
    </div> : null}
  </>
  )
}

export default Header