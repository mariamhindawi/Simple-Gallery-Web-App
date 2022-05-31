import React from 'react'
import {FaSearch } from "react-icons/fa";
import image from './images/logo.png'

export default function photos() {
  return (
    <div className='photos-and-search-container'>
        <div className='photo-search-container'>
            <div className='search-container'>
            <FaSearch id="search-icon"></FaSearch>
            <input type="text" autocomplete="off" id="search-bar" class="" placeholder="Search"></input>
            </div>
            <div className='search-buttons'>
                <button>Search</button>
                <button>Clear search</button>

            </div>
        </div>
        <div className='photos-container'>
        <div className='row'>
            <div className='card'>
                    <img alt="" src={image}></img>
                <div className='card-title'>
                    HELLOOO
                </div>
            </div>
           <div className='card'>
                    <img alt="" src={image}></img>
                <div className='card-title'>
                    HELLOOO
                </div>
            </div>
            <div className='card'>
                    <img alt="" src={image}></img>
                <div className='card-title'>
                    HELLOOO
                </div>
            </div>

            </div>
            <div className='row'>
            <div className='card'>
                    <img alt="" src={image}></img>
                <div className='card-title'>
                    HELLOOO
                </div>
            </div>
            <div className='card'>
                    <img alt="" src={image}></img>
                <div className='card-title'>
                    HELLOOO
                </div>
            </div><div className='card'>
                    <img alt="" src={image}></img>
                <div className='card-title'>
                    HELLOOO
                </div>
            </div>

            </div>
        </div>
   </div>
  )
}
