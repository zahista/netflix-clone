import {React, useState, useEffect} from 'react'
import axios from './axios';
import "./Row.css"

function Row({ title, fetchURL, isLargeRow }) {
    const base_url = "https://image.tmdb.org/t/p/original";
    
    const [movies, setMovies] = useState([]);

    useEffect(()=>{
        //run this code when component is mounted or when the fetchURL changes
       async function fetchData(){
        const request = await axios.get(fetchURL);
        setMovies(request.data.results);
    }
        fetchData();
        console.log(movies)
},[fetchURL]);


    return (
        <div className='row'>
            <h1 className='row__name'>{title}</h1>
            <div className='row__posters'>
                {movies.map((movie) =>
                    <img
                        key={movie.id}
                        src={isLargeRow ? `${base_url}${movie.poster_path}` : `${base_url}${movie.backdrop_path}`}
                        className={isLargeRow ? 'row__posterLarge' : 'row__poster' }
                    />
                    )}
            </div>
        </div>
    )
}

export default Row
