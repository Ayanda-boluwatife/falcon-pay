import React from 'react'
import styled from 'styled-components'

const Loading = () => {
  return (
    <Wrapper>
        <div className='Loading'>
            <div className="green">
                <div className="black"></div>
            </div>
            <h1>Loading...</h1>
        </div>
    </Wrapper>
  )
}
const Wrapper = styled.section`
    
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        width: 100%;
        .loading{
            display: flex;
            flex-direction: row;
        }
    .green{
        height: 80px;
        width: 80px;
        background-color: transparent;
        border-top: 5px solid red;
        border-bottom: 5px solid yellow;
        border-left:5px solid transparent;
        border-right:5px solid transparent;
        border-radius: 50px;
        animation: animate 2s infinite linear;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .black{
        background-color: hsl(180, 29%, 50%);
        height: 40px;
        width: 40px;
        border-radius: 40px;
    }

    @keyframes animate {
        0%{
            transform: rotate(0deg);
        }
        100%{
            transform: rotate(360deg);
        }
    }
`
export default Loading