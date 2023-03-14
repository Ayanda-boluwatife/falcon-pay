import React from 'react'
import SideNavBar from '../Asidebar/SideNavBar'
import Dashboard from './Dashboard'
import styled from 'styled-components'


const MainDashboard = () => {
  return (
    <Wrapper>
        <div className='flexing'>
        <div>
            <SideNavBar />
        </div>
        <div>
           <Dashboard/> 
        </div>
        </div>
    </Wrapper>
  )
}
const Wrapper = styled.section`
width: 100%;
background-color: red;

.flexing{
    display: grid;
    grid-template-column:repeat(2, 1fr);
    background-color: black;
    width: 100%;
}
`
export default MainDashboard