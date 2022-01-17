import { React, useEffect, useState } from 'react'
import axios from "./axios";
import "./Header.css";
import PlayCircleFilledWhiteIcon from '@mui/icons-material/PlayCircleFilledWhite';


function Header({ fetchURL }) {
    const base_url = "https://image.tmdb.org/t/p/original";

    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    const [movie, setMovie] = useState([]);

    useEffect(() => {
        async function fetchData(){
            const request = await axios.get(fetchURL);
            setMovie(request.data.results[getRandomInt(0,20)])
        }
        fetchData();
    }, [fetchURL])
    
    console.log(movie);

    return (
        
            <div
                className='header__banner'
                style={{
                    backgroundSize : "cover",
                    backgroundImage : `url(${base_url+movie.backdrop_path})`,
                    backgroundPosition : "top center",
                }}>
               
            
                <div className='header__LeftSide'>
                    <div className='header__movieInfo'>
                        <h1 className='header__movieName'>{movie.name}</h1> 
                        <p className='header__movieOverview'>{movie.overview}</p>
                    <button><PlayCircleFilledWhiteIcon sx={{marginRight: 2}} />Přehrát</button>
                    </div>
                </div>

                <div className='header__bottomGradient'/>
                
            </div>
        
    )
}

export default Header
