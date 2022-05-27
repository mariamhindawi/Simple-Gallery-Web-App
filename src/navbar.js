import React from 'react'
import logo from './images/logo.png'
import {FaSearch } from "react-icons/fa";

export default function navbar() {
  return (
    <nav  className ='nav-container' role="navigation">
      <div className='brand-logo'>
      <img src={logo} alt=''></img>
      </div>
  
<div className='nav-items-container'>
<ul class="nav-list">
    <li class="nav-item">360 Planner</li>
    <li class="nav-item">Her</li>
    <li class="nav-item">Him</li>
    <li class="nav-item">The Wedding</li>
    <li class="nav-item">Vendors</li>
    <li class="nav-item">Gallery</li>
    <li class="nav-item">Ideas&More</li>
    <li class="nav-item">360 Planner</li>
    <li class="nav-item">Take a tour</li>
  </ul>

  <div className='search-container'>
    <div >
    <FaSearch id="search-icon"></FaSearch>
    </div>
  <input type="text" autocomplete="off" id="search-bar" class="" placeholder="Search"></input>
  </div>
</div>
</nav>
  )
}
