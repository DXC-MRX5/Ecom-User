import React from 'react'
import { FaShippingFast } from "react-icons/fa";
import { RiRefund2Line } from "react-icons/ri";
import { MdOutlineSupportAgent } from "react-icons/md";

const Features = () => {
  return (
    <div className='ftr-one'>
    <div className='ftr-box'>
      <FaShippingFast className='ftr-icon'/>
      <h4>FAST SHIPPING</h4>
      <p>Our maiden shipping experience marks a significant milestone for us, representing the culmination of hard work, innovation, and a commitment to excellence. From the moment you place an order with us, rest assured that our team goes above and beyond to ensure your package arrives promptly, intact, and in impeccable condition.</p>
    </div>
    <div className='ftr-box'>
      <RiRefund2Line className='ftr-icon'/>
      <h4>EASY REFUND</h4>
      <p>At our company, we believe that your peace of mind is paramount. If you're not completely satisfied with your purchase, simply reach out to our dedicated customer support team within 10 days of receiving your order. They will guide you through the straightforward return process, ensuring that you're well taken care of every step of the way.</p>
    </div>
    <div className='ftr-box'>
      <MdOutlineSupportAgent className='ftr-icon'/>
      <h4>SUPPORT 24/7</h4>
      <p>Whether you have a question, need assistance, or want to share feedback, our dedicated customer support team is here for you around the clock. We understand that issues can arise at any time, and we want to ensure that you have access to prompt and reliable assistance whenever you require it.</p>
    </div>
  </div>
  )
}

export default Features