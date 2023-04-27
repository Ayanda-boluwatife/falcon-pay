import React from 'react'
import styled from 'styled-components'
import SideNavbar from '../Asidebar/SideNavBar'
import {AiOutlineCloudUpload} from 'react-icons/ai'
import { Link } from 'react-router-dom'

const GovtInner = () => {
  return(
    <Wrapper>
      <div>
        <SideNavbar/>
      </div>
      <div className='nin'>
        <div className='card'>
          <div>
            <h1>Upload Your NIN Card</h1>
          </div>
          <div className='ton'>
            <div className='ton-1'>
              <AiOutlineCloudUpload/>
              <p>Drag & Drop the Document or <span>Upload</span></p>
            </div>
          </div>
        </div>
        <div className='com'>
          <button><Link to={'/govtouter'}>Continue</Link></button>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
display:flex;
width:100%;
align-items:center;
.nin{
  width:100%;
  display:flex;
  flex-direction:column;
  gap:50px;
}
.card{
  padding:10px 50px;
  display:flex;
  flex-direction:column;
  gap:20px;
}
.ton-1{
  border:1px solid black;
  display:flex;
  flex-direction:column;
  align-items:center;
  gap:20px;
  padding: 100px;
  width:70%;
  background-color:#F7F7F7;
}
.list ul{
  display:flex;
  align-items:center;
  justify-content:space-between;
  width:70%;
  padding-left:100px;
}
span{
  color:lightgreen;
}
.com{
  display: flex;
  justify-content:flex-end;
  padding-right:60px;
}
.com button{
  background-color: lightgreen;
  padding: 7px 50px;
  border: none;
  border-radius:10px;
  font-size:20px;
}
`

export default GovtInner