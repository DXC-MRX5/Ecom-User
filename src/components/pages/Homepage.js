import React, { useState, useEffect } from 'react'
import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Homepage = () => {
  const [data, setData]=useState([]);
  const [visible, setVisible] = useState(8)
  useEffect(()=>{
    axios.get("https://ecom-server-ykfk.onrender.com/api/products/home_page")
    .then((response)=>{
    setData(response.data);
    })
    .catch((error)=>console.log(error))
  }, [data])
  const showMoreItems = () => {
    setVisible(prevValue => prevValue + 3)
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
    const shortenDesc = descData.split(",", 2);
    return shortenDesc;
  }
  return (
    <>
    <div className='product'>
      <div className='home-pdct-rightPart'>
        <div className='filterBar'>
            <h2>Top rated products</h2>
        </div>
        <div className='pdct-cardContainer'>
          {data && data.slice(0, visible).map((item, index)=>{
            return(
              <div key={index} style={{position:'relative'}}>
              <Link className='cardLink' to={`/product_details/${item._id}`}>
                <div className='pdct-card'>
                  <img src={item.poster} alt='product'/>
                  <h3>{shortName(item.name)}...</h3>
                  <div className='ratingBox'>
                  <p> <FaStar/>  {item.rating}</p>
                  </div>
                  <h4>{shortDes(item.description)}...</h4>
                  <h2>₹{item.price}  <span>₹{Math.round(item.price*1.3)}</span></h2>
                </div>
              </Link>
              {(item.rating >= 4.9) && <div className='hotBox'>HotDeal</div>}
              </div>
            )
          })}
        </div>
        <button onClick={showMoreItems} className='seeMore-btn'>MORE PRODUCTS</button>
      </div>
    </div>
    </>
  )
}

export default Homepage