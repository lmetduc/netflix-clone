import React from 'react';
import { useState, useEffect } from 'react';
import "./Banner.scss";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import requests from "../config/Requests";
import axios from 'axios';

function Banner() {

    const [movie, setMovie] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchTrending);

        setMovie(
            request.data.results[
                Math.floor(Math.random() * request.data.results.length - 1)
            ]
        );
    }
    }, []);

    return (
        <header className='banner'>
        <div className='banner__content'>
            <h1 className='banner__title'>Titre</h1>
            <p className='banner__description'>
                Lorem ispum

            </p>
            <div className='banner__buttons'>
                <button className='banner__button banner__button--play'><PlayArrowIcon/>Lecture</button>
                <button className='banner__button'><HelpOutlineIcon/>Plus d'infos</button>

            </div>

        </div>
        </header>
    )
}
export default Banner