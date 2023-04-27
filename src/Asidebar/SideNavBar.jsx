import React, { useState } from 'react'
import styled from 'styled-components'
import {AiOutlineMenu} from 'react-icons/ai';
import {MdOutlineDashboard, MdSupervisorAccount, MdOutlinePayments} from 'react-icons/md';
import {RiBankFill, RiWallet3Fill, RiAccountBoxFill} from 'react-icons/ri';
import {IoIosPeople} from 'react-icons/io';
import {FaRegQuestionCircle} from 'react-icons/fa';
import {FiLogOut} from 'react-icons/fi';
import { Link } from 'react-router-dom';

const SideNavBar = () => {
  const [desktopToggle, setDesktopToggle] = useState(true);

  const handleDesktopSideBar = () =>{
    setDesktopToggle(!desktopToggle)
  }

  const [active, setActive] = useState(true);

  // const handleMobileToggle = () =>{
  //   setActive(!active)
  // }

  const [showFeature1, setShowFeature1] = useState(false);
  const [showFeature2, setShowFeature2] = useState(false);
  const [showFeature3, setShowFeature3] = useState(false);
  const [showFeature4, setShowFeature4] = useState(false);
  const [showFeature5, setShowFeature5] = useState(false);
  const [showFeature6, setShowFeature6] = useState(false);
  const [showFeature7, setShowFeature7] = useState(false);
  const [showFeature8, setShowFeature8] = useState(false);
  const [showFeature9, setShowFeature9] = useState(false);

  const handleMouseEnter1 = () => {
    setShowFeature1(true);
  };

  const handleMouseLeave1 = () => {
    setShowFeature1(false);
  };

  const handleMouseEnter2 = () => {
    setShowFeature2(true);
  };

  const handleMouseLeave2 = () => {
    setShowFeature2(false);
  };

  const handleMouseEnter3 = () => {
    setShowFeature3(true);
  };

  const handleMouseLeave3 = () => {
    setShowFeature3(false);
  };

  const handleMouseEnter4 = () => {
    setShowFeature4(true);
  };

  const handleMouseLeave4 = () => {
    setShowFeature4(false);
  };

  const handleMouseEnter5 = () => {
    setShowFeature5(true);
  };

  const handleMouseLeave5 = () => {
    setShowFeature5(false);
  };

  const handleMouseEnter6 = () => {
    setShowFeature6(true);
  };

  const handleMouseLeave6 = () => {
    setShowFeature6(false);
  };

  const handleMouseEnter7 = () => {
    setShowFeature7(true);
  };

  const handleMouseLeave7 = () => {
    setShowFeature7(false);
  };

  const handleMouseEnter8 = () => {
    setShowFeature8(true);
  };

  const handleMouseLeave8 = () => {
    setShowFeature8(false);
  };

  const handleMouseEnter9 = () => {
    setShowFeature9(true);
  };

  const handleMouseLeave9 = () => {
    setShowFeature9(false);
  };  
  return (
    <Wrapper>
        <aside className={` ${desktopToggle  ? ' aside-desktop-open' : 'aside-desktop'}`}>
          <div className="aside-header">
            <div className="logo">
              <span onClick={handleDesktopSideBar}><AiOutlineMenu /></span>
              <img src="/bolu-images/FalconPay.png" alt="" className={`${desktopToggle ? 'none' : 'block'}`} />
            </div>
          </div>
          <div className="aside-items">
            <ol>
              <Link to={'/dashboard'}>
                <li className={` ${active ? 'active' : ''}`} onMouseEnter={handleMouseEnter1} onMouseLeave={handleMouseLeave1}>
                  <MdOutlineDashboard />
                  {showFeature1 && (
                    <div className="tooltip">
                      <p>Dashboard</p>
                    </div>
                  )}
                  <span className={`${desktopToggle ? 'none' : 'block'}`}>Dashboard</span> 
                </li>
              </Link>
              <Link to={'/bankdetails'}>
                <li onMouseEnter={handleMouseEnter2} onMouseLeave={handleMouseLeave2}>
                  <RiBankFill />
                  {showFeature2 && (
                    <div className="tooltip">
                      <p>Bank Details</p>
                    </div>
                  )}
                  <span className={`${desktopToggle ? 'none' : 'block'}`}>Bank Details</span>
                </li>
              </Link>
              <Link to={'/withdraw'}>
                <li onMouseEnter={handleMouseEnter3} onMouseLeave={handleMouseLeave3}>
                  <MdOutlinePayments />
                  {showFeature3 && (
                    <div className="tooltip">
                      <p>Withdrawal</p>
                    </div>
                  )}
                  <span className={`${desktopToggle ? 'none' : 'block'}`}> Withdrawal</span>
                </li>
              </Link>
              <Link to={'/payment_history'}>
                <li onMouseEnter={handleMouseEnter4} onMouseLeave={handleMouseLeave4}>
                  <RiWallet3Fill />
                  {showFeature4 && (
                    <div className="tooltip">
                      <p>Payment History</p>
                    </div>
                  )}
                  <span className={`${desktopToggle ? 'none' : 'block'}`}>Payment History</span>
                </li>
              </Link>
              <Link to={'/profile'}>
                <li onMouseEnter={handleMouseEnter5} onMouseLeave={handleMouseLeave5}>
                  <MdSupervisorAccount />
                  {showFeature5 && (
                    <div className="tooltip">
                      <p>Profile</p>
                    </div>
                  )}
                  <span className={`${desktopToggle ? 'none' : 'block'}`}>Profile</span>
                </li>
              </Link>
            </ol>
          </div>
          <div className="aside-items-2">
            <ol>
              <Link to={'/referral'}>
                <li onMouseEnter={handleMouseEnter6} onMouseLeave={handleMouseLeave6}>
                  <RiAccountBoxFill />
                  {showFeature6 && (
                    <div className="tooltip">
                      <p>Referral</p>
                    </div>
                  )}
                  <span className={`${desktopToggle ? 'none' : 'block'}`}>Referral</span>
                </li>
              </Link>
              <Link to={'/community'}>
                <li onMouseEnter={handleMouseEnter7} onMouseLeave={handleMouseLeave7}>
                  <IoIosPeople />
                  {showFeature7 && (
                    <div className="tooltip">
                      <p>Community</p>
                    </div>
                  )}
                  <span className={`${desktopToggle ? 'none' : 'block'}`}>Community</span>
                </li>
              </Link>
              <Link to={'/get_suppor'}>
                <li onMouseEnter={handleMouseEnter8} onMouseLeave={handleMouseLeave8}>
                  <FaRegQuestionCircle />
                  {showFeature8 && (
                    <div className="tooltip">
                      <p>Get Support</p>
                    </div>
                  )}
                  <span className={`${desktopToggle ? 'none' : 'block'}`}>Get Support</span>
                </li>
              </Link>
              <Link to={'/signin'}>
                <li onMouseEnter={handleMouseEnter9} onMouseLeave={handleMouseLeave9}>
                  <FiLogOut />
                  {showFeature9 && (
                    <div className="tooltip">
                      <p>Log Out</p>
                    </div>
                  )}
                  <span className={`${desktopToggle ? 'none' : 'block'}`}>Log Out</span>
                </li>
              </Link>
            </ol>
          </div>
        </aside>
        <span onClick={handleDesktopSideBar} className='mobiletoggle'><AiOutlineMenu /></span>
        
    </Wrapper>
  )
}
const Wrapper = styled.section`
width: 100%;

.logo{
  display: flex;
  padding: 10px;
  gap: 10px;
  cursor: pointer;
}

.aside-desktop{
  background-color: #000;
  height: 100vh;
  color: #000;
  padding: 20px;
  min-width: 250px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  transition: all 0.5s ease;
}

a{
  color: #fff;
}

.aside-desktop{
  color: #fff;
  font-size: 20px;
}

ol li{
  list-style: none;
  font-weight: 700;
}

.aside-items ol, .aside-items-2 ol{
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.aside-items ol li, .aside-items-2 ol li{
  cursor: pointer;
  padding: 10px;
  background-color: #90EE90;
  border-radius: 10px;
  display: flex;
  align-items: center;
  gap: 10px;
}

.none{
  display: none;
}

.block{
  display: block;
}

.tooltip{
  display: none;
}

.aside-items ol li:hover, .aside-items-2 ol li:hover{
  background: linear-gradient(to right, #000, #fff);
  color: #90EE90;
}

.active{
  background: linear-gradient(to right, #000, #fff);
  color: #90EE90;
}
.aside-desktop-open{
  min-width: 40px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 20px;
  background-color: #000;
  color: #fff;
  height: 100vh;
  font-size: 20px;
}
.mobiletoggle{
  display: none;
}

@media screen and (max-width:950px) {
  .mobiletoggle{
    display: block;
    position: absolute;
    top: 40px;
    left: 30px;
    font-size: 20px;
  }
  .aside-desktop{
    position: absolute;
    visibility: hidden;
    transition: none;
  }
  .aside-desktop-open{
    position: absolute;
  }
  .tooltip{
    display: block;
  }
  .aside-items ol li, .aside-items-2 ol li{
    background-color: transparent;
  }
  /* .aside-mobile{
    display: none;
  }
  .aside-mobile-open{
    display: flex;
    width: 80%;
    position: absolute;
  } */
}

`
export default SideNavBar




