import React from 'react'
import image from './images/logo.png'
export default function vendors() {
  return (
      <>
      <div className='vendors-container'>
      <h1 className='vendors-title'>Featured Vendors</h1>
            <div class="slider">
            <div class="slides">
            <div className='slide'>
                    <div className='image-container'>
                        <img src={image} alt=""></img>
                    </div>
                    <div className='title-container'>
                        <p className='subtitle'>Crave Egypt</p>
                        <p className='title'>Crave Egypt</p>
                    </div>  

                </div><div className='slide'>
                    <div className='image-container'>
                        <img src={image} alt=""></img>
                    </div>
                    <div className='title-container'>
                        <p className='subtitle'>Crave Egypt</p>
                        <p className='title'>Crave Egypt</p>
                    </div>  
                    </div><div className='slide'>
                    <div className='image-container'>
                        <img src={image} alt=""></img>
                    </div>
                    <div className='title-container'>
                        <p className='subtitle'>Crave Egypt</p>
                        <p className='title'>Crave Egypt</p>
                    </div>  

                </div><div className='slide'>
                    <div className='image-container'>
                        <img src={image} alt=""></img>
                    </div>
                    <div className='title-container'>
                        <p className='subtitle'>Crave Egypt</p>
                        <p className='title'>Crave Egypt</p>
                    </div>              
            </div>
        </div>
        </div>    
      </div>
       <div className='news-container'>
            <h1 className='news-title'>New and Notable</h1>
            <div class="slider">
            <div class="slides">
            <div className='slide'>
                    <div className='image-container'>
                        <img src={image} alt=""></img>
                    </div>
                    <div className='title-container'>
                        <p className='subtitle'>Crave Egypt</p>
                        <p className='title'>Crave Egypt</p>
                    </div>  

                </div><div className='slide'>
                    <div className='image-container'>
                        <img src={image} alt=""></img>
                    </div>
                    <div className='title-container'>
                        <p className='subtitle'>Crave Egypt</p>
                        <p className='title'>Crave Egypt</p>
                    </div>  

                </div><div className='slide'>
                    <div className='image-container'>
                        <img src={image} alt=""></img>
                    </div>
                    <div className='title-container'>
                        <p className='subtitle'>Crave Egypt</p>
                        <p className='title'>Crave Egypt</p>
                    </div>  

                </div>
            
            </div>
        </div>
        </div>    
      </>
)
}
