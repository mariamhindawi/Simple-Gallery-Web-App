import React from 'react'
import Navbar from './navbar'
import Footer from './footer'
import Vendors from './vendors'
import Photo_details from './photo_details'


export default function details() {
  return (
<>
<Navbar></Navbar>
<Photo_details></Photo_details>
<Vendors></Vendors>
<Footer></Footer>
</>
    )
}
