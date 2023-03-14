import React from 'react'
import { AiOutlineCamera } from 'react-icons/ai';
import { BiInfoCircle } from 'react-icons/bi';
import { IoMdCard } from 'react-icons/io';
import { TbSteeringWheel } from 'react-icons/tb'
import styled from 'styled-components';
import SideNavBar from '../Asidebar/SideNavBar';
import SearchNavBar from '../SearchComponents/SearchNavBar';

const VerifyYourKyc = () => {
  return (
    <Wrapper>
        <div>
            <SideNavBar />
        </div>
        <div className="inner-bank">
            <div>
                <SearchNavBar 
                heading = "Bank Details  >  Verify"
                inputType = "search"
                />
            </div>
            <div className='page-center'>
                <div>
                    <h1>verify your KYC</h1>
                    <p>complete your kYC to send & receive payments anywhere.</p>
                </div>
                <div className='tosh'>
                    <h1>select means of verification</h1>
                    <BiInfoCircle />
                </div>
                <div className='hello'>
                    <div className='us-account'>
                        <div className='group-38'>
                            <IoMdCard/>
                            <h1>government ID Card</h1>
                        </div>
                    </div>
                    <div className='us-account'>
                        <div className='group-38'>
                            <AiOutlineCamera />
                            <h1>international passport</h1>
                        </div>
                    </div>
                    <div className='us-account'>
                        <div className='group-38'>
                            <TbSteeringWheel />
                            <h1>international passport</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Wrapper>
  )
}
const Wrapper = styled.section`
display: flex;
width: 100%;

.inner-bank{
    width: 100%;
}
.us-account{
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    background-color: #F7F7F7;
    padding: 20px;
    border-radius: 15px;
}
.hello{
    display: flex;
    flex-direction: column;
    gap: 20px;
}
.group-38{
    display: flex;
    align-items:center;
    gap: 10px;
}
.page-center{
    margin-top: 80px;
    display: flex;
    flex-direction:column;
    gap:20px;
}
.tosh{
    display: flex;
    align-items: center;
    justify-content: space-between;
}

`
export default VerifyYourKyc;