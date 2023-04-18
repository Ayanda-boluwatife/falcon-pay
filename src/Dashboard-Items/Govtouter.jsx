import React from 'react'
import styled from 'styled-components'
// import SearchNavBar from '../Asidebar/SideNavBar'
// import {BsArrowLeft} from "react-icons/bs"
import {AiOutlineCamera} from "react-icons/ai"
import SideNavBar from '../Asidebar/SideNavBar'
// import { Link } from 'react-router-dom'

const Govtouter = () => {
  return (
    <Wrapper>
        <div>
            <SideNavBar />
        </div>
        <div className='last'>
            <div className='svg'>
                
            </div>
            <div className='main'>
                <div className='fie'>
                    <h2>Take A Selfie</h2>
                    <p>Take A Photo Of yourself</p>
                </div>
                <div className='cam'>
                    <div className='cam-1'>
                        <AiOutlineCamera/>
                    </div>
                    <div className='not'>
                        <div>
                            <h1>Notice!!!</h1>
                        </div>
                        <div>
                            <ol>
                                <li>Snap With Clear Background</li>
                                <li>Don't Use Filter Or Edit Image</li>
                                <li>Ensure You're In Lightening Place</li>
                                <li>Take A Round Picture. No Landscape</li>
                            </ol>
                        </div>
                    </div>
                </div>
                <div className='bun'>
                    <button>continue</button>
                </div>
            </div>
            </div>
    </Wrapper>
  )
}
const Wrapper = styled.div`
display:flex;
width:100%;
.svg{
    display:flex;
    align-items:center;
    gap:20px;
    padding:30px 20px;
}
.last{
    width:100%;
    display:flex;
    flex-direction:column;
    gap:50px;
}
.mention ul{
    display:flex;
    align-items:center;
    justify-content:space-between;
    width:70%;
    padding-left:100px;
}
.cam{
    display:flex;
    justify-content:space-between;
    padding:0 40px;
}
.fie{
    padding:0 40px;
    display:flex;
    flex-direction:column;
    gap:20px;
}
.cam-1 svg{
    /* background-color:grey; */
    height:20vh;
    width:15%;
    display:flex
    align-items:center;
    justify-content:center;
    /* border-radius:50% */
}
.cam-1{
    background-color:#F7F7F7;
    display:flex;
    /* height:20vh; */
    width:20%;
    align-items:center;
    justify-content:center;
    border-radius:70%
}
.not{
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
@media screen and (max-width:950px) {
    
}
`
export default Govtouter