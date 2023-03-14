import {React, useState} from 'react'
import styled from 'styled-components';
import {AiOutlineMenu} from 'react-icons/ai'
import {MdOutlineDashboard, MdSupervisorAccount, MdOutlinePayments} from 'react-icons/md'
import {RiBankFill, RiWallet3Fill, RiAccountBoxFill} from 'react-icons/ri'
import {IoIosPeople} from 'react-icons/io'
import {FaRegQuestionCircle} from 'react-icons/fa'
import {FiLogOut} from 'react-icons/fi'
import { Link } from 'react-router-dom';

const SideNavBar = () => {
    const [showSidebar, setShowSidebar] = useState(false);

    const handleToggleSidebar = () => {
        setShowSidebar(!showSidebar);
      };
  return (
    <Wrapper>
        <aside className={`sidebar ${showSidebar ? 'open' : ''}`}>
            <div className='nav'>
                <Link>
                    <span onClick={handleToggleSidebar}><AiOutlineMenu /></span>
                    <img src="/bolu-images/falconPay.png" alt="" className={`h4 ${showSidebar ? 'none' : ''}`}/>
                </Link>
            </div>

            <div className='main-dashboard link-group'>
                <h4 className={`h4 ${showSidebar ? 'hide' : ''}`}>Account</h4>
                <ul className='link-items'>
                    <li>
                        <Link to={"/dashboard"}><span><MdOutlineDashboard /></span><span className={`h4 ${showSidebar ? 'none' : ''}`}>  Dashboard</span></Link>
                    </li>
                    <li>
                        <Link to={"/bankdetails"}><span><RiBankFill /></span><span className={`h4 ${showSidebar ? 'none' : ''}`}>Bank Details</span></Link>
                    </li>
                    <li>
                        <Link to={"/withdraw"}> <span><RiWallet3Fill /></span><span className={`h4 ${showSidebar ? 'none' : ''}`}>Withdrawal</span></Link>
                    </li>
                    <li>
                        <Link><span><MdOutlinePayments /></span><span className={`h4 ${showSidebar ? 'none' : ''}`}> Payment History</span></Link>
                    </li>
                    <li>
                        <Link><span><RiAccountBoxFill /></span><span className={`h4 ${showSidebar ? 'none' : ''}`}> Profile</span></Link>
                    </li>
                </ul>
            </div>

            <div className='main-setting link-group'>
                <h4 className={`h4 ${showSidebar ? 'hide' : ''}`}>Settings</h4>
                <ul className='link-items'>
                    <li>
                        <Link><span><MdSupervisorAccount /></span><span className={`h4 ${showSidebar ? 'none' : ''}`}>Referral</span></Link>
                    </li>
                    <li>
                        <Link><span><IoIosPeople /></span><span className={`h4 ${showSidebar ? 'none' : ''}`}>Community</span></Link>
                    </li>
                    <li>
                        <Link><span><FaRegQuestionCircle /></span><span className={`h4 ${showSidebar ? 'none' : ''}`}>Get Support</span></Link>
                    </li>
                    <li>
                        <Link to={"/signin"}><span><FiLogOut /></span><span className={`h4 ${showSidebar ? 'none' : ''}`}>Log Out</span></Link>
                    </li>
                </ul>
            </div>
        </aside>
    </Wrapper>
  )
}
const Wrapper = styled.section`
.sidebar {
  padding: 16px ;
  width: 250px;
  height: 100vh;
  top: 0;
  left: 0;
  transition: ease-in-out .1s;
  background-color: black;
  display: flex; 
  overflow-y: hidden;
  flex-direction: column; 
}

.sidebar.open {
  width:57px;
  transition: ease-in-out .1s;
}

.nav a{
    display: flex;
    flex-direction: row;
    padding: 5px;
    gap: 10px;
}
.nav{
    margin-top: 10px;
}
svg{
    font-size: 25px;
    color: #90EE90;
}

.none{
    display: none ;
}
.hide{
    visibility: hidden;
}
.h4{
    color: white;
}
.main-dashboard ul li a, .main-dashboard ul li span{
    color: #90EE90;
}
.link-group > h4 {
    padding-left: 40px;
    padding-top: 30px;
}
.main-dashboard ul li a{
    display: flex;
    align-items: center;
    gap: 10px;
    padding:10px 5px ;
}
.main-setting ul li a{
    display: flex;
    align-items: center;
    gap: 10px;
    padding:10px 5px;
}
.main-setting ul li span{
    color: #90EE90;
}
@media screen and (max-width:900px) {
    .sidebar{
        width:30%;
        height: 100vh;
    }
    .sidebar.open{
        width:10%;
    }
    .link-group > h4{
        padding-top: 20px;
    }
}
`
export default SideNavBar;