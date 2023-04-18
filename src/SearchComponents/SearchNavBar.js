import {React, useState} from 'react'
import { MdOutlineNightlight, MdOutlineNotificationsNone } from 'react-icons/md';
import { BiSun } from 'react-icons/bi';
import styled from 'styled-components';

const SearchNavBar = (props) => {
    const [isLightMode, setIsLightMode] = useState(true);
    
    const handleToggle = () => {
    setIsLightMode(!isLightMode);
    };

    const sectionClassName = `toggle-bg-color ${
    isLightMode ? 'light-mode' : 'dark-mode'
    }`;
  return (
    <Wrapper>
      <div className={sectionClassName}>
        <h1>{props.heading}</h1>
        <form>
            <input type={props.inputType} className="search" placeholder="Search here........." />
        </form>
        <div className='profile-area'>
        {
            isLightMode? <span onClick={handleToggle}><MdOutlineNightlight /></span> : <span onClick={handleToggle}><BiSun /></span>
        }
        <span><MdOutlineNotificationsNone /></span>
        <div className='profile'></div>
        </div>
    </div>
    </Wrapper>
  )
}
const Wrapper = styled.section`
display:flex;
.bank-details{
    display: flex;
    width: 100%;
    height: 100vh;
    flex-direction: row;
}
.profile-area{
  display: flex;
  align-items: center;
  gap: 5px;
}
.flex-one{
    display: flex;
    padding: 50px;
    justify-content: space-between;
    width: 100%;
}
.toggle-bg-color{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 20px;
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
    box-shadow: 1px 0px 11px rgba(0, 0, 0, 0.15);
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
@media screen and (max-width:950px) {
  form input{
    width: 100px;
  }
}
`
export default SearchNavBar;