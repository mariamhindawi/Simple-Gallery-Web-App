import React , {useEffect, useState}from 'react'
import {useParams} from "react-router-dom";

export default function Photo_details() {
    const [posts, setPosts] = useState([{}]);
    const [photo, setPhoto] = useState({});
    const [titles, setTitles] = useState([]);
    const [urls, setUrls] = useState([]);
    const {id} = useParams();

    useEffect(() => {
        async function fetchData (e) {
            fetch('https://jsonplaceholder.typicode.com/photos/')
            .then(response => response.json())
            .then(json => {setPosts(json);
                setTitles(posts.map( (item) => (item.title)));
                setUrls(posts.map( (item) => item.url));})
        }   
        fetchData();
        async function fetchData2 (e) {
            fetch(`https://jsonplaceholder.typicode.com/photos/${id}`)
            .then(response => response.json())
            .then(json => {setPhoto(json);
            })
        }   
        fetchData2();
      });
  return (
      <>
        <div className='photo-details'>
            <img alt='' src={photo.url}></img>
            <div className='details-title'>
                <h2>
                    {photo.title}
                </h2>
                <h4>{photo.title}</h4>
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
                    <img alt="" src={urls[0]}></img>
                <div className='card-title'>
                    {titles[0]}
                </div>
            </div>
           <div className='card'>
                    <img alt="" src={urls[1]}></img>
                <div className='card-title'>
                {titles[1]}

                </div>
            </div>
            <div className='card'>
                    <img alt="" src={urls[2]}></img>
                <div className='card-title'>
                    {titles[2]}
                </div>
            </div>

            </div>
            <div className='row'>
            <div className='card'>
                    <img alt="" src={urls[3]}></img>
                <div className='card-title'>
                    {titles[3]}

                </div>
            </div>
            <div className='card'>
                    <img alt="" src={urls[4]}></img>
                <div className='card-title'>
                    {titles[4]}

                </div>
            </div><div className='card'>
                    <img alt="" src={urls[5]}></img>
                <div className='card-title'>
                    {titles[5]}

                </div>
            </div>

            </div>
        </div>
        </div>
    </>
  )
}
