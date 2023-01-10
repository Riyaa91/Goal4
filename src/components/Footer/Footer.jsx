import React from 'react'
import './Footer.scss';
import logo from '../../assets/img6.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <div className="footer-container">
        <div className="footer-content">
            <div className='f-img'>
                <img src={logo} alt="" />
            </div>
            <div className='f-c f-c-1'>
                <div className="f-head">
                    <p>About</p>
                </div>
                <div className="f-h-content">
                    <p>About us</p>
                </div>
                <div className="f-h-content">
                    <p>Our Initiatives</p>
                </div>
                <div className="f-h-content">
                    <p>Our Companies</p>
                </div>
            </div>
            <div className='f-c f-c-2'>
                <div className="f-head">
                    <p>Apply</p>
                </div>
                <div className="f-h-content">
                    <p>Apply To Incubator</p>
                </div>
                <div className="f-h-content">
                    <p>Apply For Think Tank</p>
                </div>
            </div>
            <div className='f-c f-c-3'>
                <div className="f-head">
                    <p>Partner</p>
                </div>
                <div className="f-h-content">
                    <p>Partner With Us</p>
                </div>
            </div>
            <div className='f-c f-c-4'>
                <div className="f-head">
                    <p>Contact</p>
                </div>
                <div className="f-h-content">
                    <p>Contact us</p>
                </div>
                
            </div>
        </div>
        <div className="footer-line">
            <p></p>
        </div>
        <div className="footer-last">
            <div className="copyright">
                <p>© 2023 SELF Labs Inc. </p>
            </div>
            <div className="social-media">
                <div className="s-m-bg">
                    <FontAwesomeIcon icon={faTwitter} color="white"/>
                </div>
                <div className="s-m-bg">
                    <FontAwesomeIcon icon={faInstagram} color="white"/>
                </div>
                <div className="s-m-bg">
                    <FontAwesomeIcon icon={faFacebook} color="white"/>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default Footer
