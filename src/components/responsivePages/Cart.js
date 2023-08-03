import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import SimpleBackdrop from './Backdrop';
import { AiTwotoneDelete } from 'react-icons/ai';
import { FiPlus, FiMinus } from 'react-icons/fi';

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
            let totalCount = 0
            response.data.forEach((element)=>{
                totalPrice+= (element.count * element.data.price)
                totalCount+= element.count
            })
            setPrice(totalPrice);
            setCount(totalCount);
        })
        .catch((err)=>console.log(err))
    },[token, deletion, setCount])
    // console.log(data);
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
            setDeletion(!deletion);
        })
        .catch((error)=>console.log(error));
    }
    const handleIncreament = (element)=>{
        axios.post("https://ecom-server-ykfk.onrender.com/api/cart/increase_data", {productId:element._id}, {
            headers:{
                "Authorization": 'Bearer '+ token
            }
        })
        .then((response)=>{
            alert(response.data.message);
            setDeletion(!deletion);
        })
        .catch((error)=>console.log(error));
    }
    const handleDecreament = (element)=>{
        if(element.count === 1){
            axios.post("https://ecom-server-ykfk.onrender.com/api/cart/delete_data", {productId:element.data._id}, {
                headers:{
                    "Authorization": 'Bearer '+ token
                }
            })
            .then((response)=>{
                alert(response.data.message);
                setDeletion(!deletion);
            })
            .catch((error)=>console.log(error));
        }
        axios.post("https://ecom-server-ykfk.onrender.com/api/cart/decrease_data", {productId:element.data._id}, {
            headers:{
                "Authorization": 'Bearer '+ token
            }
        })
        .then((response)=>{
            alert(response.data.message);
            setDeletion(!deletion);
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
                        <Link className='cartLink' to={`/product_details/${item.data._id}`}><img src={item.data.poster} alt='product'/></Link>
                        <div className='cartItemDescription'>
                            <h3>{shortName(item.data.name)}...</h3>
                            <h5>{shortDes(item.data.description)}...</h5>
                        </div>
                        <div className='quantityBox'>
                            <h4>₹ {item.data.price}</h4>
                            <div style={{display:'flex', alignItems:'center', gap:'0.5em'}}>
                                <button style={{border:'none', backgroundColor:'inherit', cursor:'pointer'}} title='Add'><FiPlus style={{width:'2em', height:'2em'}} onClick={()=>handleIncreament(item.data)}/></button>
                                <p>{item.count}</p>
                                <button style={{border:'none', backgroundColor:'inherit', cursor:'pointer'}} title='Reduce'><FiMinus style={{width:'2em', height:'2em'}} onClick={()=>handleDecreament(item)}/></button>
                                <AiTwotoneDelete className='cart-icon' onClick={()=>handleDelete(item.data)} title='Remove'/>
                            </div>
                        </div>
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