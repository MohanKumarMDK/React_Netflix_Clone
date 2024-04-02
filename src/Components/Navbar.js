import React, { useEffect, useState } from 'react'
import './Navbar.css'

const Navbar = () => {
  const[show, handleShow] = useState('');

  useEffect(() =>{
    window.addEventListener("scroll",() => {
      if(window.scrollY > 100){
        handleShow(true);
      } else{
        handleShow(false);
      }
    });
  },[])
  return (
    <div className={`nav ${show && "nav__black"}`}>
      <img className='nav-logo'src='https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.svg' alt='Netflix Logo'/> 
     
     <ul>
        <li>Home</li>
        <li>TV Shows</li>
        <li>Movies</li>
        <li>My List</li>
        <li>New & Popular</li>
      </ul>
    
     <div className='search-box'>
        <input 
        type='text'
        placeholder='Search'
        />
      </div>
      <img className='nav-avatar' src='https://static.vecteezy.com/system/resources/previews/020/336/373/original/netflix-logo-netflix-icon-free-free-vector.jpg' alt='Netflix avathar'/>
    </div>
  )
}

export default Navbar