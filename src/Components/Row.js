import React,{useState, useEffect} from 'react'
import './Row.css'
import axios from './axios'
import YouTube from "react-youtube"
import movieTrailer from "movie-trailer"

const Row = ({title, fetchUrl, isLargeRow}) => {
    const base_url = "https://image.tmdb.org/t/p/original/";
    const [movies, setMovies] = useState([]);
    const [trailerUrl, setTrailerUrl] =useState("");

    useEffect (() => {
        const  fetchData = async() => {
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            return request;
        }
        fetchData();
    },[fetchUrl])
    const handleClick = (movie) => {
        if(trailerUrl){
            setTrailerUrl('')
        }
        else{
            movieTrailer(movie?.title || movie?.name || movie?.original_name || "")
            .then(url =>{
                const urlParams = new URLSearchParams(new URL(url).search);
                setTrailerUrl(urlParams.get("v"));
                console.log("Param",urlParams.get("v"))
            }).catch((error) => alert("No Available Trailer"));
        }
    }
    const opts = {
        height : "390",
        width : "100%",
        playerVars : {
            autoplay: 1,
        }
    }
  return (
    <div className='row'>
        <h2>{title}</h2>
        <div className='row__posters'>
            {movies.map((movie) => (
                <img key={movie.id} 
                className={`row__imageposters ${isLargeRow && "row__postersLarge"}`}
                onClick={() => handleClick(movie)}
                src= {`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} 
                alt={movie.name}
                />
            ))}
        </div>
        {trailerUrl && <YouTube videoId={trailerUrl} opts={opts}/>}
    </div>
  );
}

export default Row