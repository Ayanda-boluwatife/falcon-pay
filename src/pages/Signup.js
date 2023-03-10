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
    // const userRef = useRef();
    // const errRef = useRef();

    // const [user, setUser] = useState("");
    // const [validName, setValidName] = useState(false);
    // const [userFocus, setUserFocus] = useState(false);

    // const [pwd, setPwd] = useState("");
    // const [validPwd, setValidPwd] = useState(false);
    // const [pwdFocus, setPwdFocus] = useState(false);

    // const [errMessage, setErrMessage] = useState("");
    // const [success, setSuccess] = useState(false);

    // useEffect(()=>{
    //     userRef.current.focus();
    // },[])

    // useEffect(()=>{
    //     const result = USER_REGEX.test(user);
    //     console.log(result);
    //     console.log(user);
    //     setValidName(result);
    // },[user])

    // useEffect(()=>{
    //     const result = PWD_REGEX.test(pwd);
    //     console.log(result);
    //     console.log(pwd);
    //     setValidPwd(result);
    // },[pwd])

    // useEffect(()=>{
    //     setErrMessage("");
    // },[user, pwd])

// ============== VALIDATION ENDS HERE ===========================

// ============= TOGGLE PASSWORD GOES HERE =========================

    const [password, setPassword] = useState("");
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
            <div className='register-mail-input'>
                <input
                 type='text'
                 placeholder='Full Name'
                //  ref={userRef}
                //  autoComplete="off"
                //  onChange={(e)=> setUser(e.target.value)}
                //  required
                //  aria-invalid={validName ? 'false' : 'true'}
                //  aria-describedby= 'uidnote'
                //  onFocus={() => setUserFocus (true)}
                //  onBlur={() => setUserFocus (false)}
                />
            </div>
            <div className='register-mail-input'>
                <input type='text' placeholder='Enter your mail' />
            </div>
            <div className='register-password-input'>
                <input type={showPassword ? "text" : "password"} onChange={handlePasswordChange} value={password} placeholder='Your Password' />
                {
                    showPassword? <span onClick={toggleShowPassword}><BiHide /></span> : <span onClick={toggleShowPassword}><AiOutlineEye /></span>
                }
            </div>
            <div className='terms-condition'>
                <p>By Signing Up Means You Have Agreed With Our <Link>Terms</Link> And <Link>Conditions</Link></p>
            </div>
            <div className='register-btn'>
                <button>Continue</button>
            </div>
            <p className='center'>Sign up with</p>
            <div className='register-with'>
                <div className='register-with-apple'>
                    <BsApple />
                </div>
                <div className='register-with-facebook'>
                    <BsFacebook />
                </div>
                <div className='register-with-google'>
                    <AiOutlineGoogle />
                </div>
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
.register-mail-input input, .register-password-input input{
    height: 6vh;
    width: 100%;
    padding: 20px;
    border: none;
    background-color: #F7F7F7;
    outline-color: #90EE90;
    border-radius: 10px;
}
.register-password-input svg{
    position: absolute;
    right: 18%;
    top: 47.5%;
    cursor: pointer;
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