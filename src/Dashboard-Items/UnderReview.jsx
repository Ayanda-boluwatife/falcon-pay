import React from 'react'
import styled from 'styled-components'
import SideNavBar from '../Asidebar/SideNavBar'
import { Link } from 'react-router-dom'

const UnderReview = () => {
  return (
    <Wrapper>
        <div>
         <  SideNavBar/>
        </div>
        <div className='review'>
            <div>
                <h2>Your KYC Is Under Review</h2>
                <p>Our team will get back to you within 24hours</p>
            </div>
            <div>
                <p><Link to={'/dashboard'}>Back To Dashbaord</Link></p>
            </div>
        </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
display:flex;
width:100%;


.review{
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    width:100%;
    gap:100px;

}
`

export default UnderReview