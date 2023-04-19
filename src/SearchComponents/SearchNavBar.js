
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
        <div className='joint'>
          <form className='form'>
              <input type={props.inputType}  placeholder="Search here........." />
          </form>
          <div className='profile-area'>
            {
                isLightMode? <span onClick={handleToggle}><MdOutlineNightlight /></span> : <span onClick={handleToggle}><BiSun /></span>
            }
            <span><MdOutlineNotificationsNone /></span>
            <div className='profile'></div>
          </div>
        </div>
       
    </div>
    </Wrapper>
  )
}
const Wrapper = styled.section`
display:flex;
width: 100%;
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
.toggle-bg-color h1{
  width: 80%;
}
.toggle-bg-color{
    width: 100%;
    display: flex;
    flex-direction: row;
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
.inputClass{
  width: 100%;
}
.nav-bar{
    display: flex;
    justify-content: center;
}
.nav-bar span{
    font-size: 20px;
    margin:10px;
}
.joint{
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  gap: 10px;
}
.form{
  width: 100%;
}
.toggle-bg-color input{
    height: 6vh;
    width: 100% !important;
    border-radius: 10px;
    padding: 10px;
    outline-color: #90EE90;
    background-color:#F7F7F7;
    border: none;
    box-shadow: 1px 0px 11px rgba(0, 0, 0, 0.15);
}
/* .toggle-bg-color.light-mode {
  width: 100%;
  background-color: #fff;
  cursor: pointer;
}
.toggle-bg-color.dark-mode {
  background-color:   #4B4B4B;
  width: 100%;
  color: white;
  cursor: pointer;
} */
@media screen and (max-width: 950px) {
  .toggle-bg-color{
    flex-direction: column-reverse;
    margin-left: 50px;
  }
  .toggle-bg-color h1{
  width: 100%;
  text-align: center;
  }
  .form{
    width: 90%;
  }
  .toggle-bg-color input{
    width: 90%;
  }
}
`
export default SearchNavBar;
