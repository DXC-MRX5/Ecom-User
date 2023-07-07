import React, { useEffect, useState } from 'react'
import { FaStar } from 'react-icons/fa';

import Slider from "react-slick";
import axios from 'axios';

const BestSeller = () => {
    const [data, setData] = useState([]);
    useEffect(()=>{
        axios.get("https://ecom-server-ykfk.onrender.com/api/products/bestSeller")
        .then((response)=>{
        setData(response.data);
        })
        .catch((error)=>console.log(error))
    }, [data])
const shortName=(nameData)=>{
    const shortenName = nameData.split(" ", 4);
    return shortenName;
}
const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 3,
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
                        <img src={item.poster} alt=''className='bst-card-img'/>
                        <h4>{shortName(item.name)}...</h4>
                        <div className='ratingBox'>
                            <p> <FaStar/>  {item.rating}</p>
                        </div>
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