import React, { useState, useEffect } from 'react'
import spkr from '../../../assets/spkr.jpg'
import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../../Navbar';

const Speakers = () => {
  const [data, setData]=useState([]);
  useEffect(()=>{
    axios.get("https://ecom-server-ykfk.onrender.com/api/products/blt_speakers")
    .then((response)=>{
    setData(response.data);
    })
    .catch((error)=>console.log(error))
  }, [data])
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
    const shortenDesc = descData.split(",", 2);
    return shortenDesc;
  }
  return (<>
    <Navbar/>
    <div className='product'>
      {/* <div className='pdct-leftPart'></div> */}
      <div className='pdct-rightPart'>
        <div className='pdct-poster'>
          <img src={spkr} alt='Laptop Poster'/>
        </div>
        <div className='filterBar'></div>
        <div className='pdct-cardContainer'>
          {data && data.map((item, index)=>{
            return(
              <div key={index}>
              <Link className='cardLink' to={`/product_details/${item._id}`}>
                <div className='pdct-card'>
                  <img src={item.poster} alt='product'/>
                  <h3>{shortName(item.name)}...</h3>
                  <div className='ratingBox'>
                  <p> <FaStar/>  {item.rating}</p>
                  </div>
                  <h4>{shortDes(item.description)}...</h4>
                  <h2>₹{item.price}</h2>
                </div>
              </Link>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  </>
  )
}

export default Speakers;