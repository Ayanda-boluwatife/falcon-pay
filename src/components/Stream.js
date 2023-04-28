import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';
function Stream() {
  return (
     
    <Wrapper className='page-center'>
     <div className="one">
      <h2>Streamline Your Finance With Us</h2>
      <p>Our platform provides a secure, convenient and easy to use environment for managing financial transactions.</p>
     <Link to={"/signup"}><button>Create An Account</button></Link>

     </div>
    </Wrapper>
  )
}
const Wrapper = styled.article`
.one{
    background-color: black;
    min-height: 50vh;
    display:  flex;
    border-radius: 20px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 40px;
}    
.one h2{
    color: #90EE90;
}
 button{
 background-color: #90EE90;
 padding: 15px 40px;
 border: none;
 margin-top: 30px;
 border-radius: 10px;
 font-size: 15px;
 cursor: pointer;
}
button:hover{
  background-color: gray;
  color: white;
}
.one p{
    color: #858585;
    width: 50%;
    font-size: 20px;
    margin-top: 20px;
    text-align: center;
    line-height: 1.5rem;
}
@media screen and (max-width:950px) {
  .one p{
    width: 80%;
  }
}
`

export default Stream;