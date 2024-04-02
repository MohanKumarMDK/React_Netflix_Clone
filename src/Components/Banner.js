import React,{useState, useEffect} from 'react'
import "./Banner.css"
import axios from './axios'
import requests from './requests'

const Banner = () => {
    const [movie, setMovies] =useState([])
    
    useEffect(() => {
        const fetchData= async () => {
            const request = await axios.get(requests.fetchNetflixOriginals);
            console.log(request);
            setMovies(request.data.results[Math.floor(Math.random()* request.data.results.length-1)]);
            return request;
        }
        fetchData();
    },[]);
    const truncate=(str,n) =>{
        return str?.length > n ? str.substr(0,n-1) +"..." : str;
    }
  return (
    <div>
        <header className='banner' style={{backgroundSize: "cover",
          backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
          backgroundPosition: "center center",
}}>
    <div className='banner__contents'>
        <h1 className='banner__title'>
            {movie?.title || movie?.name || movie?.original_name}

        </h1>
        <div className='banner__buttons'>
            <button className='banner__button'>Play</button>
            <button className='banner__button'>My List</button>
        </div>
        <h1 className='banner__discription'>
            { truncate(movie?.overview, 150)}
        </h1>
    </div>
    <div className='banner__fadBottom' ></div>
    </header>
    </div>
  )
}

export default Banner