// import {React, useState} from 'react';
// import styled from 'styled-components';
// import {AiOutlineMenu} from 'react-icons/ai';
// import {MdOutlineDashboard, MdSupervisorAccount, MdOutlinePayments} from 'react-icons/md';
// import {RiBankFill, RiWallet3Fill, RiAccountBoxFill} from 'react-icons/ri';
// import {IoIosPeople} from 'react-icons/io';
// import {FaRegQuestionCircle} from 'react-icons/fa';
// import {FiLogOut} from 'react-icons/fi';
// import { Link } from 'react-router-dom';

// const SideNavBar = () => {
//     const [showSidebar, setShowSidebar] = useState(false);
//     const [mobile, setMobile] = useState(false);
//     const handleToggleSidebar = () => {
//         setShowSidebar(!showSidebar);
//       };


//     const toggleMobile = () => {
//         setMobile(!mobile)
//     }  
//   return (
//     <Wrapper>
//         <span className={`toggle`} onClick={handleToggleSidebar}><AiOutlineMenu /></span>
//         <div onClick={toggleMobile} className={`toggle2 ${mobile ? 'hamburger2 open toggle2-sub' : 'hamburger2'}`} >
//             <div className='first'></div>
//             <div className='second'></div>
//             <div className='third'></div>
//         </div>

