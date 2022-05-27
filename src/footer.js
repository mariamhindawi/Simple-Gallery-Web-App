import React from 'react'
import apple from './images/apple.png'
import google from './images/google.png'
import appgallery from './images/appgallery.png'

export default function footer() {
  return (
    <div className='footer'>
        <div className='footer-part'>
        <p>
            Plan your wedding wherever and 
            <br>
            </br>whenever you want on the Weds360 App
        </p>
        <div className='app-container'>
        <li>
            <a  href ="https://apps.apple.com/us/app/weds360/id1437100880">
                <img src ={apple} alt="store"></img>
            </a>
        </li>
        <li>
            <a href="https://play.google.com/store/apps/details?id=com.plus360.weds360">
                <img src ={google} alt="store"></img>
            </a>
        </li>
        <li>
            <a href="https://appgallery.huawei.com/app/C105048519">
                <img src ={appgallery} alt="store" ></img>
            </a>
        
        </li>
        </div>
        </div>
        <div className='footer-part section-2'>
            <ul>
                <li>Support</li>
                <li>Privacy Policy</li>
                <li>Terms and Conditions</li>
            </ul>
        </div>
        <div className='footer-part section-3'>
        <ul>
                <li>Contact Us</li>
                <li><b>Email: </b>lovetohelp@weds360.com</li>
                <li><b>Address:</b> 6B, 12 Aswan Square, Al Agouzah, Giza Governorate 12651</li>
                <li><b>Phone:</b> +201066776677</li>

            </ul>
        </div>
    </div>
  )
}
