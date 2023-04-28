import React from 'react';
import styled from 'styled-components';

function How() {
  return (
    <Wrapper className='page-center'>
      <div className="how">
        <h1>How Do You Get Started?</h1>
        <div className="step">
          <div className="step-number">
            <h3>1</h3>
          </div>
          <div className="step-content">
            <h2>Register As A User</h2>
            <p>To get started with our platform, users would need to first register as a user by creating an account. This typically involves providing basic information such as a name, email address, and password.</p>
          </div>
        </div>
        <div className="step">
          <div className="step-number">
            <h3>2</h3>
          </div>
          <div className="step-content">
            <h2>Complete Your KYC Verification</h2>
            <p>Once you have registered, you will need to complete the KYC verification process. This involves providing some additional information to help us verify your identity and comply with regulatory requirements.</p>
          </div>
        </div>
        <div className="step">
          <div className="step-number">
            <h3>3</h3>
          </div>
          <div className="step-content">
            <h2>Generate Bank Accounts</h2>
            <p>Once your KYC verification is completed, you can generate bank accounts on our platform. This feature allows you to create and manage multiple bank accounts and connect them to your profile.</p>
          </div>
        </div>
        <div className="step">
          <div className="step-number">
            <h3>4</h3>
          </div>
          <div className="step-content">
            <h2>Get Paid To Your Local Bank Accounts</h2>
            <p>Once users have completed the registration and verification process, and have generated bank accounts, they will be able to receive money into those accounts.</p>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.article`
  .how {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    padding: 2rem;
  }
  .step {
    display: flex;
    flex-direction: row;
    gap: 2rem;
  }
  .step-number {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
    border-radius: 10px;
    background-color: #000000;
    color: #90EE90;
  }
  .step-content h2 {
    margin-top: 0;
  }
  .step-content p {
    margin-bottom: 0;
  }


  /* .step-content::before{
    margin-top: 30px;
    position:absolute;
    left: 9%;
    width: 3px;
    background-color: black;
    content: " ";
    height: 100px;
  } */

  h3::before {
    content: " " counter() ": ";
  }
  .step-content p{
  width: 55%;
  margin-top: 1rem;
}



  @media only screen  and (max-width:768px ){
    .how{
      min-height:100vh ;
    }
    .step-number {
    display: flex;
    align-items: center;
    justify-content: center;
    padding:10px;
    border-radius: 10px;
    background-color: #000000;
    color: #90EE90;
  }
  .step-content p{
  width: 100%;
  margin-top: 1rem;
  }
  
}
`

export default How;
