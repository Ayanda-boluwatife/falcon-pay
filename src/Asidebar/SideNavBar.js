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
    const [mobile, setMobile] = useState(false);
    const handleToggleSidebar = () => {
        setShowSidebar(!showSidebar);
      };


    const toggleMobile = () => {
        setMobile(!mobile)
    }  
  return (
    <Wrapper>
        <span className={`toggle`} onClick={handleToggleSidebar}><AiOutlineMenu /></span>
        <div onClick={toggleMobile} className={`toggle2 ${mobile ? 'hamburger2 open toggle2-sub' : 'hamburger2'}`}>
            <div className='first'></div>
            <div className='second'></div>
            <div className='third'></div>
        </div>

        <aside className={`sidebar ${showSidebar ? 'open' : ''}`}>
            <div className='nav'>
                <Link>
                    <img  src="/bolu-images/falconPay.png" alt="" className={`h4 gega ${showSidebar ? 'none' : ''}`}/>
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
                        <Link to={"/payment-history"}><span><MdOutlinePayments /></span><span className={`h4 ${showSidebar ? 'none' : ''}`}> Payment History</span></Link>
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
        <aside className={`sidemobile ${mobile ? 'sidemobileopen' : 'sidemobile'}`}>
            <div className='nav'>
                <Link>
                    <img  src="/bolu-images/falconPay.png" alt="" className={`h4`}/>
                </Link>
            </div>

            <div className='main-dashboard link-group'>
                <h4 className={`h4`}>Account</h4>
                <ul className='link-items'>
                    <li>
                        <Link to={"/dashboard"}><span><MdOutlineDashboard /></span><span className={`h4`}>  Dashboard</span></Link>
                    </li>
                    <li>
                        <Link to={"/bankdetails"}><span><RiBankFill /></span><span className={`h4`}>Bank Details</span></Link>
                    </li>
                    <li>
                        <Link to={"/withdraw"}> <span><RiWallet3Fill /></span><span className={`h4`}>Withdrawal</span></Link>
                    </li>
                    <li>
                        <Link to={"/payment-history"}><span><MdOutlinePayments /></span><span className={`h4`}> Payment History</span></Link>
                    </li>
                    <li>
                        <Link><span><RiAccountBoxFill /></span><span className={`h4`}> Profile</span></Link>
                    </li>
                </ul>
            </div>

            <div className='main-setting link-group'>
                <h4 className={`h4`}>Settings</h4>
                <ul className='link-items'>
                    <li>
                        <Link><span><MdSupervisorAccount /></span><span className={`h4`}>Referral</span></Link>
                    </li>
                    <li>
                        <Link><span><IoIosPeople /></span><span className={`h4`}>Community</span></Link>
                    </li>
                    <li>
                        <Link><span><FaRegQuestionCircle /></span><span className={`h4`}>Get Support</span></Link>
                    </li>
                    <li>
                        <Link to={"/signin"}><span><FiLogOut /></span><span className={`h4`}>Log Out</span></Link>
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
  overflow: hidden;
  flex-direction: column; 
}
.sidemobile {
    display: none;
}
.toggle{
    z-index: 1000;
    position: absolute;
}
.toggle2{
    z-index: 1000;
    top: 3%;
    left: 5%;
    position: absolute;
    display: none;
}
.toggle2-sub{
    left: 35%;
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
.gega{
    margin-left: 70px;
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
        display: none;
    }
    .sidebar.open {
       display: none;
    }
    .toggle{
        display: none;
    }
    .sidebar.open{
        width:10%;
    }
    .link-group > h4{
        padding-top: 20px;
    }
    .sidemobile {
        padding: 16px ;
        width: 250px;
        height: 100vh;
        position: fixed;
        top: 0;
        left: -250px;
        transition: ease-in-out .5s;
        background-color: black;
        display: flex; 
        overflow: hidden;
        flex-direction: column; 
    }
    .sidemobileopen{
        left: 0px;
    }
    .toggle2{
        z-index: 1000;
        display: flex;
    }
}
`
export default SideNavBar;