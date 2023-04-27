import React from 'react'
import styled from 'styled-components'
import SideNavBar from '../Asidebar/SideNavBar'
import SearchNavBar from '../SearchComponents/SearchNavBar'
import { BiCopy } from 'react-icons/bi'

const Refferal = () => {
  return (
    <Wrapper>
        <div className='side'>
            <SideNavBar />
        </div>
        <div className='second'>
            <div>
                <SearchNavBar
                heading = 'Refferal'
                inputType = 'search'
                 />
            </div>
            <div className='main'>
                <div className='joincomm'>
                   <div className='joincomm-cont'>
                        <h1>Empowering your network</h1>
                        <p>Share to Friends and earn 25% when they transfer more than #500</p>
                   </div>
                   <div>
                        {/* <img src="" alt="" /> */}
                   </div>
                </div>
                <div className='links'>
                    <div className='link-sub'>
                        <h1>Refferal Link</h1>
                        <span><a href=".">Https//falconpay.com.ng</a><BiCopy /></span>
                    </div>
                    <div className='link-sub'>
                        <h1>Refferal Code</h1>
                        <span><a href=".">45678998</a><BiCopy /></span>
                    </div>
                </div>
                <div className="btn-group">
                    <button className='btn-1'>Refferal History</button>
                    <button className='btn-2'>Share Links</button>
                </div>
            </div>
        </div>
    </Wrapper>
  )
}
const Wrapper = styled.section`
    display: flex;
    width: 100%;

    .second{
        width: 100%;
    }

    .main{
        padding-left: 40px;
    }

    .joincomm{
        background-color: black;
        padding: 80px;
        width: 90%;
        border-radius: 20px;
    }
    .joincomm p{
        color: #F7F7F7;
    }

    .joincomm h1{
        color: #90EE90;
    }

    .links{
        display: flex;
        flex-direction: column;
        gap: 50px;
        width: 90%;
        padding-top: 50px;
    }

    .link-sub{
        display: flex;
        justify-content: space-between;
    }

    .link-sub span{
        display: flex;
        align-items: center;
        gap: 10px;
    }

    .btn-group{
        display: flex;
        justify-content: flex-end;
        width: 90%;
        gap: 20px;
        padding-top: 30px;
        font-size: 20px;
    }

    .btn-1{
        padding: 20px 30px;
        background-color: #000;
        border: none;
        border-radius: 10px;
        color: #fff;
    }

    .btn-2{
        padding: 20px 30px;
        background-color: #90EE90;
        border: none;
        border-radius: 10px;
    }
    @media screen and (max-width: 950px) {
        .link-sub h1{
            font-size: 15px;
        }
        .joincomm{
            padding: 30px;
        }
    }
`
export default Refferal