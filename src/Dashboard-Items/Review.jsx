import React from 'react'
import styled from 'styled-components'
import SearchNavBar from '../Asidebar/SideNavBar'
import {BsArrowLeft} from 'react-icons/bs'
import { Link } from 'react-router-dom'

const Review = () => {
  return (
        <Wrapper>
            <div>
                <SearchNavBar/>
            </div>
            <div className='name'>
                <div className='arrow'>
                    <BsArrowLeft/>
                    <h1>Government ID Card</h1>
                </div>
                <div className='firm'>
                    <div>
                        <h2>Confirm Your Identification</h2>
                    </div>
                    <div className='full'>
                        <div className='para'>
                            <p>Full Name</p>
                            <p>Email</p>
                            <p>Government ID</p>
                            <p>Your selfie</p>
                        </div>
                        <div className='para'>
                            <p>Alimi Moh-jamiu</p>
                            <p>Talk2jaysox@gmail.com</p>
                            <p>DSCDSCCS.png</p>
                            <p>
                                <div className="pro-pic"></div>
                            </p>
                        </div>
                    </div>
                </div>
                <div>
                    <p><span>Pro tips:</span> confirm your details is correct before putting it to review.</p>
                </div>
                <div className='bun'>
                    <button><Link to={'/under'}>Continue</Link></button>
                </div>
            </div>
        </Wrapper>
  )
}

const Wrapper =styled.div`
display:flex;
width:100%;

.arrow{
    display:flex;
    align-items:center;
    gap:20px;
    padding:20px 40px;
}
.name{
    display:flex;
    flex-direction:column;
    width:100%;
    padding:0 40px;
    gap:50px;
}
.full{
    display:flex;
    justify-content:space-between;
    /* background-color:#F7F7F7; */
}
.pro-pic{
    background-color: gray;
    width: 15%;
    padding: 40px 40px;
    border-radius: 50px
}
.firm{
    background-color:#F7F7F7;
    padding:40px 80px;
    display:flex;
    flex-direction:column;
    gap:40px;
    border-radius:20px;
}
.para{
    display:flex;
    flex-direction:column;
    gap:20px;
}
.bun{
  display: flex;
  justify-content:flex-end;
  padding-right:60px;
}
.bun button{
  background-color: lightgreen;
  padding: 7px 50px;
  border: none;
  border-radius:10px;
  font-size:20px;
}


`
export default Review