//         <aside className={`sidebar ${showSidebar ? 'open' : ''}`}>
//             <div className='nav'>
//                 <Link>
//                     <img  src="/bolu-images/falconPay.png" alt="" className={`h4 gega ${showSidebar ? 'none' : ''}`}/>
//                 </Link>
//             </div>

//             <div className='main-dashboard link-group'>
//                 <h4 className={`h4 ${showSidebar ? 'hide' : ''}`}>Account</h4>
//                 <ul className='link-items'>
//                     <li>
//                         <Link to={"/dashboard"}><span><MdOutlineDashboard /></span><span className={`h4 ${showSidebar ? 'none' : ''}`}>  Dashboard</span></Link>
//                     </li>
//                     <li>
//                         <Link to={"/bankdetails"}><span><RiBankFill /></span><span className={`h4 ${showSidebar ? 'none' : ''}`}>Bank Details</span></Link>
//                     </li>
//                     <li>
//                         <Link to={"/withdraw"}> <span><RiWallet3Fill /></span><span className={`h4 ${showSidebar ? 'none' : ''}`}>Withdrawal</span></Link>
//                     </li>
//                     <li>
//                         <Link to={"/payment_history"}><span><MdOutlinePayments /></span><span className={`h4 ${showSidebar ? 'none' : ''}`}> Payment History</span></Link>
//                     </li>
//                     <li>
//                         <Link to={'/profile'}><span><RiAccountBoxFill /></span><span className={`h4 ${showSidebar ? 'none' : ''}`}> Profile</span></Link>
//                     </li>
//                 </ul>
//             </div>

//             <div className='main-setting link-group'>
//                 <h4 className={`h4 ${showSidebar ? 'hide' : ''}`}>Settings</h4>
//                 <ul className='link-items'>
//                     <li>
//                         <Link to={'/referral'}><span><MdSupervisorAccount /></span><span className={`h4 ${showSidebar ? 'none' : ''}`}>Referral</span></Link>
//                     </li>
//                     <li>
//                         <Link to={'/community'}><span><IoIosPeople /></span><span className={`h4 ${showSidebar ? 'none' : ''}`}>Community</span></Link>
//                     </li>
//                     <li>
//                         <Link to={'/get_support'}><span><FaRegQuestionCircle /></span><span className={`h4 ${showSidebar ? 'none' : ''}`}>Get Support</span></Link>
//                     </li>
//                     <li>
//                         <Link to={"/signin"}><span><FiLogOut /></span><span className={`h4 ${showSidebar ? 'none' : ''}`}>Log Out</span></Link>
//                     </li>
//                 </ul>
//             </div>
//         </aside>
//         <aside className={`sidemobile ${mobile ? 'sidemobileopen' : ''}`}>
//             <div className='nav'>
//                 <Link>
//                     <img  src="/bolu-images/falconPay.png" alt="" className={`h4`}/>
//                 </Link>
//             </div>

