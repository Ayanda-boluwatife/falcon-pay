import React from 'react'
import styled from 'styled-components'
import SideNavBar from '../Asidebar/SideNavBar'
import SearchNavBar from '../SearchComponents/SearchNavBar'

const ShareToFriends = () => {
  return (
    <Wrapper>
        <div>
            <SideNavBar />
        </div>
        <div className="main">
            <div>
                <SearchNavBar 
                    heading = "Share To Friends"
                    inputType ="search"
                />
            </div>
            <div className="main-content">
                <h1>RECENT HISTORY</h1>
                <div className="profile">
                    <div className="profile"></div>
                    <h4>Mohammed Teslim</h4>
                </div>
            </div>
        </div>
    </Wrapper>
  )
}
const Wrapper = styled.section`

`
export default ShareToFriends