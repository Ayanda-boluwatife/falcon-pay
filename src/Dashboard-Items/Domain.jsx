import React from 'react';
import styled from 'styled-components';
import SideNavBar from '../Asidebar/SideNavBar'
import SearchNavBar from '../SearchComponents/SearchNavBar'
import { BiServer } from 'react-icons/bi'
import { FaShoppingCart  } from 'react-icons/fa';


const Domain = () => {
  return (
    <Wrapper>
        <div>
            <SideNavBar/>
        </div>
        <div className='main'>
            <div>
                <SearchNavBar
                heading = "Domain Account"
                inputType = "search"
                />
            </div>
            <div className="main-acct">
              <div className='account'>
                <h1>Account Number</h1>
                <span>22-334-445-667</span>
              </div>
              <div className='btn-group'>
                <button className='btn-1'>Recieve</button>
                <button className='btn-2'>Send</button>
              </div>
              <h1>TRANSACTION HISTORY</h1>
              <div className="table">
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
                          <td><span><BiServer/></span> <span className='shift'>local bank transfer</span></td>
                          <td>$3000</td>
                          <td><span className='sent'>sent</span></td>
                          <td>{new Date().toLocaleDateString()} <span><FaShoppingCart/></span></td>
                      </tr>
                  </table>
              </div>
            </div>
        </div>
    </Wrapper>
  )
}
const Wrapper =styled.section`
display:flex;
/* width:100%; */

.main{
  width: 100%;
  padding: 20px;
}

.account{
  background: linear-gradient(to right, #000, #90EE90);
  color: #90EE90;
  padding: 50px;
}

.main-acct{
  padding-left: 20px;
}

.btn-group{
  display: flex;
  justify-content: end;
  align-items: flex-end;
  gap: 20px;
  padding-top: 20px;
}

.btn-1{
  padding: 15px 40px;
  cursor: pointer;
  border: none;
  border-radius: 10px;
}
.btn-2{
  padding: 15px 40px;
  cursor: pointer;
  border: none;
  border-radius: 10px;
  background-color: #90EE90;
}
table{
        text-transform: capitalize;
        width: 100%;
        border-collapse: collapse;
        transition: all 1s ease;
    }
    th,td{
        border-bottom: 1px solid rgba(103, 96, 96, 0.4);
        padding: 20px 0;
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
`
export default Domain