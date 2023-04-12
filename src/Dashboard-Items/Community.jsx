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
                    <div>
                        <h1>Join Our Community</h1>
                        <p>Make a differences by joining the community</p>
                        <div>
                            <h3>Follow our Social Media</h3>
                            <div>
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
                    <div>
                        <h1><a href=".">How Can I Withdraw With My Bank Account</a></h1>
                        <div>

                        </div>
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
`
export default Community