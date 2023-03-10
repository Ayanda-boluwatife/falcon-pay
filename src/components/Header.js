import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Hamburger from './Hamburger'
import { IoIosArrowDown } from "react-icons/io"

const Header = () => {
    const [menu, setMenu] = useState(false)
    const [dropdown, setDropdown] = useState(false)
    const dropdownRef = useRef(null)
    const dropdownCont = useRef(null)
    useEffect(() => {
        const height = dropdownRef.current.getBoundingClientRect().height
        if (dropdown) {
            dropdownCont.current.style.height = `${height}px`
        }
        else {dropdownCont.current.style.height = `${0}px`}
    }, [dropdown])
  return (
    <Wrapper>
        <nav className='page-center nav-container'>
            <div className='header-top'>
                <Link to={''}>
                    <img src='/images/falcon_pay_logo.png' alt='falcon pay' />
                </Link>
                <Hamburger menu={menu} toggleMenu={() => setMenu(prev => !prev)} />
            </div>
            <div className={`${menu? 'fixed-nav open': 'fixed-nav'}`}>
                <div className='nav-groups'>
                    <ul className='page-nav nav-links'>
                        <li className={`${dropdown ? 'dropdown-box open': 'dropdown-box'}`}>
                            <div className='idk'>
                                <span>Products</span>
                                <span onClick={() => setDropdown(prev => !prev)}><IoIosArrowDown /></span>
                            </div>
                            <div ref={dropdownCont} className='dropdown-items-box'>
                                <ul ref={dropdownRef} className='dropdown-items'>
                                    <li className='dropdown-item'><Link>Item 1</Link></li>
                                    <li className='dropdown-item'><Link>Item 1</Link></li>
                                    <li className='dropdown-item'><Link>Item 1</Link></li>
                                </ul>
                            </div>
                        </li>
                        <li><Link>About us</Link></li>
                        <li><Link>Support</Link></li>
                    </ul>
                    <ul className='auth-nav nav-links'>
                        <li><Link to={"/signin"}>Login</Link></li>
                        <li><Link to={"/signup"} className='btn action-btn'>Register</Link></li>
                    </ul>
                </div>

            </div>
        </nav>
    </Wrapper>
  )
}

const Wrapper = styled.header`
.header-top {
    display: flex;
    justify-content: space-between;
}
nav {
    padding-top: 1.5rem;
}
a, li {
    font-weight: bold;
    color: #000000;
}
.action-btn {
    color: #90EE90;
}
.idk {
    display: flex;
    gap: .5rem;
    align-items: flex-start;
    cursor: pointer;
}
@media (min-width: 992px) {
    nav {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-top: 2rem;
    }
    .nav-groups {
        display: flex;
        align-items: center;
        gap: 5rem;
    }
    .nav-links {
        display: flex;
        gap: 1rem;
        align-items: center;
    }
}
@media (min-width: 1200px) {
    .nav-links {
        gap: 1.5rem;
    }
}
`

export default Header
