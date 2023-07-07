import React from 'react'
import { AiFillYoutube, AiOutlineTwitter, AiFillFacebook } from "react-icons/ai";
import crd1 from "../assets/crd1.jpg";
import crd2 from "../assets/crd2.jpg";
import crd3 from "../assets/crd3.jpg";
import crd4 from "../assets/crd4.jpg";

const Footer = () => {
  return (
    <div>
      <div className='ftr-two'>
        <div className='ftr-box'>
          <h3>ShopON</h3>
          <p className='ftr-two-p'>E-commerce is revolutionizing the way we all shop in India. Why do you want to hop from one store to another in search of any products when you can find it on the Internet in a single click? ShopON houses everything you can possibly imaginees. For those of you with erratic working hours, ShopON is your best bet. Shop in your PJs, at night or in the wee hours of the morning. This e-commerce never shuts down.</p>
        </div>
        <div className='ftr-box'>
          <h3>Follow Us</h3>
          <p className='ftr-two-p'>For new fashion and accessories update keep following us on...</p>
          <div className='ftr-follow-icons'>
            <AiFillFacebook className='icon-fb'/>
            <AiFillYoutube className='icon-yt'/>
            <AiOutlineTwitter className='icon-tw'/>
          </div>
        </div>
        <div className='ftr-box'>
          <h3>Contact Us</h3>
          <p className='ftr-two-p'>You can talk to us on-
          <br/>0123456789 / 9876543210<br/>
          mail us on-<br/>
          <a href='@'>shopon.support@gmail.com</a><br/>
          </p>
        </div>
      </div>
      <div className='shortcut'>
        <div className='stcut-box'>
          <h5>ABOUT</h5>
          <ul>
            <li>Contact us</li>
            <li>About us</li>
            <li>Careers</li>
            <li>ShopON stories</li>
            <li>Corporate Information</li>
          </ul>
        </div>
        <div className='stcut-box'>
          <h5>HELP</h5>
          <ul>
            <li>Payments</li>
            <li>Shipping</li>
            <li>Cancellation & Returns</li>
            <li>FAQ</li>
            <li>Report Infringement</li>
          </ul>
        </div>
        <div className='stcut-box'>
          <h5>CONSUMER POLICY</h5>
          <ul>
            <li>Return Policy</li>
            <li>Terms of Use</li>
            <li>Security</li>
            <li>Privacy</li>
            <li>Sitemap</li>
          </ul>
        </div>
        <div className='stcut-box'>
          <h5>Registered office Address</h5>
          <p>ShopON Internet Private Limited,<br/>
          123, XYZ Street,<br/>
          ABC Nagar, Bengaluru - 560001,<br/>
          Karnataka, India.</p>
        </div>
      </div>
      <div className='card-bar'>
        <p> &copy;  ShopON.com</p>
        <div className='card-icon'>
          <img src={crd1} alt=''/>
          <img src={crd2} alt=''/>
          <img src={crd3} alt=''/>
          <img src={crd4} alt=''/>
        </div>
      </div>
    </div>
  )
}

export default Footer