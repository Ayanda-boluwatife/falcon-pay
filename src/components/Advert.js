import React from 'react'
import styled from 'styled-components'
import { IoIosCheckmarkCircle } from "react-icons/io"

const Advert = () => {
  return (
   <Wrapper className='bg-black'>
        <div className='page-center content'>
            <article>
                <h2 className='h-text text-large'>Get paid on time, everywhere</h2>
                <p>
                    We paid on time, no matter where you are, with our comprehensive finance platform designed to make receiving payments easy and effortless.
                </p>
                <ul className='ads'>
                    <li className='h-text flex ad'>
                        <span><IoIosCheckmarkCircle /></span>
                        <strong>fast transaction</strong>
                    </li>
                    <li className='h-text flex ad'>
                        <span><IoIosCheckmarkCircle /></span>
                        <strong>Secure transactions</strong>
                    </li>
                    <li className='h-text flex ad'>
                        <span><IoIosCheckmarkCircle /></span>
                        <strong>Customer care</strong>
                    </li>
                    <li className='h-text flex ad'>
                        <span><IoIosCheckmarkCircle /></span>
                        <strong>User-friendly interface</strong>
                    </li>
                </ul>
            </article>
            <div className='img-box'>
                <img className='img' src='/images/advert_img.png' alt='all is well'/>
            </div>
        </div>
   </Wrapper>
  )
}

const Wrapper = styled.section`
padding-block: 3rem 5rem;
.content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column-reverse;
}
article {
    max-width: 500px;
    margin-top: 1rem;
}
p {
    color: var(--white);
    margin-block: 1.5rem 3rem;
    line-height: 150%;
    max-width: 400px;
}
.ads {
    display: grid;
    gap: 1.25rem;
}
.ad {
    font-weight: 500;
    font-size: 1.25rem;
    gap: .5rem;
}
@media (min-width: 576px) {
    .ads {
        grid-template-columns: repeat(2, auto);
    }
}
@media (min-width: 768px) {
    padding: 0;
    .content {
        flex-direction: row;
    }
    .img {
        height: 500px;
    }
}
`

export default Advert