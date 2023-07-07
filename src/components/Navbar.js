import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FaAngleDown, FaAngleUp } from 'react-icons/fa'


const Navbar = () => {
    const navigate = useNavigate();
    const [dropF, setDropF] = useState(false);
    const [dropFM, setDropFM] = useState(false);
    const [dropFW, setDropFW] = useState(false);
    const [dropE, setDropE] = useState(false);
    const [dropA, setDropA] = useState(false);
    const [dropS, setDropS] = useState(false);
    const handleDropFashion = ()=>{
      setDropF(true);
      setDropE(false);
      setDropA(false);
      setDropS(false);
    }
    const handleDropStore = ()=>{
      setDropS(true);
      setDropF(false);
      setDropE(false);
      setDropA(false);
    }
    const handleDropElectns = ()=>{
      setDropE(true);
      setDropF(false);
      setDropA(false);
      setDropS(false);
    }
    const handleDropAplns = ()=>{
      setDropA(true);
      setDropE(false);
      setDropF(false);
      setDropS(false);
    }
  
  return (
    <div className='navBar'>
    <div className='dropdownBox'><button className='nv-btn' onClick={()=>navigate('/')}>HOME</button></div>
    {dropS ? <div className='dropdownBox drp'>
      <button className='nv-btn' onClick={()=>setDropS(false)}>STORE<FaAngleUp/></button>
      <div className='part'>
        <div className='dropdown2'>
          <h4>ELECTRONICS</h4>
          <button className='nv-btn' onClick={()=>navigate('/laptops')}>Laptops</button>
          <button className='nv-btn' onClick={()=>navigate('/mobiles')}>Mobiles</button>
          <button className='nv-btn' onClick={()=>navigate('/earphones')}>Earphones</button>
          <button className='nv-btn' onClick={()=>navigate('/desktops')}>Desktop</button>
          <button className='nv-btn' onClick={()=>navigate('/blt_speakers')}>Bluetooth Speakers</button>
          <button className='nv-btn' onClick={()=>navigate('/cables')}>Adapters & Cables</button>
          <button className='nv-btn' onClick={()=>navigate('/cameras')}>Cameras</button>
        </div>
        <div className='vl'></div>
        <div className='dropdown2'>
          <h4>HOME APPLIENCES</h4>
          <button className='nv-btn' onClick={()=>navigate('/furnitures')}>Furnitures</button>
          <button className='nv-btn' onClick={()=>navigate('/decorations')}>Decorations</button>
          <button className='nv-btn' onClick={()=>navigate('/kitchen')}>Kitchen Accessories</button>
          <button className='nv-btn' onClick={()=>navigate('/entertainment')}>Entertainment Accessories</button>
          <button className='nv-btn' onClick={()=>navigate('/ac_fridge_wm')}>Ac, Fridge & Washing Machines</button>
        </div>
        <div className='vl'></div>
        <div className='dropdown2'>
          <h4>MEN's FASHION</h4>
          <button className='nv-btn' onClick={()=>navigate('/mtop')}>Top Wear</button>
          <button className='nv-btn' onClick={()=>navigate('/mbtm')}>Bottom Wear</button>
          <button className='nv-btn' onClick={()=>navigate('/mfoot')}>Shoes</button>
          <button className='nv-btn' onClick={()=>navigate('/methnic')}>Eathnic</button>
          <button className='nv-btn' onClick={()=>navigate('/mwinter')}>Winter Wear</button>
        </div>
        <div className='vl'></div>
        <div className='dropdown2'>
          <h4>WOMEN's FASHION</h4>
          <button className='nv-btn' onClick={()=>navigate('/wtop')}>Sarees</button>
          <button className='nv-btn' onClick={()=>navigate('/wbtm')}>Trousers & Jeans</button>
          <button className='nv-btn' onClick={()=>navigate('/wfoot')}>Foot Wear</button>
          <button className='nv-btn' onClick={()=>navigate('/wethnic')}>Eathnic Wear</button>
          <button className='nv-btn' onClick={()=>navigate('/wwinter')}>Winter Wear</button>
        </div>
      </div>
    </div>
      :
    <div className='dropdownBox'>
      <button className='nv-btn' onMouseOver={handleDropStore}>STORE<FaAngleDown/></button>
    </div>}
    <div className='dropdownBox'><button className='nv-btn' onClick={()=>navigate('/mobiles')}>MOBILES</button></div>
    {dropE ? <div className='dropdownBox drp'>
      <button className='nv-btn' onClick={()=>setDropE(false)}>ELECTRONICS<FaAngleUp/></button>
      <button className='nv-btn'>All</button>
      <button className='nv-btn' onClick={()=>navigate('/laptops')}>Laptops</button>
      <button className='nv-btn' onClick={()=>navigate('/desktops')}>Desktop Accessories</button>
      <button className='nv-btn' onClick={()=>navigate('/mbl_accessories')}>Mobile Accessories</button>
      <button className='nv-btn' onClick={()=>navigate('/aud_accessories')}>Audio Accessories</button>
      <button className='nv-btn' onClick={()=>navigate('/daily_aplncs')}>Daily life Accessories</button>
    </div>
      :
    <div className='dropdownBox'>
      <button className='nv-btn' onMouseOver={handleDropElectns}>ELECTRONICS<FaAngleDown/></button>
    </div>}
    {dropF ? <div className='dropdownBox drp'>
    <button className='nv-btn' onClick={()=>setDropF(false)}>FASHION<FaAngleUp/></button>
    <button className='nv-btn' onClick={()=>navigate('/fsn_accessories')}>Fashion Accessories</button>
    <div className='part'>
      {dropFM ? 
      <div className='dropdown2 drp'>
        <button className='nv-btn' onClick={()=>setDropFM(false)}>Men's Fashion<FaAngleUp/></button>
        <button className='nv-btn' onClick={()=>navigate('/fashion_men')}>All</button>
        <button className='nv-btn' onClick={()=>navigate('/mtop')}>Men's Top Wear</button>
        <button className='nv-btn' onClick={()=>navigate('/mbtm')}>Men's Bottom Wear</button>
        <button className='nv-btn' onClick={()=>navigate('/methnic')}>Men's Eathnic</button>
      </div>
        :
      <div className='dropdown2'>
        <button className='nv-btn' onMouseOver={()=>setDropFM(true)}>Men's Fashion<FaAngleDown/></button>
      </div>}
      <div className='vl'></div>
      {dropFW ? 
      <div className='dropdown2 drp'>
        <button className='nv-btn' onClick={()=>setDropFW(false)}>Women's Fashion<FaAngleUp/></button>
        <button className='nv-btn' onClick={()=>navigate('/fashion_women')}>All</button>
        <button className='nv-btn' onClick={()=>navigate('/wtop')}>Women's Top Wear</button>
        <button className='nv-btn' onClick={()=>navigate('/wbtm')}>Women's Bottom Wear</button>
        <button className='nv-btn' onClick={()=>navigate('/wethnic')}>Women's Eathnic</button>
      </div>
        :
      <div className='dropdown2'>
        <button className='nv-btn' onMouseOver={()=>setDropFW(true)}>Women's Fashion<FaAngleDown/></button>
      </div>}
    </div>
    </div>
    :
    <div className='dropdownBox'>
      <button className='nv-btn' onMouseOver={handleDropFashion}>FASHION<FaAngleDown/></button>
    </div>}
    {dropA ? <div className='dropdownBox drp'>
      <button className='nv-btn' onClick={()=>setDropA(false)}>APPLIENCES<FaAngleUp/></button>
      <button className='nv-btn' onClick={()=>navigate('/home_aplncs')}>Home Appliences</button>
      <button className='nv-btn' onClick={()=>navigate('/decorations')}>Home Decor</button>
      <button className='nv-btn' onClick={()=>navigate('/furnitures')}>Furnitures</button>
      <button className='nv-btn' onClick={()=>navigate('/kitchen')}>Kitchen Accessories</button>
      <button className='nv-btn' onClick={()=>navigate('/entertainment')}>Entertainment Accessories</button>
    </div>
      :
    <div className='dropdownBox'>
      <button className='nv-btn' onMouseOver={handleDropAplns}>APPLIENCES<FaAngleDown/></button>
    </div>}
</div>
  )
}

export default Navbar