import React , {useEffect, useState}from 'react'
export default function vendors() {
    const [data, setData] = useState([]);
    const [titles, setTitles] = useState([]);
    const [urls, setUrls] = useState([]);


    useEffect(() => {
        async function fetchData (e) {
            fetch('https://jsonplaceholder.typicode.com/photos')
            .then(response => response.json())
            .then(json => {
                setData(json);
                setTitles(data.map( (item) => item.title));
                setUrls(data.map( (item) => item.url));
            })
        }   
        fetchData();
      });
    
  return (
      <>
        <div className='vendors-container'>
            <h1 className='vendors-title'>Featured Vendors</h1>
            <div class="slider">
                <div class="slides">
                    <div className='slide'>
                        <div className='image-container'>
                            <img src={urls[0]} alt=""></img>
                        </div>
                        <div className='title-container'>
                            <p className='subtitle'>Vendors</p>
                            <p className='title'>Vendor 1</p>
                        </div>  
                    </div>
                    <div className='slide'>
                        <div className='image-container'>
                            <img src={urls[11]} alt=""></img>
                        </div>
                        <div className='title-container'>
                        <p className='subtitle'>Vendors</p>
                            <p className='title'>Vendor 2</p>
                        </div>  
                    </div> <div className='slide'>
                        <div className='image-container'>
                            <img src={urls[12]} alt=""></img>
                        </div>
                        <div className='title-container'>
                        <p className='subtitle'>Vendors</p>
                            <p className='title'>Vendor 3</p>
                        </div>  
                    </div> <div className='slide'>
                        <div className='image-container'>
                            <img src={urls[13]} alt=""></img>
                        </div>
                        <div className='title-container'>
                        <p className='subtitle'>Vendors</p>
                            <p className='title'>Vendor 4</p>
                        </div>  
                    </div> <div className='slide'>
                        <div className='image-container'>
                            <img src={urls[14]} alt=""></img>
                        </div>
                        <div className='title-container'>
                        <p className='subtitle'>Vendors</p>
                            <p className='title'>Vendor 5</p>
                        </div>  
                    </div> <div className='slide'>
                        <div className='image-container'>
                            <img src={urls[15]} alt=""></img>
                        </div>
                        <div className='title-container'>
                        <p className='subtitle'>Vendors</p>
                            <p className='title'>Vendor 6</p>
                        </div>  
                    </div> <div className='slide'>
                        <div className='image-container'>
                            <img src={urls[16]} alt=""></img>
                        </div>
                        <div className='title-container'>
                        <p className='subtitle'>Vendors</p>
                            <p className='title'>Vendor 7</p>
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
                            <img src={urls[0]} alt=""></img>
                        </div>
                        <div className='title-container'>
                            <p className='subtitle'>Title</p>
                            <p className='title'>Sub-title</p>
                        </div>  
                    </div>
                    <div className='slide'>
                        <div className='image-container'>
                        <img src={urls[1]} alt=""></img>
                        </div>
                        <div className='title-container'>
                            <p className='subtitle'>Title</p>
                            <p className='title'>Sub-title</p>
                        </div>  
                    </div><div className='slide'>
                        <div className='image-container'>
                        <img src={urls[2]} alt=""></img>
                        </div>
                        <div className='title-container'>
                            <p className='subtitle'>Title</p>
                            <p className='title'>Sub-title</p>
                        </div>  
                    </div><div className='slide'>
                        <div className='image-container'>
                        <img src={urls[3]} alt=""></img>
                        </div>
                        <div className='title-container'>
                            <p className='subtitle'>Title</p>
                            <p className='title'>Sub-title</p>
                        </div>  
                    </div><div className='slide'>
                        <div className='image-container'>
                        <img src={urls[4]} alt=""></img>
                        </div>
                        <div className='title-container'>
                            <p className='subtitle'>Title</p>
                            <p className='title'>Sub-title</p>
                        </div>  
                    </div><div className='slide'>
                        <div className='image-container'>
                        <img src={urls[5]} alt=""></img>
                        </div>
                        <div className='title-container'>
                            <p className='subtitle'>Title</p>
                            <p className='title'>Sub-title</p>
                        </div>  
                    </div>
                    <div className='slide'>
                        <div className='image-container'>
                        <img src={urls[6]} alt=""></img>
                        </div>
                        <div className='title-container'>
                            <p className='subtitle'>Title</p>
                            <p className='title'>Sub-title</p>
                        </div>  
                    </div><div className='slide'>
                        <div className='image-container'>
                        <img src={urls[7]} alt=""></img>
                        </div>
                        <div className='title-container'>
                            <p className='subtitle'>Title</p>
                            <p className='title'>Sub-title</p>
                        </div>  
                    </div>
                </div>
            </div>
        </div>    
      </>
)
}
