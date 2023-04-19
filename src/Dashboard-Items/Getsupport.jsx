import React from 'react'
import styled from 'styled-components';
import SideNavBar from '../Asidebar/SideNavBar';
import SearchNavBar from '../SearchComponents/SearchNavBar';

const Getsupport = () => {
  return (
    <Wrapper>
        <div>
          <SideNavBar />
        </div>
        <div className="main">
          <div>
            <SearchNavBar
            heading ="Get Support"
            inputType ="inputType"
            />
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
 }
`
export default Getsupport;