import React from 'react'

const Hamburger = ({menu, toggleMenu}) => {
  return (
    <div onClick={toggleMenu} className={`${menu? 'hamburger open' : 'hamburger'}`}>
        <div className='first'></div>
        <div className='second'></div>
        <div className='third'></div>
    </div>
  )
}

export default Hamburger
