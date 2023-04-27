import React from 'react'
import styled from 'styled-components'
import {AiOutlineCamera} from 'react-icons/ai'
import SideNavBar from '../Asidebar/SideNavBar'
import SearchNavBar from '../SearchComponents/SearchNavBar'
import {Link} from 'react-router-dom'

const Govtouter = () => {
  return (
    <Wrapper>
        <div>
            <SideNavBar />
        </div>
        <div className="main">
           <div>
            <SearchNavBar 
                heading = 'Government ID Card'
                />
           </div>
           <div className='main-content'>
                <div className="take-self">
                    <h1>Take a Selfie</h1>
                    <p>Take a photo of yourself</p>
                    <div className="pro-pic">
                        <AiOutlineCamera />
                    </div>
                </div>
                <div className="notice">
                    <h1>NOTICE</h1>
                    <ol>
                        <li>snap with clear background</li>
                        <li>dont use filter or edit the image</li>
                        <li>ensure you're in lightening place</li>
                        <li>take a round picture. no landscape</li>
                    </ol>
                    <button><Link to={'/review'}>continue</Link></button>
                </div>
           </div>
        </div>
    </Wrapper>
  )
}
const Wrapper = styled.section`
   display: flex;
   width: 100%;

   .main{
    width: 100%;
    padding: 20px;
   }
   .main-content{
    padding-left: 20px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding-top: 50px;
   }
   .pro-pic{
    background-color: gray;
    height: 200px;
    width: 200px;
    border-radius: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
   }
   .notice{
    display: flex;
    flex-direction: column;
    gap: 20px;
   }
   .take-self{
    display: flex;
    flex-direction: column;
    gap: 20px;
   }
   .pro-pic svg{
    font-size: 30px;
   }
   .notice button{
    background-color: #90EE93;
    padding: 15px 30px;
    border: none;
    font-weight: 700;
    border-radius: 10px;
   }
   ol{
    display: flex;
    flex-direction: column;
    gap: 20px;
   }
   @media screen and (max-width:950px) {
    .main-content{
        flex-direction: column;
        gap: 40px;
    }
   }
`
export default Govtouter