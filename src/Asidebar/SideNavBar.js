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

            <div>
                <h4 className={`h4 ${showSidebar ? 'none' : ''}`}>Account</h4>
            </div>

            <div className='main-dashboard'>
                <ul>
                    <li>
                        <Link><span><MdOutlineDashboard /></span><h3 className={`h4 ${showSidebar ? 'none' : ''}`}>  Dashboard</h3></Link>
                    </li>
                    <li>
                        <Link><span><RiBankFill /></span><h3 className={`h4 ${showSidebar ? 'none' : ''}`}>Bank Details</h3></Link>
                    </li>
                    <li>
                        <Link> <span><RiWallet3Fill /></span><h3 className={`h4 ${showSidebar ? 'none' : ''}`}>Withdrawal</h3></Link>
                    </li>
                    <li>
                        <Link><span><MdOutlinePayments /></span><h3 className={`h4 ${showSidebar ? 'none' : ''}`}> Payment History</h3></Link>
                    </li>
                    <li>
                        <Link><span><RiAccountBoxFill /></span><h3 className={`h4 ${showSidebar ? 'none' : ''}`}> Profile</h3></Link>
                    </li>
                </ul>
            </div>

            <div>
                <h4 className={`h4 ${showSidebar ? 'none' : ''}`}>Settings</h4>
            </div>

            <div className='main-setting'>
                <ul>
                    <li>
                        <Link><span><MdSupervisorAccount /></span><h3 className={`h4 ${showSidebar ? 'none' : ''}`}>Referral</h3></Link>
                    </li>
                    <li>
                        <Link><span><IoIosPeople /></span><h3 className={`h4 ${showSidebar ? 'none' : ''}`}>Community</h3></Link>
                    </li>
                    <li>
                        <Link><span><FaRegQuestionCircle /></span><h3 className={`h4 ${showSidebar ? 'none' : ''}`}>Get Support</h3></Link>
                    </li>
                    <li>
                        <Link><span><FiLogOut /></span><h3 className={`h4 ${showSidebar ? 'none' : ''}`}>Log Out</h3></Link>
                    </li>
                </ul>
            </div>
        </aside>
    </Wrapper>
  )
}
const Wrapper = styled.section`
.sidebar {
  position: fixed;
  height: 100%;
  transition: ease-in-out .1s;
  background-color: black;
  width: 15%; 
  display: flex; 
  flex-direction: column; 
}

.sidebar.open {
  width: 5%;
  padding: 0 10px;
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
span{
    font-size: 30px;
    color: #90EE90;
}

.none{
    display: none ;
}
.h4{
    color: white;
    margin-top: 10px;
    text-align: center;
}
.main-dashboard ul li a, .main-dashboard ul li h3{
    color: #90EE90;
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
.main-setting ul li h3{
    color: #90EE90;
}
@media screen and (max-width:900px) {
    .sidebar{
        width:60%;
        height: 100vh;
        gap: 40px;
    }
    .sidebar.open{
        width:15%;
    }
}
`
export default SideNavBar;