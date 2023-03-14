import {React, useState} from 'react'
import { MdOutlineNightlight, MdOutlineNotificationsNone } from 'react-icons/md';
import styled from 'styled-components';
import SideNavBar from '../Asidebar/SideNavBar';
import { BiSun } from 'react-icons/bi';

const DashboardNav = (props) => {
    const [isLightMode, setIsLightMode] = useState(true);

  const handleToggle = () => {
    setIsLightMode(!isLightMode);
  };

  const sectionClassName = `toggle-bg-color ${
    isLightMode ? 'light-mode' : 'dark-mode'
  }`;
  return (
    <Wrapper>
        <div className='bank-details'>
                <SideNavBar />
            <div className={sectionClassName} >
                <div className='flex-one'>
                    <div>
                        <h2>{props.header}</h2>
                    </div>
                    <div>
                        <input type={"search"} placeholder={"search here..........."} />
                    </div>
                    <div className='nav-bar'>
                        {
                            isLightMode? <span onClick={handleToggle}><MdOutlineNightlight /></span> : <span onClick={handleToggle}><BiSun /></span>
                        }
                        <span><MdOutlineNotificationsNone /></span>
                        <div className='profile'></div>
                    </div>
                </div>
            </div>
        </div>
    </Wrapper>
  )
}
const Wrapper = styled.section`
width: 100%;
.bank-details{
    display: flex;
    width: 100%;
    height: 100vh;
    flex-direction: row;
}
.flex-one{
    display: flex;
    padding: 50px;
    justify-content: space-between;
    width: 100%;
}
.toggle-bg-color{
    width: 85%;
}
.profile{
    background-color: gray;
    width: 50px;
    height: 50px;
    border-radius: 30px;
}
.nav-bar{
    display: flex;
    justify-content: center;
}
.nav-bar span{
    font-size: 20px;
    margin:10px;
}
.toggle-bg-color input{
    height: 6vh;
    width: 500px;
    border-radius: 10px;
    padding: 10px;
    outline-color: #90EE90;
    background-color:#F7F7F7;
    border: none;
    box-shadow: 0 4px 4px gray;
}
.toggle-bg-color.light-mode {
  background-color: #fff;
  cursor: pointer;
}

.toggle-bg-color.dark-mode {
  background-color:   #4B4B4B;
  width: 100%;
  color: white;
  cursor: pointer;
}

`
export default DashboardNav;