import React from 'react'
import styled from 'styled-components'
import { BiPlus, BiServer } from 'react-icons/bi'
import SearchNavBar from '../SearchComponents/SearchNavBar'
import SideNavBar from '../Asidebar/SideNavBar'

const Dashboard = () => {
  return (
    <Wrapper>
        <div className="side">
            <SideNavBar />
        </div>
        <div className='main-main'>
            <SearchNavBar
            heading = "Dashboard"
            inputType = "search"
            />
        <div className='first-row page-center'>
            <div className='welcome-message'>
                <div>
                    <h1>Welcome Jays.....</h1>
                    <p>You're on your ways to shine</p>
                </div>
                <div>
                    <img src='/bolu-images/dashboard-image.png' alt='' />
                </div>
            </div>

            <div className='bill-payment'>
                <h3><BiPlus />Bill Payment</h3>
            </div>
        </div>


        <div className='second-row page-center'>
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
                <td><BiServer />Transaction to Jays</td>
                <td>$3000</td>
                <td><span className='sent'>sent</span></td>
                <td>12-6-2022</td>
            </tr>
            <tr>
                <td><BiServer />From Fiverr Account</td>
                <td>$5000</td>
                <td><span className='recieved'>Recieved</span></td>
                <td>12-6-2022</td>
            </tr>
            <tr>
                <td><BiServer />Local Bank Transfer</td>
                <td>$3000</td>
                <td><span className='sent'>sent</span></td>
                <td>12-6-2022</td>
            </tr>
            <tr>
                <td><BiServer />Transaction to Jays</td>
                <td>$3000</td>
                <td><span className='processing'>processing</span></td>
                <td>12-6-2022</td>
            </tr>
            <tr>
                <td><BiServer />Transaction to Jays</td>
                <td>$3000</td>
                <td><span className='sent'>sent</span></td>
                <td>12-6-2022</td>
            </tr>
            </table>
        </div>
        </div>
    </Wrapper>
  )
}
const Wrapper = styled.section`
width: 100%;
height: 100vh;
background-color: white;
display: flex;

.main-main{
    width: 100%;
    /* height: 100vh; */
}
table{
    width: 100%;
    background-color: #F7F7F7;
}
tr{
    text-align: center;
}

th{
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
}
.sent{
    background-color: #FE1515;
    padding: 5px 5px;
    width: 15px;
    border-radius: 20px;
}
.processing{
    background-color: #FEE715;
    width: 20px;
    padding: 5px 5px;
    border-radius: 20px;
}
.recieved{
    background-color: #90EE90;
    width: 20px;
    padding: 5px 5px;
    border-radius: 20px;
}
.welcome-message{
    background-color: black;
    color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 70%;
    padding: 20px;
    border-radius: 20px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
.welcome-message h1{
    color: #90EE90;
}
.first-row{
    display: flex;
    justify-content: space-around;
    padding: 40px;
}
.bill-payment{
    background-color: #90EE90;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 30px;
    width: 20%;
    border-radius: 20px;
}
.second-row{
    display: flex;
    justify-content: space-around;
}
.balance-1{
    background-color:#90EE90;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 20%;
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
    width: 20%;
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
    width: 20%;
    height: 20vh;
    border-radius: 20px;
}
.recent{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 70px;
}
.recent button{
    background-color: #F7F7F7;
    border-color: transparent;
    cursor: pointer;
    padding: 5px 10px;
}
.recent button:hover{
    border-color: #90EE90;
    border-radius: 20px;
}
.light-mode {
  background-color: #fff;
  cursor: pointer;
}

.dark-mode {
  background-color:   #4B4B4B;
  width: 100%;
  color: white;
  cursor: pointer;
}

@media screen and (max-width:900px){
    .first-row{
        flex-direction: column;
        gap: 10px;
    }
    .second-row{
        flex-direction: column;
        gap: 10px;
    }
    .balance-1, .balance-2, .balance-3{
        width: 100%;
        font-size: 6vw;
    }
    .welcome-message{
        width: 100%;
        flex-direction: column;
    }
    .bill-payment{
        width: 100%;
        height: 15vh;
    }
    .side{
        display: none;
    }
}
`
export default Dashboard;