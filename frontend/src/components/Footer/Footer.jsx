import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

export const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
           <div className="footer-content-left">
            <img src={assets.logo} alt="" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui obcaecati at excepturi quibusdam ullam. Aut, impedit amet sapiente laboriosam quasi veniam numquam alias explicabo aperiam eius consequatur reiciendis mollitia beatae.
            um beatae alias temporibus quidem magnam error cupiditate ex molestiae perspiciatis modi consequatur in dolorem aliquid quam blanditiis labore? Debitis deleniti doloremque aut molestias?</p>
              <div className="footer-social-icons">
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
                <img src={assets.linkedin_icon} alt="" />

              </div>
            </div>
            <div className="footer-content-center">
                    <h2>COMPANY</h2>
                    <ul>
                        <li>Home</li>
                        <li>About us</li>
                        <li>Delivery</li>
                        <li>Privacy policy</li>
                    </ul>
                    </div> 
              <div className="footer-content-right">
                 <h2>GET IN TOUCH</h2>
                 <ul>
                    <li>+92-3494924053</li>
                    <li>musabamin703@gmail.com</li>
                 </ul>
                </div> 
                     
        </div>
        <hr />
        <p className='footer-copyright'>Copyright 2024 @ Tomato.com - All Right Reserved </p>
    </div>
  )
}
