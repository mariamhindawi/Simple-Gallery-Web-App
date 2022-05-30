import React from 'react'
import apple from './images/apple.png'
import google from './images/google.png'
import appgallery from './images/appgallery.png'
import { FaFacebook, FaFacebookF, FaInstagram } from 'react-icons/fa'

export default function footer() {
  return (
<>
    <div className='footer'>
        <div className='footer-1'>
            <p>
                Plan your wedding wherever and <br></br>whenever you want on the Weds360 App
            </p>
            <div className='app-image-container'>
                <a  href="https://apps.apple.com/us/app/weds360/id1437100880"><img src={apple} alt="Apple store"></img></a>
                <a href="https://play.google.com/store/apps/details?id=com.plus360.weds360"><img src={google} alt="Play store"></img></a>
                <a href="https://appgallery.huawei.com/app/C105048519"><img src={appgallery} alt="Huwawi store"></img></a>


            </div>
        </div>
        <div className='footer-2'>
            <ul>
                <li>
                    Support
                </li>
                <li>
                    Privacy Policy
                </li>
                <li>
                    Terms and Conditions
                </li>
            </ul>
        </div>
        <div className='footer-3'>
        <ul>
                <li>
                    Contact Us
                </li>
                <li>
                   <b> Email:</b> lovetohelp@weds360.com
                </li>
                <li>
                    <b>Address:</b> 6B, 12 Aswan Square, Al Agouzah, Giza<br></br> Governorate 12651
                </li>
                <li>
                   <b> Phone:</b> +201066776677
                </li>
            </ul>
            
        </div>
        <div className='footer-4'>
        <a href="https://www.facebook.com/Weds360/"><FaFacebookF className='social-icon' ></FaFacebookF></a>

        <a href="https://www.instagram.com/weds360/"><FaInstagram className='social-icon'></FaInstagram></a>
        </div>
    </div>
</>
  )
}
