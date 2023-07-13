import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import SimpleBackdrop from './Backdrop';
import { AiTwotoneDelete } from 'react-icons/ai';

const Cart = ({setCount}) => {
    const navigate = useNavigate();
    const [data, setData] = useState();
    const [deletion, setDeletion] = useState(false);
    let [price, setPrice] = useState(0);
    const token = sessionStorage.getItem("receivedToken");
    const userName = sessionStorage.getItem("userName");
    useEffect(()=>{
        axios.get("https://ecom-server-ykfk.onrender.com/api/cart/cart_data", {
            headers:{
                "Authorization": 'Bearer '+ token
            }
        })
        .then((response)=>{
            setData(response.data);
            let totalPrice = 0
            response.data.forEach((element)=>{
                totalPrice+=element.price
            })
            setPrice(totalPrice);
            setCount(response.data.length);
        })
        .catch((err)=>console.log(err))
    },[token, deletion, setCount])
    const handleCheck = ()=>{
        if(price === 0){
            alert("There are no products in your Cart!");
            return;
        }
        axios.post("https://ecom-server-ykfk.onrender.com/api/orders/add_history", 'nodata', {
            headers:{
                "Authorization": 'Bearer '+ token
            }
        })
        .then((response)=>{
            alert(response.data.message);
            navigate('/confirmorder');
        })
        .catch((error)=>console.log(error));
    }
    const handleDelete = (element)=>{
        axios.post("https://ecom-server-ykfk.onrender.com/api/cart/delete_data", {productId:element._id}, {
            headers:{
                "Authorization": 'Bearer '+ token
            }
        })
        .then((response)=>{
            alert(response.data.message);
            setPrice(prevPrice=> prevPrice-element.price);
            navigate('/')
            setDeletion(!deletion);
            return navigate('/cart');
        })
        .catch((error)=>console.log(error));
    }
    const shortName=(nameData)=>{
        const shortenArray = nameData.split(" ", 4);
        let shortenName = "";
        for (let i=0; i<shortenArray.length; i++){
            shortenName += shortenArray[i];
            if (i !== shortenArray.length - 1) {
                shortenName += " ";
            }
        };
        return shortenName;
        }
    const shortDes=(descData)=>{
        const shortenDesc = descData.split(",", 1);
        return shortenDesc;
    }
return (
    <div className='cart'>
        <Link to='/' className='cartBackbtn'>Shop more</Link>
        <div className='itemCntnr'>
        <h2>   {userName}'s Cart   </h2>
            {data ? 
                data.map((item, index)=>{
                return(<>
                    <hr style={{backgroundColor:'#212629', width:'90%', border:'none', height:'2px'}}/>
                    <div key={index} className='cartItem'>
                        <Link className='cartLink' to={`/product_details/${item._id}`}><img src={item.poster} alt='product'/></Link>
                        <div style={{width:'40%'}}>
                            <h3>{shortName(item.name)}...</h3>
                            <h5>{shortDes(item.description)}...</h5>
                        </div>
                        <h4>₹ {item.price}</h4>
                        <AiTwotoneDelete className='cart-icon' onClick={()=>handleDelete(item)}/>
                    </div>
                </>
                )
            })
                :
            <SimpleBackdrop/>}
        </div>
        <h2 className='pricedetail'>Total Payable amount = ₹ {price}</h2>
        <button className='checkout' onClick={handleCheck}>CHECKOUT</button>
    </div>
  )
}

export default Cart