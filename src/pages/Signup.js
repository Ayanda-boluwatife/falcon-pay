import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { BiHide} from "react-icons/bi";
import {AiOutlineEye, AiOutlineGoogle} from 'react-icons/ai'
import {BsApple, BsFacebook} from 'react-icons/bs'

    // const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,23$}/;
    // const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

const Signup = () => {
// ================ VALIDATION GOES HERE ========================
const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const [errors, setErrors] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (validationErrors.length === 0) {
      console.log('Valid form submitted');
      // do something with the form data
    } else {
      console.log('Invalid form submitted');
      setErrors(validationErrors);
    }
  };

  const validateForm = () => {
    const errors = [];
    if (!email) {
      errors.push('Email is required');
    } else if (!isValidEmail(email)) {
      errors.push('Email is invalid');
    }
    if (!password) {
      errors.push('Password is required');
    } else if (password.length < 8) {
      errors.push('Password must be at least 8 characters long');
    }
    if (password !== passwordConfirmation) {
      errors.push('Passwords do not match');
    }
    return errors;
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
// ============== VALIDATION ENDS HERE ===========================

// ============= TOGGLE PASSWORD GOES HERE =========================

    const [showPassword, setShowPassword] = useState(false);

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };
 // ============= TOGGLE PASSWORD ENDS HERE =========================
  return (
    <Wrapper className='page-center'>
        <div className='register-image'>
            <img src='/bolu-images/login-image.png' alt='Login in' />
        </div>

        <div className='register-user-details'>
            <div className='back-to-home'>
                <Link to={"/"}>
                    <img src='/bolu-images/falcon_pay_logo.png' alt='' />
                </Link>
            </div>
            <h1>Sign Up</h1>
           <form onSubmit={handleSubmit}>
                <div className='register-mail-input'>
                    <input type='text' placeholder='Full Name' value={email} onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div className='register-mail-input'>
                    <input type='text' placeholder='Enter your mail' />
                </div>
                <div className='register-password-input grp-show'>
                    <input type={showPassword ? "text" : "password"} onShow={handlePasswordChange} value={password} placeholder='Your Password' onChange={(e) => setPassword(e.target.value)} />
                    {
                        showPassword? <span onClick={toggleShowPassword}><AiOutlineEye /></span>  : <span onClick={toggleShowPassword}><BiHide /></span>
                    }
                </div>
                <div className='register-password-input'>
                    <input type={showPassword ? "text" : "password"} onshow={handlePasswordChange}  placeholder='Confirm Password' value={passwordConfirmation} onChange={(e) => setPasswordConfirmation(e.target.value)}/>
                        {errors.length > 0 && (
                            <ul className="error-list">
                            {errors.map((error, index) => (
                                <li key={index}>{error}</li>
                            ))}
                            </ul>
                        )}
                </div>
                
           </form>
            <div className='terms-condition'>
                <p>By Signing Up Means You Have Agreed With Our <Link>Terms</Link> And <Link>Conditions</Link></p>
            </div>
            <div className='register-btn'>
                <button>Continue</button>
            </div>
            <p className='center'>Or Sign up with</p>
            <div className='register-with'>
                <a href='.'>
                    <div className='register-with-facebook'>
                    <BsFacebook />
                </div>
                </a>
                <a href='.'>
                    <div className='register-with-google'>
                        <AiOutlineGoogle />
                    </div>
                </a>
            </div>
            <div className='link-to-signin'>
                <p>Already Have An Account ? <Link to={"/signin"}>Sign In</Link></p>
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

.register-image img{
    height: 500px;
}
.register-user-details{
    display: flex;
    flex-direction: column;
    gap: 30px;
}
.register-user-details h1{
    text-align: center;
}
.grp-show{
    display:flex;
    align-items:center;
    justify-content:center;
    width:100%;
    gap:10px;
}
.register-mail-input input, .register-password-input input{
    height: 6vh;
    width: 100%;
    padding: 20px;
    margin-top:10px;
    border: none;
    background-color: #F7F7F7;
    outline-color: #90EE90;
    border-radius: 10px;
}
.register-password-input svg{
    cursor: pointer;
    position:absolute;
    z-index:100;
}
.register-btn button{
    height: 6vh;
    width:400px ;
    border: none;
    background-color: #90EE90;
    border-radius: 10px;
    cursor: pointer;
}
.register-with{
    display: flex;
    justify-content: center;
    gap:20px;
    align-items: center;
}
.register-with-apple, .register-with-facebook, .register-with-google{
    background-color: #90EE90;
    padding: 8px 10px;
    border-radius: 20px;
    cursor: pointer;
}
.link-to-signin a, .terms-condition a{
    color: #90EE90;
}
a{
    color: black;
}
.link-to-signin{
    font-weight: 800;
    text-align: center;
}
.center{
    text-align: center;
}
.terms-condition{
    font-size: 12px;
    display: flex;
}
.back-to-home{
    display: flex;
    justify-content: center;
    align-items: center;
}
@media screen and (max-width:900px){
    .register-image{
        display: none;
    }
    .register-user-details{
        width: 100%;
    }
    .register-mail-input input , .register-password-input input, .register-btn button{
        width: 100%;
    }
    .link-to-signin{
        font-size: 10px;
    }
    .register-password-input svg{
        top: 48.5%;
        right: 8%;
    }
}
`
export default Signup