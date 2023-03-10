import React from 'react'
import styled from 'styled-components';
import {MdOutlineNotificationsNone, MdOutlineNightlight } from 'react-icons/md';
import SideNavBar from './SideNavBar';

const DashboardNav = () => {
  return (
    <Wrapper>
        <div className='flex-one'>
            <SideNavBar />
            <div className='flex-two'>
                <h1>Dashboard</h1>
                <nav>
                    <input type={"search"} placeholder={"search here......"} />
                    <span><MdOutlineNightlight /></span>
                    <span><MdOutlineNotificationsNone /></span>
                    <span></span>
                </nav>
            </div>
        </div>
    </Wrapper>
  )
}
const Wrapper = styled.section`

.flex-one{
    display: flex;
}
.flex-two{
    display: flex;
    justify-content: space-between;
    width: 80%;
    padding: 30px;
}
input{
    width: 500px;
    height: 6vh;
    padding: 10px;
    outline-color: #90EE90;
    border-radius: 10px;
}
nav{
    display: flex;
    gap: 20px;
    justify-content: center;
}

`
export default DashboardNav;