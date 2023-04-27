import React from 'react'
import styled from 'styled-components'
import SideNavBar from '../Asidebar/SideNavBar'
import SearchNavBar from '../SearchComponents/SearchNavBar'
import { BiPlus, BiServer } from 'react-icons/bi'
import { FaShoppingCart  } from 'react-icons/fa';

const Dashboard = () => {
  return (
    <Wrapper>
        <div>
          <SideNavBar />
        </div>
        <div className="main">
          <div>
            <SearchNavBar
              heading= "Dashboard"
            />
          </div>
          <div className="welcome-msg">
            <div className="welcome-1">
              <div>
                <h1>Welcome Jays.....</h1>
                <p>You're on your ways to shine</p>
              </div>
              <div>
                <img src='/bolu-images/dashboard-image.png' alt='' />
              </div>
            </div>
            <div className="welcome-2">
            <h3><BiPlus />Bill Payment</h3>
            </div>
          </div>

          <div className="amount">
            <div className='balance-1'>
                 <p>Account Balance</p>
                 <h1><span>$</span>20,500</h1>
             </div>
             <div className='balance-2'>
                 <p>Dollar Balance</p>
                 <h1><span>$</span>20,500</h1>
             </div>
             <div className='balance-3'>
                 <p>Naira Balance</p>
                 <h1><span>#</span>20,500</h1>
             </div>
          </div>
          <div className='recent page-center'>
              <h3>Recent Activity</h3>
              <button>See all</button>
          </div>

          <div className='table'>
              <table>
                <tr>
                    <th>Transaction</th>
                    <th>Amount</th>
                    <th>Status</th>
                    <th>Date</th>
                </tr>
                <tr>
                    <td><span><BiServer/></span> <span className="shift">transfer to jays</span></td>
                    <td>$3000</td>
                    <td><span className='sent'>sent</span></td>
                    <td>{new Date().toLocaleDateString()} <span><FaShoppingCart/></span></td>
                </tr>
                <tr>
                    <td><span><BiServer/></span><span className="shift">from fiverr account</span></td>
                    <td>$5000</td>
                    <td><span className="receive">received</span></td> 
                    <td>{new Date().toLocaleDateString()} <span><FaShoppingCart/></span></td>
                </tr>
                <tr>
                    <td><span><BiServer/></span><span className="shift">from fiverr account</span></td>
                    <td>$5000</td>
                    <td><span className="receive">received</span></td> 
                    <td>{new Date().toLocaleDateString()} <span><FaShoppingCart/></span></td>
                </tr>
              </table>
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
.welcome-msg{
  display: flex;
  width: 100%;
  justify-content: space-around;
}
.welcome-1{
  background-color: #000;
  color: #90EE93;
  width: 70%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 20px;
  border-radius: 20px;
}
.welcome-2{
  background-color: #90EE93;
  width: 20%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 40px;
  border-radius: 20px;
}
.amount{
  display: flex;
  justify-content: space-around;
  padding-top: 20px;
}
.balance-1{
  background-color:#90EE90;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 28%;
  height: 20vh;
  border-radius: 20px;
}
.balance-2{
  background-color: black;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  color: #90EE90;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 28%;
  height: 20vh;
  border-radius: 20px;
}
.balance-3{
  background-color: white;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 28%;
  height: 20vh;
  border-radius: 20px;
}
.recent{
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 70px;
}
.table{
  padding: 20px;
}
table{
  text-transform: capitalize;
  width: 100%;
  border-collapse: collapse;
  transition: all 1s ease;
}
th,td{
  border-bottom: 1px solid rgba(103, 96, 96, 0.4);
  padding: 10px 0;
}
table tr th:nth-of-type(1){
  width: 38%;
}
table tr th:nth-of-type(4){
  width: 27%;
}
table tr th:nth-of-type(3){
  width: 15%;
}
table tr th:nth-of-type(2){
  width: 20%;
}
table tr td:nth-of-type(1){
  width: 38%;
}
table tr td:nth-of-type(2){
  width: 20%;
  text-align: center;
}
table tr td:nth-of-type(3){
  width: 15%;
  text-align: center;
}
table tr td:nth-of-type(4){
  width: 27%;
  text-align: center;
}
.sent{
  background-color: red;
  border-radius: 25px;
  padding: 3% 7%;
  width: 0;
}
.process{
  border-radius: 25px;
  background-color: #90EE90;
  padding: 3% 7%;
}
.receive{
  background-color: yellow;
  padding: 3% 7%;
  border-radius: 25px;
}
@media screen and (max-width:950px) {
  .welcome-msg{
    flex-direction: column;
    gap: 10px;
    padding: 20px;
  }
  .amount{
    flex-direction: column;
    gap: 10px;
    padding: 20px;
  }
  .balance-1, .balance-2, .balance-3{
    width: 100%;
  }
  .main{
    padding: 10px;
    overflow: hidden;
  }
  .welcome-1, .welcome-2{
    width: 100%;
  }
}
`
export default Dashboard





// import React from 'react'
// import styled from 'styled-components'
// import { BiPlus, BiServer } from 'react-icons/bi'
// import SearchNavBar from '../SearchComponents/SearchNavBar'
// import SideNavBar from '../Asidebar/SideNavBar'
// import { FaShoppingCart  } from 'react-icons/fa';

// const Dashboard = () => {
//   return (
//     <Wrapper>
//         <div className="side">
//             <SideNavBar />
//         </div>
//         <div className='main-main'>
//             <SearchNavBar
//             heading = "Dashboard"
//             inputType = "search"
//             />
//         <div className='first-row'>
//             <div className='welcome-message'>
//                 <div>
//                     <h1>Welcome Jays.....</h1>
//                     <p>You're on your ways to shine</p>
//                 </div>
//                 <div>
//                     <img src='/bolu-images/dashboard-image.png' alt='' />
//                 </div>
//             </div>

//             <div className='bill-payment'>
//                 <h3><BiPlus />Bill Payment</h3>
//             </div>
//         </div>


//         <div className='second-row'>
//             <div className='balance-1'>
//                 <p>Account Balance</p>
//                 <h1><span>$</span>20,500</h1>
//             </div>
//             <div className='balance-2'>
//                 <p>Dollar Balance</p>
//                 <h1><span>$</span>20,500</h1>
//             </div>
//             <div className='balance-3'>
//                 <p>Naira Balance</p>
//                 <h1><span>#</span>20,500</h1>
//             </div>
//         </div>

//         <div className='recent page-center'>
//             <h3>Recent Activity</h3>
//             <button>See all</button>
//         </div>

//         <div className='table'>
//         <table>
//                         <tr>
//                             <th>Transaction</th>
//                             <th>Amount</th>
//                             <th>Status</th>
//                             <th>Date</th>
//                         </tr>
//                         <tr>
//                             <td><span><BiServer/></span> <span className="shift">transfer to jays</span></td>
//                             <td>$3000</td>
//                             <td><span className='sent'>sent</span></td>
//                             <td>{new Date().toLocaleDateString()} <span><FaShoppingCart/></span></td>
//                         </tr>
//                         <tr>
//                             <td><span><BiServer/></span><span className="shift">from fiverr account</span></td>
//                             <td>$5000</td>
//                             <td><span className="receive">received</span></td> 
//                             <td>{new Date().toLocaleDateString()} <span><FaShoppingCart/></span></td>
//                         </tr>
//                     </table>
//         </div>
//         </div>
//     </Wrapper>
//   )
// }
// const Wrapper = styled.section`
// width: 100%;
// background-color: white;
// display: flex;

// .main-main{
//     width: 100%;
//     /* height: 100vh; */
// }
// table{
//     text-transform: capitalize;
//     width: 100%;
//     border-collapse: collapse;
//     transition: all 1s ease;
//     }
//     th,td{
//         border-bottom: 1px solid rgba(103, 96, 96, 0.4);
//         padding: 20px 0;
//     }
//     table tr th:nth-of-type(1){
//         width: 38%;
//     }
//     table tr th:nth-of-type(4){
//         width: 27%;
//     }
//     table tr th:nth-of-type(3){
//         width: 15%;
//     }
//     table tr th:nth-of-type(2){
//         width: 20%;
//     }
//     table tr td:nth-of-type(1){
//         width: 38%;
//     }
//     table tr td:nth-of-type(2){
//         width: 20%;
//         text-align: center;
//     }
//     table tr td:nth-of-type(3){
//         width: 15%;
//         text-align: center;
//     }
//     table tr td:nth-of-type(4){
//         width: 27%;
//         text-align: center;
//     }
//     .sent{
//         background-color: red;
//         border-radius: 25px;
//         padding: 3% 7%;
//         width: 0;
//     }
//     .process{
//         border-radius: 25px;
//         background-color: #90EE90;
//         padding: 3% 7%;
//     }
//     .receive{
//         background-color: yellow;
//         padding: 3% 7%;
//         border-radius: 25px;
//     }
// .welcome-message{
//     background-color: black;
//     color: white;
//     display: flex;
//     justify-content: space-between;
//     align-items: center;
//     width: 70%;
//     padding: 20px;
//     border-radius: 20px;
//     box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
// }
// .welcome-message h1{
//     color: #90EE90;
// }
// .first-row{
//     display: flex;
//     gap: 30px;
//     padding: 40px;
// }
// .bill-payment{
//     background-color: #90EE90;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     gap: 20px;
//     width: 20%;
//     border-radius: 20px;
// }
// .second-row{
//     display: flex;
//     padding-left: 40px;
//     gap: 10px;
// }
// .balance-1{
//     background-color:#90EE90;
//     box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
//     display: flex;
//     flex-direction: column;
//     justify-content: center;
//     align-items: center;
//     width: 30%;
//     height: 20vh;
//     border-radius: 20px;
// }
// .balance-2{
//     background-color: black;
//     box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
//     color: #90EE90;
//     display: flex;
//     flex-direction: column;
//     justify-content: center;
//     align-items: center;
//     width: 30%;
//     height: 20vh;
//     border-radius: 20px;
// }
// .balance-3{
//     background-color: white;
//     box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
//     display: flex;
//     flex-direction: column;
//     justify-content: center;
//     align-items: center;
//     width: 30%;
//     height: 20vh;
//     border-radius: 20px;
// }
// .recent{
//     display: flex;
//     justify-content: space-between;
//     align-items: center;
//     padding: 20px 70px;
// }
// .recent button{
//     background-color: #F7F7F7;
//     border-color: transparent;
//     cursor: pointer;
//     padding: 5px 10px;
// }
// .recent button:hover{
//     border-color: #90EE90;
//     border-radius: 20px;
// }
// .light-mode {
//   background-color: #fff;
//   cursor: pointer;
// }

// .dark-mode {
//   background-color:   #4B4B4B;
//   width: 100%;
//   color: white;
//   cursor: pointer;
// }

// @media screen and (max-width:900px){
//     .first-row{
//         flex-direction: column;
//         gap: 10px;
//     }
//     .second-row{
//         flex-direction: column;
//         gap: 20px;
//         padding-left: 0;
//         padding: 40px;
//     }
//     .balance-1, .balance-2, .balance-3{
//         width: 100%;
//         font-size: 6vw;
//     }
//     .welcome-message{
//         width: 100%;
//         flex-direction: column;
//     }
//     .bill-payment{
//         width: 100%;
//         height: 15vh;
//     }
   
// }
// `
// export default Dashboard;