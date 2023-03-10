import React from 'react'
import styled from 'styled-components';
import Person from './Props';
// function Person(props) {
  // ...
// }
// import Person from './Props/Person';
function Withdrawal() {
  return (
    <Wrapper className='page-center'>
      <div className='one-two'>
    <div className="one">
      <h2>Withdrawal Made Easy</h2>
      <p>Withdraw your earnings quickly and easily with our seamless</p>
      <p>withdrawal process, available on our finance platform.</p>
    </div>
    <div className="two">
      {/* <img src="/images/bank.png" alt="" /> */}
    <Person  age="local bank account" occupation="We allow user to withdraw their earnings to their local bank account, providing them with a convenient and secure way to access their funds." image="/Mubarak img/bank.png" />
    <Person  age="Domain Account" occupation="You can withdraw your earnings to any account of choice, such as bank, e-wallet, or other supported payment methods like PayPal, Stripe, and Square."image="/Mubarak img/account.png" />
    <Person name="" age="Sell To Us" occupation="providing user with a convenient and secure way to convert their earnings into cash quickly or other supported payment methods. " image="/Mubarak img/sell.png"/>

    </div>
    </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
background-color: white;
min-height: 70vh;

.one{
 text-align: center;

}
.one{
  margin-top: 50px;
}
.one p{
  line-height: 2rem;
}
.one h2{
  margin-bottom: 10px;
}
.two{
  display: flex;
  justify-content: space-between;
  width: 100%;
  row-gap: 1rem;
}


@media only screen  and (max-width:768px ) {
  .two{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    row-gap: 1rem;
  }
}
`

export default Withdrawal;