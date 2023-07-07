import axios from 'axios';
import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { IoIosCloseCircle } from "react-icons/io";
import { BsFillEyeFill, BsFillEyeSlashFill } from "react-icons/bs";


const Logform = () => {
    const navigate = useNavigate();
    const [logData, setLogData] = useState({});
    const [showPassword, setShowPassword] = useState(false);
    const handleTogglePassword = (e) => {
        e.preventDefault();
        setShowPassword(!showPassword);
    };
    const handleChange=(e)=>{
        setLogData({...logData, [e.target.name]:e.target.value});
    }
    const handleLog=(e)=>{
        e.preventDefault();
        if(!logData.mobile || !logData.password){
            alert("All fields are required !");
            return;
        }
        else{
            axios.post("https://ecom-server-ykfk.onrender.com/api/user/login", logData)
            .then((response)=>{
                alert(response.data.message);
                const token = response.data.Token;
                if(token){
                    sessionStorage.setItem('receivedToken', token);
                    sessionStorage.setItem('userName', response.data.userName);
                    navigate('/confirmlog');
                }
            })
        }
    }
return (
    <div className='blur-cntnr'>
        <div className='logForm'>
        <button className='crsBtn' onClick={()=>navigate('/')}><IoIosCloseCircle style={{width:'35px', height:'35px'}}/></button>
        <form className='logFormContainer'>
            <h3>LogIn</h3>
            <div className='formElement'>
                <label htmlFor='mobile'>Mobile No. <span style={{color:"red"}}>*</span></label>
                <input type="number" name='mobile' id='mobile' placeholder='enter registered mobile number' onChange={handleChange}/>
            </div>
            <div className='formElement'>
                <label htmlFor='password'>Password <span style={{color:"red"}}>*</span></label>
                {/* <input type='password' name='password' id='password' placeholder='enter password' onChange={handleChange}/> */}
                <input type={showPassword ? 'text' : 'password'} value={logData.password} name='password' id='password' placeholder='Enter your password' onChange={handleChange}/>
                {showPassword ? <button className='eyeBtn' onClick={handleTogglePassword}><BsFillEyeFill style={{color:"rgb(9, 81, 139)"}}/></button> : <button className='eyeBtn' onClick={handleTogglePassword}><BsFillEyeSlashFill style={{color:"rgb(9, 81, 139)"}}/></button>}
            </div>
            <button className='formBtn' onClick={handleLog}>LogIn</button>
        </form>
        <p style={{color:"red"}}>'*' fields are mandatory.</p>
    </div>
    </div>
)
}

export default Logform