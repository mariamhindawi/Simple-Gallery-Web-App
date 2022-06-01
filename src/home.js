import React from 'react'
import Navbar from './navbar'
import Footer from './footer'
import Vendors from './vendors'
import Photos from './photos'
import Photo_details from './photo_details'


export default function home() {
  return (
<>
<Navbar></Navbar>
<Photos></Photos>
<Vendors></Vendors>
<Footer></Footer>
</>
    )
}
