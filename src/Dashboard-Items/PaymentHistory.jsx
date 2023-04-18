import React from 'react';
import { BiServer } from 'react-icons/bi'
import { FaShoppingCart  } from 'react-icons/fa';
import styled from 'styled-components';
import SideNavBar from '../Asidebar/SideNavBar';
import SearchNavBar from '../SearchComponents/SearchNavBar';
const PaymentHistory = () => {
  return (

    <Wrapper>
            <div className="slide">
                <SideNavBar />
            </div>
            <main>
                <div>
                    <SearchNavBar
                        heading = 'Payment History'
                        inputType = "search"
                    />
                </div>
                <div className="border-top">
                    <div className="middle">
                        <h3>Transaction Overview</h3>
                        <div>
                        <select name='' id=''>
                            <option value="">Filter</option>
                            <option value="">Amount</option>
                            <option value="">Status</option>
                            <option value="">Date</option>
                        </select>
                        </div>
                    </div>
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
                        <tr>
                            <td><span><BiServer/></span> <span className="shift">transfer to jays</span></td>
                            <td>$3000</td>
                            <td><span className="process">processing</span></td>
                            <td>{new Date().toLocaleDateString()} <span><FaShoppingCart/></span></td>
                        </tr>
                        <tr>
                            <td><span><BiServer/></span> <span className='shift'>transfer to jays</span></td>
                            <td>$3000</td>
                            <td><span className='sent'>sent</span></td>
                            <td>{new Date().toLocaleDateString()} <span><FaShoppingCart/></span></td>
                        </tr>
                    </table>
                </div>
            </main>
    </Wrapper>

    )
}

const Wrapper = styled.section`
display: flex;
    main{
        width: 100%;
        padding: 0 30px;
        transition: all 1s ease;

    }
    .border-top{
        border-top: 1px solid black;
    }
    .middle{
        display: flex;
        justify-content: space-between;
        width: 100%;
        padding: 0 40px;
        margin-top: 30px;
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
    .shift{
        margin-left: 15px;
    }
    @media screen and (max-width: 950px) { 
        /* .slide{
            display: none;
        } */
        main{
            padding: 0 5px;
        }
    }

`

export default PaymentHistory;