import React, { useEffect, useState } from 'react'
import { AiOutlineRollback } from 'react-icons/ai'
import { FaStar } from 'react-icons/fa';
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import SimpleBackdrop from './Backdrop'

const ProductDetails = () => {
  const navigate = useNavigate();
  const productId = useParams().product_id;
  const token = sessionStorage.getItem("receivedToken");
  const [productData, setProductData]=useState();
  useEffect(()=>{
    axios.get(`https://ecom-server-ykfk.onrender.com/api/products/details?id=${productId}`)
    .then((response)=>{
      setProductData(response.data);
    })
    .catch((error)=>console.log(error))
  },[productId])
  const handleAdd = ()=>{
    if(!token){
      alert('You need to Log in first!');
      navigate('/login');
      return;
    }
    axios.post("https://ecom-server-ykfk.onrender.com/api/cart/add_data", {productId:productId}, {
      headers:{
        "Authorization": 'Bearer '+ token
    }
    })
    .then((response)=>{
      alert(response.data.message);
    })
    .catch((error)=>console.log(error))
  }
  const handleBuy = ()=>{
    if(!token){
      alert('You need to Log in first!');
      navigate('/login');
      return;
    }
    axios.post("https://ecom-server-ykfk.onrender.com/api/cart/add_data", {productId:productId}, {
      headers:{
        "Authorization": 'Bearer '+ token
    }
    })
    .then((response)=>{
      alert(response.data.message);
      return navigate('/cart')
    })
    .catch((error)=>console.log(error))
  }
  return (
    <>
    <button className='detailBack' onClick={()=>navigate(-1)} style={{border:'none', backgroundColor:'inherit', position:'relative', top:'-35px', left:'10px'}}><AiOutlineRollback className='backDetail'/></button>
      <div className='detailCntnr'>
        {productData ?
        <div className='detailPage'>
          <img src={productData.poster} alt='Product poster'/>
          <div className='detailDesc'>
            <h1>{productData.name}</h1>
            <div className='ratingBox'>
              <p> <FaStar/>  {productData.rating}</p>
            </div>
            <h3>{productData.description}</h3>
            <h2>₹ {productData.price}</h2>
            <div className='detailBtnBox'>
              <button className='detailBtn' onClick={handleAdd}>Add to Cart</button>
              <button className='detailBtn' onClick={handleBuy}>Buy Now</button>
            </div>
          </div>
        </div> : 
        <SimpleBackdrop/>}
      </div>
    </>
  )
}

export default ProductDetails