//             <div className='main-dashboard link-group'>
//                 <h4 className={`h4`}>Account</h4>
//                 <ul className='link-items'>
//                     <li>
//                         <Link to={"/dashboard"}><span><MdOutlineDashboard /></span><span className={`h4`}>  Dashboard</span></Link>
//                     </li>
//                     <li>
//                         <Link to={"/bankdetails"}><span><RiBankFill /></span><span className={`h4`}>Bank Details</span></Link>
//                     </li>
//                     <li>
//                         <Link to={"/withdraw"}> <span><RiWallet3Fill /></span><span className={`h4`}>Withdrawal</span></Link>
//                     </li>
//                     <li>
//                         <Link to={"/payment_history"}><span><MdOutlinePayments /></span><span className={`h4`}> Payment History</span></Link>
//                     </li>
//                     <li>
//                         <Link to={'/profile'}><span><RiAccountBoxFill /></span><span className={`h4`}> Profile</span></Link>
//                     </li>
//                 </ul>
//             </div>

//             <div className='main-setting link-group'>
//                 <h4 className={`h4`}>Settings</h4>
//                 <ul className='link-items'>
//                     <li>
//                         <Link to={'/referral'}><span><MdSupervisorAccount /></span><span className={`h4`}>Referral</span></Link>
//                     </li>
//                     <li>
//                         <Link to={'/community'}><span><IoIosPeople /></span><span className={`h4`}>Community</span></Link>
//                     </li>
//                     <li>
//                         <Link to={'/get_support'}><span><FaRegQuestionCircle /></span><span className={`h4`}>Get Support</span></Link>
//                     </li>
//                     <li>
//                         <Link to={"/signin"}><span><FiLogOut /></span><span className={`h4`}>Log Out</span></Link>
//                     </li>
//                 </ul>
//             </div>
//         </aside>
//     </Wrapper>
//   )
// }
// const Wrapper = styled.section`
// .sidebar {
//   padding: 16px ;
//   width: 250px;
//   height: 100vh;
//   top: 0;
//   left: 0;
//   transition: ease-in-out .1s;
//   background-color: black;
//   display: flex; 
//   overflow: hidden;
//   flex-direction: column; 
// }
// .sidemobile {
//     display: none;
// }
// .toggle{
//     z-index: 1000;
//     position: absolute;
// }
// .toggle2{
//     z-index: 1000;
//     top: 10%;
//     left: 5%;
//     position: absolute;
//     display: none;
// }
// .toggle2-sub{
//     left: 35%;
// }
// .sidebar.open {
//   width:57px;
//   transition: ease-in-out .1s;
// }
// .nav a{
//     display: flex;
//     flex-direction: row;
//     padding: 5px;
//     gap: 10px;
// }
// .nav{
//     margin-top: 10px;
// }
// svg{
//     font-size: 25px;
//     color: #90EE90;
// }
// .none{
//     display: none ;
// }
// .hide{
//     visibility: hidden;
// }
// .h4{
//     color: white;
 
// }
// .gega{
//     margin-left: 70px;
// }
// .main-dashboard ul li a, .main-dashboard ul li span{
//     color: #90EE90;
// }
// .link-group > h4 {
//     padding-left: 40px;
//     padding-top: 30px;
// }
// .main-dashboard ul li a{
//     display: flex;
//     align-items: center;
//     gap: 10px;
//     padding:10px 5px ;
// }
// .main-setting ul li a{
//     display: flex;
//     align-items: center;
//     gap: 10px;
//     padding:10px 5px;
// }
// .main-setting ul li span{
//     color: #90EE90;
// }
// @media screen and (max-width:900px) {
//     .sidebar{
//         display: none;
//     }
//     .sidebar.open {
//        display: none;
//     }
//     .toggle{
//         display: block;
//     }
//     .sidebar.open{
//         width:10%;
//     }
//     .link-group > h4{
//         padding-top: 20px;
//     }
//     .sidemobile {
//         padding: 16px ;
//         width: 250px;
//         height: 100vh;
//         position: fixed;
//         top: 0;
//         left: -250px;
//         transition: ease-in-out .5s;
//         background-color: black;
//         display: flex; 
//         overflow: hidden;
//         flex-direction: column; 
//     }
//     .sidemobileopen{
//         left: 0px;
//     }
//     .toggle2{
//         z-index: 1000;
//         display: flex;
//     }
// }
// `
// export default SideNavBar;
