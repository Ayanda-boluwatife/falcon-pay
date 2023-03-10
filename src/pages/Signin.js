import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { BiHide} from "react-icons/bi";
import {AiOutlineEye} from 'react-icons/ai';
import {BsApple} from 'react-icons/bs';
import {BsFacebook} from 'react-icons/bs';
import {AiOutlineGoogle} from 'react-icons/ai';

const Signin = () => {
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };
  return (
    <Wrapper>
        <div className='login-image'>
            <img src='/bolu-images/login-image.png' alt='Login in' />
        </div>

        <div className='login-user-details'>
            <div>
                <Link to={"/"}>
                    <img src='/bolu-images/falcon_pay_logo.png' alt='' />
                </Link>
            </div>
            <h1>Log in</h1>
            <div className='mail-input form-field'>
                <input type='text' placeholder='Enter your mail' />
            </div>
            <div className='password-input form-field'>
                <input type={showPassword ? "text" : "password"} onChange={handlePasswordChange} value={password} placeholder='Your Password' />
                {
                    showPassword? <span onClick={toggleShowPassword}><BiHide /></span> : <span onClick={toggleShowPassword}><AiOutlineEye /></span>
                }
            </div>
            <div className='login-btn'>
                <button>Continue</button>
            </div>
            <p>Log in with</p>
            <div className='login-with'>
                <div className='login-with-apple'>
                    <BsApple />
                </div>
                <div className='login-with-facebook'>
                    <BsFacebook />
                </div>
                <div className='login-with-google'>
                    <AiOutlineGoogle />
                </div>
            </div>
            <div className='link-to-signup'>
                <p>Don't have an account? <Link to={"/signup"}>Sign Up</Link></p>
            </div>
        </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
display: flex;
justify-content: center;
align-items: center;
height: 100vh;
padding:30px;
.form-field {
    width: 100%;
}
.login-image img{
    height: 500px;
}
input{
    width: 100%;
    display: block;
    outline: none;
}
.login-user-details{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 30px;
}
.mail-input input{
    height: 6vh;
    width:400px ;
    padding: 20px;
    border: none;
    background-color: #F7F7F7;
    border-radius: 10px;
}
.password-input {
    display: flex;
    justify-content: space-between;
    padding: 10px 10px;
    background-color: #F7F7F7;
    border-radius: 10px;
    width: 100%;
}
.password-input input{
    border: none; 
    background-color: #F7F7F7;

}

.login-btn button{
    height: 6vh;
    width:400px ;
    border: none;
    background-color: #90EE90;
    border-radius: 10px;
    cursor: pointer;
}
.login-with{
    display: flex;
    justify-content: center;
    gap:20px;
    align-items: center;
}
.login-with-apple, .login-with-facebook, .login-with-google{
    background-color: #90EE90;
    padding: 8px 10px;
    border-radius: 20px;
    cursor: pointer;
}
.link-to-signup a{
    color: #90EE90;
}
.link-to-signup p{
    font-weight: 800;
}
@media screen and (max-width:900px){
    .login-image{
        display: none;
    }
    
    .password-input svg{
        top: 42%;
    }
}
`

export default Signin;