import React, {useState} from 'react'
import logo from './images/logo.png'
import {FaBars, FaSearch } from "react-icons/fa";

export default function navbar() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [display, setDisplay] = useState('nav-items-mobile show');
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [isActive, setActive] = useState("false");
  const handleToggle = () => {
    setActive(!isActive);
    if(isActive){
      setDisplay('nav-items-mobile not-show');
    }
    else{
        setDisplay('nav-items-mobile show');
    }
  };
  return (
<>
<div className='navbar-desktop'>
    <div className='nav-logo'>
      <img src={logo} alt="logo"></img>
    </div>
   <div className='nav-container'>
    <div className='nav-list-container'>
        <ul class="nav-list">
          <li class="nav-item">360 Planner</li>
          <li class="nav-item">Her</li>
          <li class="nav-item">Him</li>
          <li class="nav-item">The Wedding</li>
          <li class="nav-item">Vendors</li>
          <li class="nav-item">Gallery</li>
          <li class="nav-item">Ideas&More</li>
          <li class="nav-item">Take a tour</li>
        </ul>
      </div>
      <div className='search-container'>
        <FaSearch id="search-icon"></FaSearch>
        <input type="text" autocomplete="off" id="search-bar" class="" placeholder="Search"></input>
      </div>
   </div>
</div>
<div className='navbar-mobile'>
  <div className='nav-logo'>
      <img src={logo} alt="logo"></img>
    </div>
    <div className='search-container'>
        <FaSearch id="search-icon"></FaSearch>
        <input type="text" autocomplete="off" id="search-bar" class="" placeholder="Search"></input>
      </div>
    <div className='bars' onClick={handleToggle}>
      <FaBars className='bars'></FaBars>
    </div>
   
</div>
<div className={display}>
    <ul class="nav-list-mobile">
    <li class="nav-item"> > 360 Planner</li>
    <li class="nav-item"> > Her</li>
    <li class="nav-item"> > Him</li>
    <li class="nav-item"> > The Wedding</li>
    <li class="nav-item"> > Vendors</li>
    <li class="nav-item"> > Gallery</li>
    <li class="nav-item"> > Ideas&More</li>
    <li class="nav-item"> > 360 Planner</li>
    <li class="nav-item"> > Take a tour</li>
  </ul>
    </div>
</>

  )
}
