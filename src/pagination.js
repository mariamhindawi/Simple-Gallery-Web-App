import React from 'react'

export default function pagination({postsPerPage,totalPosts,paginate}) {
    const pageNumbers=[];
    for(let i=1;i<=Math.ceil(totalPosts/postsPerPage);i++){
        pageNumbers.push(i);
    }
  return (
   <nav className='pagination-container'>
       <ul className='pagination-list'>
           {pageNumbers.map(number =>(
               <li key={number} className='page-item'>
                    <a onClick ={()=>paginate(number)} href='#' className='page-link'>
                        {number}
                    </a>
               </li>
           ))}
       </ul>
   </nav>
  )
}
