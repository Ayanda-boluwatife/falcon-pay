import React from 'react'
import styled from 'styled-components';
function Help() {
  return (
   <Wrapper className='page-center'>
   <div className="one">
    <h2>How Can We Help You?</h2>
   </div>
   <div className="three">
   <div className="two">
    <h1>Contact Us</h1>
    <p>If you have any questions or need assistance with our platform, please don't hesitate to contact us. You can reach us through our customer support team, by email, phone or live chat.</p>
   </div>
   <div className="twoo">
        <div className='txt'>
            <div className='inp'>
                <input type="text" name="" id="" placeholder='your name'/>
                <input type="email" name="" id="" placeholder='your email'/>
            </div>
            <textarea name="" id="" cols="30" rows="10" placeholder='message'></textarea> 
        </div>
        <button id='Send'>Send Us Message</button>
    </div>
      
   </div>
   </Wrapper>
 )
}
 const Wrapper = styled.section`
    .one h2{
        text-align: center;
        margin-top: 50px;
    }
    .two{
        width: 100%;
    }
    .inp{
        display: flex;
        gap: 10px;
    }
    .txt{
        display: flex;
        flex-direction: column;
    }
    .two p{
        width: 70%;
        font-size: 20px;
        margin-top: 2rem;
    }
    .twooo{
        width: 100%;
        display: flex;
        gap: 20px;
        flex-direction: row;
    }
    #Send{
        color: #75C175;
        background-color: black;
    }
    .twoo input{
        background-color: #F7F7F7;
        padding: 20px;
        height  :5vh ;
        border: none;
        border-radius: 10px;
        outline-color: #75C175;
    } 
    .twoo textarea{
        display: flex;
        background-color:  #F7F7F7;
        align-items: center;
        justify-content: center;
        width: 100%;
        padding: 20px;
        border: none;
        border-radius: 10px;
        margin-top: 20px;
        outline-color: #75C175;
    }
    .twoo textarea::placeholder{
    /* padding: 20px; */
    }
    .two input:hover{
        border: none;
    }
    .three{
        display: flex;
        margin-top: 100px;
        flex-direction: row;
    }
    .three button{
        background-color: #F7F7F7;
        padding: 15px 50px;
        border-radius: 10px;
        border: none;
        box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
        margin-top: 50px;
    }
    .two button{
        background-color: #F7F7F7;
        font-size: 15px;
    }
    .two button:hover{
        background-color: black;
        color: #F7F7F7;
    }
    .row {
        display: flex;
        flex-direction: column;
    }
   .twoo input{
  background-color: #F7F7F7;
  /* padding: 1px 40px; */
  height  :5vh ;
  border: none;
  border-radius: 10px;
}

    @media screen and (max-width:768px) {
        .three{
        display: flex;
        margin-top: 30px;
        flex-direction: column;
    }
    .two p{
        width: 100%;
        font-size: 20px;
        margin-top: 2rem;
    }
    .twooo{
        width: 100%;
        display: flex;
        gap: 20px;
        margin-top: 50px;
        flex-direction: row;
    }
    .twooo{
        width: 100%;
        display: flex;
        gap: 20px;
        flex-direction: column;
    }
    .inp{
        flex-direction: column;
        padding-top: 20px;
    }
    }
 `

export default Help;