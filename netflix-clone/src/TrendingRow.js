import React, { useState, useEffect } from 'react'
import axios from './axios';

const base_url = "https://image.tmdb.org/t/p/original/";

function TrendingRow({ title }) {
    const [movies, setMovies] = useState([]);
    const url = "https://api.themoviedb.org/3/trending/all/day?api_key=1a7839295bf8205f4aa7902beeacc6a4";

    // run when page loads
    useEffect(() => {
        // if [], run once when page loads and not again
        async function fetchData() {
            const request = await axios.get(url);
            setMovies(request.data.results);
            return request;
        }
        fetchData();
    }, [url]);


    return (
        <div className="row">
            <h2>{title}</h2>

            <div className="row_posters">

                {movies.map(movie => (
                    <img src={`${base_url}${movie.poster_path}`} alt={movie.name} />
                ))}
            </div>
        </div>
    )
}

export default TrendingRow
