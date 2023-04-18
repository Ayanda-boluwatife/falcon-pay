import React from 'react'
import styled from 'styled-components';
import SideNavBar from '../Asidebar/SideNavBar';
import SearchNavBar from '../SearchComponents/SearchNavBar';

const Profile = () => {
  return (
    <Wrapper>
        <div className="profile">
            <div className="side-nav">
                <SideNavBar />
            </div>
            <div className="main-profile">
                <div className="search">
                    <SearchNavBar 
                        heading = "Profile"
                        inputType = "search"
                    />
                </div>
                <div className="lobby">
                    <div className="setting">
                        <h1>Settings</h1>
                        <ol>
                            <li>Documents</li>
                            <li>View KYC Details</li>
                            <li>Terms & Condition</li>
                            <li>Privacy & Policy</li>
                        </ol>
                        <div>
                            <span>Show Balance</span>
                        </div>
                        <div>
                            <button>Log Out</button>
                        </div>
                    </div>

                    <div className="your-profile">
                        <h1>Your Profile</h1>
                        <div className="profile-pic"></div>
                        <div className="form">
                            <input type="text" placeholder='User-name' value="Alimi Mohammed-Jamiu"/>
                            <input type="email" placeholder='Your mail' value="Alimi Mohammed-Jamiu@gmail.com"/>
                            <input type="password" placeholder='Password' value="Alimi Mohammed-Jamiu"/>
                        </div>
                        <div className="save-btn">
                            <button>Save</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Wrapper>
  )
}
const Wrapper = styled.section`
    width: 100%;

    .profile{
        display: flex;
    }

    .main-profile{
        width: 100%;
    }

    .lobby{
        display: flex;
        justify-content: space-between;
        width: 100%;
        gap: 40px;
        padding: 60px;
    }

    ol{
        list-style: none;
        display: flex;
        flex-direction: column;
        gap: 30px;
    }

    .setting{
        width: 50%;
        display: flex;
        flex-direction: column;
        gap: 54px;
    }

    .your-profile{
        width: 50%;
        display: flex;
        flex-direction: column;
        gap: 30px;
    }

    .your-profile h1{
        text-align: center;
    }

    .your-profile input{
        display: flex;
        flex-direction: column;
        margin-top: 10px;
        width: 100%;
        padding: 15px;
    }

    .profile-pic{
        background-color: gray;
        width: 15%;
        padding: 40px 40px;
        border-radius: 50px;
    }

    button{
        width: 100%;
        padding: 15px;
        font-size: 20px;
        cursor: pointer;
        background-color: black;
        color:#90EE90;
        border-radius: 10px;
        border: none;
    }

    @media screen and (max-width:950px) {
        .lobby{
            flex-direction: column;
        }
        .setting{
            width: 100%;
        }
        .your-profile{
            width: 100%;
        }
    }
`
export default Profile;