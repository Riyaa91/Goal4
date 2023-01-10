import React, { useState } from 'react';
import './Navbar.scss';
import logo from '../../assets/img6.png';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
    const [clicked,setClicked]=useState('false');
    const handleClick=()=>{
        setClicked(!clicked);
    }
  return (
    <div className="nav-container">
        <div className="main-nav">
            <div className="nav-logo">
                <img src={logo} alt="logo" />
            </div>
            <div className={clicked?"main-nav-links":"main-nav-links active"}>
                <Link className='nav-links'>About Us</Link>
                <Link className='nav-links'>Features</Link>
                <Link className='nav-links'>Pricing</Link>
                <Link className='nav-links'>Career</Link>
                <Link className='nav-links'>Blog</Link>
                <Link className='nav-links'>Contact</Link>
                <Link className='nav-links link-login'>Log in</Link>
                <button className="nav-links-btn">Apply</button>
            </div>
            <div className="bars-cross" onClick={handleClick}>
            {
                clicked?
                <FontAwesomeIcon icon={faBars} color='white'/>:
                <FontAwesomeIcon icon={faTimes} color='white'/>
            }
            </div>
        </div>
    </div>
  );
}

export default Navbar;
