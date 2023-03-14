import React from "react";
import styled from "styled-components";

function Footer(){
return(
    <Wrapper className="">
        <div className="one">
        <div className="page-center">
          <div >
            <div className="all-first">
                <div className="first">
                    <ul>
                        <li>
                            <img src="/bolu-images/FalconPay.png" alt="" />
                        </li>
                        <p>Streamline your financials - The ultimate platform for freelancers and salaried workers. Effortlessly manage your international payments. </p>
                    </ul>
                </div>
                <div className="first1">
                    <ul>
                    <h3>products</h3>
                    <li>Savings</li>
                    <li>Send</li>
                    <li>Receive</li>
                    <li>Domain Account</li>
                    </ul>
                </div>
                <div className="first2">
                    <ul>
                    <h3>About</h3>
                    <li>About Us</li>
                    <li>Contact</li>
                    <li>Team</li>
                    <li>Partner</li>
                    </ul>
                </div>
                <div className="first3">
                    <ul>
                    <h3>Resources</h3>
                    <li>Document</li>
                    <li>Blog</li>
                    <li>Career</li>
                    <li>FAQ</li>
                    </ul>
                </div>
                </div>
            <div className="foot">
            <p>terms & conditions          |          privacy & policy</p>
        </div>
            </div>
        

        <div className="border">
        <div className="bord"><h3>2023 copyright by FalconPay | All rights reserved.</h3></div>
        <div className="bords">
        <img src={process.env.PUBLIC_URL + '/Mubarak img/instagram.png'} alt="main"  />
        <img src={process.env.PUBLIC_URL + '/Mubarak img/twitter.png'} alt="main"  />
        <img src={process.env.PUBLIC_URL + '/Mubarak img/linkedin.png'} alt="main"  />
        <img src={process.env.PUBLIC_URL + '/Mubarak img/facebook.png'} alt="main"  />
            
        </div>
        </div>

        </div>
     </div>

    </Wrapper>
)


}
const Wrapper = styled.article `
    

    .one{
        background-color: black;
        min-height: 70vh;
        margin-top: 100px;
        color: white;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .all-first{
        display: flex;
        align-items: center;
        flex-direction: row;
      
    }
    .all-first li{
        line-height: 2.7rem;
        cursor: pointer;
    }
    .all-first li:hover{
        color: #7ED07E;
    }
    .all-first p{
        margin-top: 1rem;
        line-height: 2.2rem;
    }
    .all-first h3{
        color: #90EE90;
    }
    .foot{
    border-bottom: 3px solid #7ED07E;
    color: #90EE90;
     width: 100%;
     cursor: pointer;
     font-size: 20px;
     display: flex;
     justify-content: center;
     flex-direction: row;
     height: 50px;
     padding-left: 80px;
    }
    .first button{
        background-color: #90EE90;
        padding: 10px 40px;
        font-size: 20px;
        cursor: pointer;
    }
    .first{
        width: 40%;
    }
    .first p{
        width: 70%;
    }
    
    .first1{
        width: 20%;
    }
    .first2{
        width: 20%;
    }
    .first3{
        width: 20%;
    }
    .border{
        margin-top: 50px;
        display: flex;
        flex-direction: row;
        align-items: flex-;
        justify-content: space-between;
    }
    .bord{
        /* margin-top: 50px; */
    }
    .bords{
        /* margin-top: 50px; */
        display: flex;
        flex-direction: row;
        gap: 20px;
    }
    overflow: hidden;
    @media screen and (max-width:768px) {
        .all-first{
        display: flex;
        align-items: center;
        flex-direction: column;
      
    }        
    .first{
        width: 100%;
    }
    .first p{
        width: 100%;
    }
    
    .first1{
        width: 100%;
    }
    .first2{
        width: 100%;
    }
    .first3{
        width: 100%;
    }
    .all-first button{
        margin-top: 30px;
    }
    .bords{
        margin-top: 50px;
        display: flex;
        flex-direction: row;
        gap: 10px;
        width: 100%;
    }
    .border{
        margin-top: 50px;
        display: flex;
        flex-direction: column;
        align-items: flex-;
        justify-content: space-between;
    }
    } 
`

export default Footer;