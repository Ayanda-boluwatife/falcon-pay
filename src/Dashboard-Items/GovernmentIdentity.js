import {React, useState} from 'react'
import { BiInfoCircle } from 'react-icons/bi';
import styled from 'styled-components';
import SideNavBar from '../Asidebar/SideNavBar';
import SearchNavBar from '../SearchComponents/SearchNavBar';
import { Link } from 'react-router-dom';

const GovernmentIdentity = () => {
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [dateOfBirthText, setDateOfBirthText] = useState("");

  const handleDateOfBirthChange = (event) => {
    setDateOfBirth(event.target.value);
  };

  const handleDateOfBirthTextChange = (event) => {
    setDateOfBirthText(event.target.value);
  };
  return (
    <Wrapper>
        <div>
            <SideNavBar />
        </div>
        <div className='government-id'>
          <div className='search'>
            <SearchNavBar
            heading = "Government ID Card"
            />
          </div>
          <div className='page-center'>
            <div>
              <h1>Personal Details <span><BiInfoCircle/></span></h1>
              <p>Enter correct details</p>
            </div>
            <form>
              <div>
                <input type={"text"} placeholder={"Full Name"} />
              </div>
              <div>
                <input type={"email"} placeholder={"Your Email"} />
              </div>
              <div>
                <input type={"date"} placeholder={"Date of Birth"} value={dateOfBirth} onChange={handleDateOfBirthChange}/>
                {/* <input type={"text"} value={dateOfBirthText} onChange={handleDateOfBirthTextChange}/> */}
              </div>
            </form>
            <div className='con'>
              <button><Link to={'/govtinner'}>Continue</Link></button>
            </div>
          </div>
        </div>
    </Wrapper>
  )
}
const Wrapper = styled.section`
display: flex;
width: 100%;

/* .search{
  width: 100%;
} */
.government-id{
  width: 100%;
}
ol li{
  list-style: none;

}
ol{
  display: flex;
  width: 70%;
  justify-content: space-between;
  align-items: center;
  padding-left: 100px;
}
form{
  width:100%;
  display: flex;
  /* align-items:center; */
  gap:30px;
  /* justify-content:center; */
  flex-direction:column;
}
form input{
  width:50%;
  /* background: gray; */
  /* border:none; */
  border-radius:10px;
  padding:10px 0;
}
.page-center{
  display: flex;
  flex-direction:column;
  gap:40px;
  padding: 70px 0;
}
.con{
  display: flex;
  justify-content:flex-end;
}
.con button{
  background-color: lightgreen;
  padding: 7px 50px;
  border: none;
  border-radius:10px;
  font-size:20px;
}
`
export default GovernmentIdentity;