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
        <div>
          <SearchNavBar
          heading ="Get Support"
          inputType ="inputType"
          />
        </div>
    </Wrapper>
  )
}
const Wrapper = styled.section`
    
`
export default Getsupport;