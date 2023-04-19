import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import SearchNavBar from '../Asidebar/SideNavBar'
import uba from '../components/uba.png'

const Localbank = () => {
  return (
    <Wrapper>
        <div>
            <SearchNavBar/>
        </div>
        <div className='top'>
            {/* <div className='draw'>
                <SearchNavBar />
            </div> */}
            <div className='bank'>
                <div>
                    <h3>Local Bank Account</h3>
                </div>
                <div className='alimi'>
                    <div className='alimi-1'>
                        <div>
                            <h3>ALIMI MUHAMMAD JAMIU</h3>
                        </div>
                        <div className='img'>
                            <img src={uba} alt="" />
                        </div>

                    </div>
                    <div className='alimi-1'>
                        <p>Expire date:  08/2028</p>
                        <p>234xxxxxxxx554</p>
                    </div>
                </div>
                <div className='butt'>
                    <div className='butt-1'>
                        <button>Add New Account</button>
                    </div>
                    <div className='bun'>
                        <button><Link to={'/domain'}>Continue</Link></button>
                    </div>
                </div>
            </div>
        </div>
    </Wrapper>
  )
}


const Wrapper = styled.div`
display:flex;
width:100%;
.bank{
    display:flex;
    flex-direction:column;
    gap:20px;
    margin-top:120px;
}
.butt{
    display:flex;
    width:100%;
    gap:20px;
}
.bun button{
  background-color: lightgreen;
  padding: 15px ;
  border: none;
  border-radius:10px;
  font-size:20px;
  width:100%;

}
.butt-1 button{
  background-color: #F7F7F7;
  padding: 15px ;
  border: none;
  border-radius:10px;
  font-size:20px;
  width:100%;
}
.top{
    width:100%;
    padding:40px 70px;
}
.draw{
    display:flex;
    align-items:center;
}
.img img{
    height:5vh;
}
.alimi{
    background-color:#F7F7F7;
    display:flex;
    flex-direction:column;
    gap:30px;
    padding:20px 50px;
    border-radius:20px;
    width:100%;
}
.alimi-1{
    display:flex;
    justify-content:space-between;
}
@media screen and (max-width:950px) {
   .butt{
    flex-direction: column;
   } 
   .butt-1 button{
    width: 100%;
   }
    
}
`
export default Localbank