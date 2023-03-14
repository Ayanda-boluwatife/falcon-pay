import React from 'react'
import { BiRightArrow } from 'react-icons/bi';
import styled from 'styled-components';
import SideNavBar from '../Asidebar/SideNavBar';
import SearchNavBar from '../SearchComponents/SearchNavBar';
import { Link } from 'react-router-dom';

const BankDetail = () => {
  return (
    <Wrapper>
        <div>
            <SideNavBar />
        </div>
        <div className='bank-detail'>
            <div className='search-area'>
                <SearchNavBar 
                heading = "Bank Details"
                inputType = "search"
                />
            </div>

            <div className='page-center'>
                <Link to={"/verify_your_kyc"}>
                    <div className='kyc-verify'>
                        <div className='group-40'>
                            <img src='/bolu-images/Group 40.png' alt='' />
                            <div>
                                <h1>complete your kYC verification</h1>
                                <p>Your verification is not complete yet.</p>
                            </div>
                        </div>
                        <BiRightArrow />
                    </div>
                </Link>
                <div className='link-bank'>
                    <div className='group-39'>
                        <img src='/bolu-images/Group 39.png' alt='' />
                        <div>
                            <h1>link your bank accounts</h1>
                            <p>input your local bank detail for payment.</p>
                        </div>
                    </div>
                    <BiRightArrow />
                </div>
                <div className='us-account'>
                    <div className='group-38'>
                        <img src='/bolu-images/Group 38.png' alt='' />
                        <div>
                            <h1>Get US account</h1>
                            <p>US account for foreign payment.</p>
                        </div>
                    </div>
                    <BiRightArrow />
                </div>
            </div>
        </div>
    </Wrapper>
  )
}
const Wrapper = styled.section`
display: flex;

.bank-detail{
    width: 100%;
}
.kyc-verify, .link-bank, .us-account{
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    background-color: #F7F7F7;
    padding: 20px;
    border-radius: 15px;
}
.kyc-verify{
    margin-top: 100px;
}
.group-40, .group-39, .group-38{
    display: flex;
    align-items: center;
    gap: 20px;
}
.page-center{
    display: flex;
    flex-direction: column;
    gap: 30px;
    border-top: 1px solid black;
}
a{
    color: black;
}
`
export default BankDetail;