import React from 'react'
import styled from 'styled-components'
import SideNavBar from '../Asidebar/SideNavBar'
import SearchNavBar from '../SearchComponents/SearchNavBar'


const Domain = () => {
  return (
    <Wrapper>
        <div>
            <SideNavBar/>
        </div>
        <div>
            <div>
                <SearchNavBar
                heading = "Domain Account"
                inputType = "search"
                />
            </div>
        </div>
    </Wrapper>
  )
}
const Wrapper =styled.section`
display:flex;
width:100%;


`
export default Domain