import React from 'react'
import styled from 'styled-components'
import SideNavBar from '../Asidebar/SideNavBar'
import SearchNavBar from '../SearchComponents/SearchNavBar'

const Community = () => {
  return (
    <Wrapper>
        <div>
            <SideNavBar />
        </div>
        <div className='main'>
            <div>
                <SearchNavBar
                    heading = 'Community'
                    inputType = 'search'
                />
            </div>

            <div className="community">
                <div className="join">
                    <div className="comm">
                        <h1>Join Our Community</h1>
                        <p>Make a differences by joining the community</p>
                        <div className='media'>
                            <h3>Follow our Social Media</h3>
                            <div className='social'>
                                <img src="/Mubarak img/twitter.png" alt="" />
                                <img src="/Mubarak img/instagram.png" alt="" />
                                <img src="/Mubarak img/linkedin.png" alt="" />
                                <img src="/Mubarak img/facebook.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className='create-post'>
                    <button>Create Post</button>
                </div>

                <div className="create">
                    <h1>Top Post</h1>
                    <div>
                        <select name="" id="">
                            <option value="">filter</option>
                            <option value="">filter1</option>
                            <option value="">filter2</option>
                        </select>
                    </div>
                </div>

                <div className="post">
                        <h2><a href=".">How Can I Withdraw With My Bank Account</a></h2>
                        <div className='profile-sub'>
                            <div className="profile"></div>
                            <h3>Jays Alimi</h3>
                        </div>
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
    }
    .community{
        padding-left: 60px;
    }
    .join{
        background-color: black;
        color: #90EE90;
        width: 90%;
        padding: 30px;
    }
    .join p{
        color: white;
    }
    .create-post{
        display: flex;
        align-items: flex-end;
        padding-right: 110px;
        padding-top: 20px;
    }
    .create-post button{
        padding: 10px 50px;
        border: none;
        background-color: #90EE90;
        color: black;
        font-weight: 800;
        cursor: pointer;
    }
    .create{
        display: flex;
        justify-content: space-between;
        padding-right: 110px;
        padding-top: 20px;
    }
    .profile{
        background-color: gray;
        width: 30px;
        height: 30px;
        border-radius: 30px;
    }
    .profile-sub{
        display: flex;
        align-items: center;
        gap: 20px;
    }
    .post{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        gap: 20px;
        width: 90%;
        background-color: #F7F7F7;
        padding: 20px;
        border-radius: 15px;
        margin-top: 20px;
    }
    .comm{
        display: flex;
        flex-direction: column;
        gap: 10px;
    }
    .media{
        display: flex;
        flex-direction: column;
        gap: 10px;
    }
    .social{
        display: flex;
        gap: 10px;
    }
    @media screen and (max-width:950px) {
        .community{
            padding-left: 0;
        }
        .main{
            padding: 20px;
        }
    }
`
export default Community