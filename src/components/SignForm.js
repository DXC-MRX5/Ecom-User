import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import { BsFillEyeFill, BsFillEyeSlashFill } from "react-icons/bs";
import { IoIosCloseCircle } from "react-icons/io";

const SignForm = () => {
    const navigate = useNavigate();
    // const initial = {name:"", mobile:"", password:""};
    const [registered, setRegistered] = useState(false);
    const [formData, setFormData] = useState({})
    const [formErrors, setFormErrors] = useState({});
    const [passCheck, setPassCheck] = useState();
    const [showPassword, setShowPassword] = useState(false);
    const handleTogglePassword = (e) => {
        e.preventDefault();
        setShowPassword(!showPassword);
        return setRegistered(false);
    };
    const handleChange=(e)=>{
        setFormData({...formData, [e.target.name]:e.target.value});
    }
    const handleSubmit = (e)=>{
        e.preventDefault();
        setFormErrors(validate(formData));
        if(formData.password !== passCheck){
            alert('Passwords did not match!');
            return setRegistered(false);
        }
        setRegistered(true);
    }
    useEffect(()=>{
        if(Object.keys(formErrors).length === 0 && registered){
            axios.post("https://ecom-server-ykfk.onrender.com/api/user/register", formData)
            .then((response)=>{
                alert(response.data.message);
                navigate('/login');
            })
            .catch((error)=>console.log(error.message))
        }
    })
    const validate = (data)=>{
        const errors = {};
        if(!data.name){
            errors.name = "Name is required!"
        }
        if(!data.mobile){
            errors.mobile = "Mobile No. is required!"
        }
        else if(data.mobile.length !== 10){
            errors.mobile = "Enter valid Mobile No."
        }
        if(!data.password){
            errors.password = "Password is required!"
        }
        else if(data.password.length < 6){
            errors.password = "Password must be more than 6 carachters!"
        }
        return errors;
    }
return (
    <div className='blur-cntnr'>
        <div className='signform'>
        <button className='crsBtn' onClick={()=>navigate('/')}><IoIosCloseCircle style={{width:'35px', height:'35px'}}/></button>
            <form className='formContainer'>
                <h3>SignUp</h3>
                <div className='formElement'>
                    <label htmlFor='name'>Name <span style={{color:"red"}}>*</span></label>
                    <input type='text' name='name' id='name' placeholder='Enter your name' onChange={handleChange}/>
                </div>
                <p style={{color:"red"}}>{formErrors.name}</p>
                <div className='formElement'>
                    <label htmlFor='mobile'>Mobile No. <span style={{color:"red"}}>*</span></label>
                    <input type="tel" name='mobile' id='mobile' placeholder='Enter your mobile no.' onChange={handleChange}/>
                </div>
                <p style={{color:"red"}}>{formErrors.mobile}</p>
                <div className='formElement'>
                    <label htmlFor='email'>Email Address </label>
                    <input type="email" name='email' id='email' placeholder='Enter your email.' onChange={handleChange}/>
                </div>
                {/* <p style={{color:"red"}}>{formErrors.email}</p> */}
                <div className='formElement'>
                    <label htmlFor='password'>Create Password <span style={{color:"red"}}>*</span></label>
                    <input type={showPassword ? 'text' : 'password'} value={formData.password} name='password' id='password' placeholder='Create your password' onChange={handleChange}/>
                    {showPassword ? <button className='eyeBtn' onClick={handleTogglePassword}><BsFillEyeFill style={{color:"rgb(9, 81, 139)"}}/></button> : <button className='eyeBtn' onClick={handleTogglePassword}><BsFillEyeSlashFill style={{color:"rgb(9, 81, 139)"}}/></button>}
                </div>
                <p style={{color:"red"}}>{formErrors.password}</p>
                <div className='formElement'>
                    <label htmlFor='conPassword'>Confirm Password <span style={{color:"red"}}>*</span></label>
                    <input type={showPassword ? 'text' : 'password'} value={passCheck} name='conPassword' id='conPassword' placeholder='Re-enter your password' onChange={(e)=>{setPassCheck(e.target.value)}}/>
                    {showPassword ? <button className='eyeBtn' onClick={handleTogglePassword}><BsFillEyeFill style={{color:"rgb(9, 81, 139)"}}/></button> : <button className='eyeBtn' onClick={handleTogglePassword}><BsFillEyeSlashFill style={{color:"rgb(9, 81, 139)"}}/></button>}
                </div>
                <button className='formBtn' onClick={handleSubmit}>Submit</button>
            </form>
            <p style={{color:"red"}}>'*' fields are mandatory.</p>
            <p style={{textAlign:'center', marginBottom:'15px'}}>Existing user <button className='logBtn' onClick={()=>navigate('/login')}>login</button> here.</p>
        </div>
    </div>
    )
}

export default SignForm