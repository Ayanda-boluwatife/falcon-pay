import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Hero = () => {
  return (
    <Wrapper>
        <div className='page-center content'>
            <article>
                <h1>Effortlessly receive<br /> payments from <span className='h-text'>anywhere</span></h1>
                <p>The perfect solution for freelancers and salaried workers.</p>
                <Link className='action-btn'>create account</Link>
            </article>
            <div className='hero-box'>
                <img className='hero-img' src='/images/hero_img.png' alt='hero'/>
            </div>
        </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
margin-top: 2rem;
.content {
    display: flex;
    justify-content: center;
    flex-direction: column-reverse;
}
.action-btn {
    width: 200px;
}
article {
    margin-bottom: 2rem;
}
.hero-box {
    width: 282px;
    height: 282px;
    background-color: var(--off-white);
    border-radius: 50%;
    text-align: center;
    margin: 0 auto;
}
.hero-img {
    height: 300px;
    transform: translateY(-20px);
}
h1 {
    font-size: 1.5rem;
    line-height: 2.5rem;
    font-weight: 600;
}
p {
    font-weight: 500;
    font-size: 1rem;
    line-height: 30px;
    color: rgba(0, 0, 0, 0.7);
    margin-block: 1.5rem 2rem;
}
@media (min-width: 768px) {
    margin-top: 4rem;
    .content {
        display: flex;
        justify-content: space-between;
        flex-direction: row;
        column-gap: 2.5rem;
    }
    p {
        font-size: 20px;
        margin-block: 2rem 2.5rem;
    }
    .hero-box {
        margin: 0;
    }
}
@media (min-width: 992px) {
    margin-top: 6rem;
    h1 {
        font-size: 40px;
    }
    .content {
        align-items: center;
        column-gap: 5rem;
    }
    .hero-box {
        width: 582px;
        height: 582px;
    }
    .hero-img {
        transform: translateY(-70px);
        width: 427px;
        height: 647px;
    }
}
`

export default Hero