import React from 'react'
import image from './images/logo.png'

export default function Photo_details() {
  return (
      <>
        <div className='photo-details'>
            <img alt='' src={image}></img>
            <div className='details-title'>
                <h2>
                    Details title
                </h2>
                <h4>Details description</h4>
                <div className='social-icons'>

                </div>
            </div>
        </div>
        <div className='related-photos'>
            <h1>
                Related Photos
            </h1>
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
    </>
  )
}
