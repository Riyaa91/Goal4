import React from 'react'
import './Header.scss'
import img from '../../assets/first.png'
const Header = () => {
  return (
    <div className='header-container'>
      <div className='header-heading-1'>
        <p>Goal #4 End Extreme Poverty</p>
      </div>
      <div className='header-img'>
        <img src={img} alt="" />
      </div>
      <div className='header-heading-2'>
        <p>Are you <span>Aware</span> that over <span>736 Million</span> People <span>Worldwide</span> live in <span>Extreme Poverty?</span> </p>
      </div>
      <div className='header-para'>
        <p>That's nearly 10% of the global population, struggling to survive on less than $1.90 a day. But it doesn't have to be this way. In this section, we'll explore the devastating impact of extreme poverty and the ways in which we can work together to end it once and for all.</p>
      </div>
    </div>
  )
}

export default Header
