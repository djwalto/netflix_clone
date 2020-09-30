import React from 'react';
import './App.css';
import TrendingRow from './TrendingRow';
import Row from './Row';


function App() {

  const fetchTrending = `https://api.themoviedb.org/3/trending/all/week?api_key=1a7839295bf8205f4aa7902beeacc6a4&language=en-US`;
  const fetchNetflixOriginals = `https://api.themoviedb.org/3/discover/tv?api_key=1a7839295bf8205f4aa7902beeacc6a4&with_networks=213`;
  const fetchTopRated = `https://api.themoviedb.org/3/movie/top_rated?api_key=1a7839295bf8205f4aa7902beeacc6a4&language=en-US`;
  const fetchActionMovies = `https://api.themoviedb.org/3/discover/movie?api_key=1a7839295bf8205f4aa7902beeacc6a4&with_genres=28`;
  const fetchComedyMovies = `https://api.themoviedb.org/3/discover/movie?api_key=1a7839295bf8205f4aa7902beeacc6a4&with_genres=35`;
  const fetchHorrorMovies = `https://api.themoviedb.org/3/discover/movie?api_key=1a7839295bf8205f4aa7902beeacc6a4&with_genres=27`;
  const fetchRomanceMovies = `https://api.themoviedb.org/3/discover/movie?api_key=1a7839295bf8205f4aa7902beeacc6a4&with_genres=10749`;
  const fetchDocumentaries = `https://api.themoviedb.org/3/discover/movie?api_key=1a7839295bf8205f4aa7902beeacc6a4&with_genres=99`;

  return (
    <div className="App">
      <h1>Netflix</h1>
      <Row title="NETFLIX ORIGINALS" fetchUrl={fetchNetflixOriginals} />
      <Row title="Trending Now" fetchUrl={fetchTrending} />
      <Row title="Top Rated" fetchUrl={fetchTopRated} />
      <Row title="Action Movies" fetchUrl={fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={fetchDocumentaries} />

    </div>
  );
}

export default App;
