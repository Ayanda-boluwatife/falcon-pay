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
                   <div>
                        <div className="profile-pic"></div>
                        <h4>Mohammed Teslim</h4>
                   </div>
                   <div>
                        <div className="profile-pic"></div>
                        <h4>Mohammed Teslim</h4>
                   </div>
                   <div>
                        <div className="profile-pic"></div>
                        <h4>Mohammed Teslim</h4>
                   </div>
                   <div>
                        <div className="profile-pic"></div>
                        <h4>Mohammed Teslim</h4>
                   </div>
                   <div>
                        <div className="profile-pic"></div>
                        <h4>Mohammed Teslim</h4>
                   </div>
                   <div>
                        <div className="profile-pic"></div>
                        <h4>Mohammed Teslim</h4>
                   </div>
                </div>
                <div className="share">
                    <h1>Your Friend Details</h1>
                    <form action="">
                        <input type="text" name="" id="" placeholder='@Username'/>
                        <input type="number" name="" id="" placeholder='0.0'/>
                    </form>
                    <button>Continue</button>
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
}

.profile{
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    gap: 20px;
    padding-top: 30px;
    padding-bottom: 20px;
    border-bottom: 2px solid black;
}

.profile-pic{
    height: 50px;
    width: 50px;
    border-radius: 50px;
    background-color: gray;
}
form{
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding-top: 20px;
}
input{
    padding: 20px;
}
.share{
    padding-top: 30px;
    width: 50%;
}
.share button{
    background-color: #90EE93;
    border: none;
    width: 100%;
    padding: 20px;
    margin-top: 20px;
    border-radius: 10px;
    font-weight: 700;
    cursor: pointer;
}
@media screen and (max-width:950px) {
    .share{
        width: 100%;
    }
    .main-content{
        padding-left: 0;
    }
    .profile{
        grid-template-columns: repeat(2, 1fr);
    }
}
`
export default ShareToFriends