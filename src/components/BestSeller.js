import React, { useEffect, useState } from 'react'
import { FaStar } from 'react-icons/fa';

import Slider from "react-slick";
import axios from 'axios';
import { Link } from 'react-router-dom';

const BestSeller = () => {
    const [data, setData] = useState([]);
    useEffect(()=>{
        axios.get("https://ecom-server-ykfk.onrender.com/api/products/bestSeller")
        .then((response)=>{
        setData(response.data);
        })
        .catch((error)=>console.log(error))
    }, [data])
    // const shortName=(nameData)=>{
    //     const shortenArray = nameData.split(" ", 3);
    //     let shortenName = "";
    //     for (let i=0; i<shortenArray.length; i++){
    //       shortenName += shortenArray[i];
    //       if (i !== shortenArray.length - 1) {
    //         shortenName += " ";
    //       }
    //     };
    //     return shortenName;
    //   }
const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 2,
    autoplay: false,
    speed: 600,
    autoplaySpeed: 6000,
    cssEase: "linear"
};
return (
<div className='bst-slr-cntnr'>
    <div className='bst-card-cntnr'>
    <h2>BEST SELLER</h2>
        <div className="carousel-best">
        <Slider {...settings}>
            {data && data.map((item, ind)=>{
                return(
                    <div className='bst-card' key={ind}>
                    <Link className='cardLink' to={`/product_details/${item._id}`}>
                    <img src={item.poster} alt=''className='bst-card-img'/>
                    <h4>{item.category}</h4>
                    <div className='ratingBox'>
                        <p> <FaStar/>  {item.rating}</p>
                    </div>
                    </Link>
                    </div>
                )
            })}
        </Slider>
        </div>
    </div>
</div>
)
}

export default BestSeller