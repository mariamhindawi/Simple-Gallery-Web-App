import React , {useEffect, useState}from 'react'
import {FaSearch } from "react-icons/fa";
import Pagination  from './pagination';
import {Link} from "react-router-dom";
export default function photos() {
    const [titles, setTitles] = useState([]);
    const [urls, setUrls] = useState([]);
    const [ids, setIds] = useState([]);
    const [posts, setPosts] = useState([{}]);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(6);
    
    useEffect(() => {
        async function fetchData (e) {
            fetch('https://jsonplaceholder.typicode.com/photos')
            .then(response => response.json())
            .then(json => {setPosts(json);
                setTitles(posts.slice(0,30).map( (item) => (item.title)));
                setUrls(posts.slice(0,30).map( (item) => item.url));
                setIds(posts.slice(0,30).map( (item) => item.id));
                
            })
                
        }   
        fetchData();
      });
      //Get current posts
      const indexOfLastPost = currentPage * postsPerPage;
      const indexOfFirstPost = indexOfLastPost - postsPerPage;
      const currentPostTitle = titles.slice(indexOfFirstPost, indexOfLastPost);
      const currentPostUrls = urls.slice(indexOfFirstPost, indexOfLastPost);

      //change page
      const paginate = (pageNumber) => setCurrentPage(pageNumber);

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
                <Link className='card' to={`/${ids[0]}`}>
                    <div className='card'>
                        <img alt="" src={currentPostUrls[0]}></img>
                        <div className='card-title'>
                        {currentPostTitle[0]}
                        </div>
                    </div>
                    </Link>
                    <Link className='card' to={`/${ids[1]}`}>
                    <div className='card'>
                        <img alt="" src={currentPostUrls[1]}></img>
                        <div className='card-title'>
                        {currentPostTitle[1]}
                        </div>
                    </div>
                    </Link>
                    <Link className='card' to={`/${ids[2]}`}>

                    <div className='card'>
                        <img alt="" src={currentPostUrls[2]}></img>
                        <div className='card-title'>
                        {currentPostTitle[2]}
                        </div>
                    </div>
                    </Link>

                </div>
                <div className='row'>
                <Link className='card' to={`/${ids[3]}`}>

                    <div className='card'>
                        <img alt="" src={currentPostUrls[3]}></img>
                        <div className='card-title'>
                        {currentPostTitle[3]}
                        </div>
                    </div>
                    </Link>
                    <Link className='card' to={`/${ids[4]}`}>

                    <div className='card'>
                        <img alt="" src={currentPostUrls[4]}></img>
                        <div className='card-title'>
                        {currentPostTitle[4]}
                        </div>
                    </div>
                    </Link>
                    <Link className='card' to={`/${ids[5]}`}>

                    <div className='card'>
                        <img alt="" src={currentPostUrls[5]}></img>
                        <div className='card-title'>
                        {currentPostTitle[5]}
                        </div>
                    </div>
                    </Link>
                </div>
                <Pagination postsPerPage={postsPerPage} totalPosts={urls.length} paginate={paginate}></Pagination>
            </div>
   </div>
  )
}
