import React from "react";
import styled from "styled-components";
// import save from '../pages/'

function Integration(){
    return(
     <Wrapper className="page-center">
     <div className="one">
        <div className="two">
           <div> 
                <h1 className="integrate">Integration With Popular Payment Gateways</h1>
                <p>Our platform features seamless integration with popular payment gateways, allowing freelancers to easily receive payments for their services.</p>
            </div>
            <div className="main">
                <div className="first">
                    <img src={process.env.PUBLIC_URL + '/Mubarak img/main.png'} alt="main"  />
                </div>
                <div className="second">
                <h2>Good Rate</h2>
                <h3>we offer good rate in exchange rate.</h3>
                </div>
            </div>
            <div className="main">
                <div className="first">
                    <img src={process.env.PUBLIC_URL + '/Mubarak img/save.png'} alt="main"  />
                </div>
                <div className="seconds">
                <h2>Competitive Transaction Fee</h2>
                <h3>competitive transaction fees to help users save money</h3>
                </div>
            </div>
        </div>
        <div className="twoo">
           <div className="bluess">
           <div className="blue">
        <img src={process.env.PUBLIC_URL + '/Mubarak img/Group 69.png'} alt="main"  />
            
        </div>   
           <div className="blues">
        <img src={process.env.PUBLIC_URL + '/Mubarak img/Preview.png'} alt="main"  />

           </div>
           </div>   
           <div className="bluess">
           <div className="red">
        <img src={process.env.PUBLIC_URL + '/Mubarak img/Group 72.png'} alt="main"  />
            </div>   
           <div className="reds">
        <img src={process.env.PUBLIC_URL + '/Mubarak img/Group 70 (1).png'} alt="main"  />

           </div>
           </div>   
        </div>
     </div>

     </Wrapper>
    )

}
const Wrapper = styled.article `
.one{
display: flex;
flex-direction: row;
width: 100%;
margin-top: 100px;
/* height: 50vh; */
gap: 50px;
}
.two{
    width: 100%;
}
.two h1{
    font-size: 40px;
}
.two p{
margin-top: 30px;
font-size: 20px;
width: 80%;
color: #B0B0B0;
}
.twoo{
width:100% ;
display: flex;
flex-direction: column;
gap: 30px;
}
.bluess{
display: flex;
flex-direction: row;
gap: 30px;
justify-content: center;
align-items: center;
}
.main{
    display: flex;
    flex-direction: row;
    gap: 40px;
    margin-top: 50px;
}
.second h3{
    margin-top: 5px;
    line-height: 1.8rem;
    font-size: 20px;
    color: #B0B0B0;
    width: 90%;
}
.seconds h3{
    margin-top: 5px;
    line-height: 1.8rem;
    font-size: 20px;
    color: #B0B0B0;
    width: 70%;
}
.blue{
    background-color: #90EE90;
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 25vh;
}
.blues{
    background-color: #FBFBFB;
    width: 50%; 
    display: flex;
    justify-content: center;
    align-items: center;
    height: 25vh;
}

.red{
    background-color: black;
    width: 50%;
    height: 25vh; 
    display: flex;
    justify-content: center;
    align-items: center;
}
.reds{
    background-color: #E6E6E6;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;
    height: 25vh;
}

@media screen and (max-width:768px) {
    .one{
display: flex;
flex-direction: column;
width: 100%;
margin-top: 100px;
/* height: 50vh; */
}
.bluess{
display: flex;
flex-direction: column;
gap: 30px;
width: 100%;
justify-content: center;
align-items: center;
}
.blue{
    background-color: #90EE90;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 25vh;
}
.blues{
    background-color: #FBFBFB;
    width: 100%; 
    display: flex;
    justify-content: center;
    align-items: center;
    height: 25vh;
}

.integrate{
    font-size: 15px;
}

.red{
    background-color: black;
    width: 100%;
    height: 25vh; 
    display: flex;
    justify-content: center;
    align-items: center;
}
.reds{
    background-color: #E6E6E6;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 25vh;
}

}
`


export default Integration;
