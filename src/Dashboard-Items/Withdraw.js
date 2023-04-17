import React from 'react'
import { BiRightArrow } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import SideNavBar from '../Asidebar/SideNavBar';
import SearchNavBar from '../SearchComponents/SearchNavBar';

const Withdraw = () => {
  return (
    <Wrapper>
        <div>
            <SideNavBar />
        </div>
        <div className='page-center'>
          <div className='withdraw-search'>
            <SearchNavBar 
            heading = "Withdrawal"
            inputType = "search"
            />
          </div>

          <div className='border'>
          <div className="page-center">
            <div className='first'>
              <div className='one'>
                <img src='/bolu-images/Group 40.png' alt='' />
                <div>
                  <h1><Link to={'/local'}>Withdraw to local bank</Link></h1>
                  <p>instant withdraw to your bank account.</p>
                </div>
              </div>
              <BiRightArrow />
            </div>
            <div className='second'>
              <div className='two'>
                <img src='/bolu-images/Group 39.png' alt='' />
                <div>
                  <h1>withdraw to domain account</h1>
                  <p>received payments to our domain account.</p>
                </div>
              </div>
              <BiRightArrow />
            </div>
            <div className='third'>
              <div className='three'>
                <img src='/bolu-images/Group 38.png' alt='' />
                <div>
                  <h1>sell funds to us</h1>
                  <p>we're buying funds with good rate.</p>
                </div>
              </div>
              <BiRightArrow />
            </div>
            <div className='fourth'>
              <div className='four'>
                <img src='/bolu-images/Group 38.png' alt='' />
                <div>
                  <h1>send to friends</h1>
                  <p>send funds to your friends, families, and neighbors.</p>
                </div>
              </div>
              <BiRightArrow />
            </div>
          </div>
          </div>
        </div>
    </Wrapper>
  )
}
const Wrapper = styled.section`
display:flex;
width: 100%;

.withdraw-search{
  width: 100%;
}
.first, .second, .third, .fourth{
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    background-color: #F7F7F7;
    padding: 20px;
    border-radius: 15px;
}
.first{
  margin-top: 60px;
}
.page-center{
  display: flex;
    flex-direction: column;
    gap: 30px;
}
.one, .two, .three, .four{
    display: flex;
    align-items: center;
    gap: 20px;
}
.border{
  border-top: 1px solid black;
}
@media screen and (max-width:900px){
  .first, .second, .third, .fourth
}
`
export default Withdraw;