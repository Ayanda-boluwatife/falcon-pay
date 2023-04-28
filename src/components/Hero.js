import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Hero = () => {
  return (
    <Wrapper>
        <div className='page-center content'>
            <article>
                <h1 className='text-large'>Effortlessly receive<br /> payments from <span className='h-text'>anywhere</span></h1>
                <p>The perfect solution for freelancers and salaried workers.</p>
                <Link to={"/signup"} className='action-btn'>create account</Link>
            </article>
            <div className='hero-box'>
                <img className='hero-img' src='/images/hero_img.png' alt='hero'/>
            </div>
        </div>
        <div className='page-center text-center platforms-container'>
            <h3>our supported platform include:</h3>
            <div className='platforms'>
                <img src='/images/fiverr_logo.png' alt='fiverr' />
                <img src='/images/upwork_logo.png' alt='upwork' />
                <img src='/images/paypal_logo.png' alt='paypal' />
                <img src='/images/stripe_logo.png' alt='stripe' />
            </div>
            <h3 className='text-large'>Empower Your Finances with<br className='dsk'/> Our Advanced Platform Features</h3>
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
p {
    font-weight: 500;
    font-size: 1rem;
    line-height: 30px;
    color: rgba(0, 0, 0, 0.7);
    margin-block: 1.5rem 2rem;
}
.platforms-container {
    padding-block: 1rem 5rem;
}
.platforms {
    display: flex;
    justify-content: center;
    gap: .5rem 1rem;
    flex-wrap: wrap;
    margin-block: 1.5rem 5rem;
    img {
        height: 25px;
        width: 100px;
    }
}
.dsk {
    display: none;
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
    .platforms-container {
        padding-top: 5rem;
    }
    .dsk {
        display: block;
    }
}
@media (min-width: 992px) {
    margin-top: 6rem;
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
    article{
        margin-top: 20px;
    }
}
`

export default Hero