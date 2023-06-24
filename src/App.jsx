import { useState, useEffect } from 'react';
import './App.scss';
import Header from "./components/header/Header.jsx";
import Main from "./components/main/Main.jsx";
import Slide from "./components/slide/Slide";
import Movie from "./components/movie/Movie";
import TVShows from './components/tvShows/TVShows';
import Top250Movies from './components/topMovies/topMovies';

function App() {
const apiKey = 'k_njz4b8cp';
const url = `https://imdb-api.com/en/API/MostPopularMovies/${apiKey}`;
const [data, setData] = useState([]);
const [loading, setLoading] = useState(true);
const [topMovies, setTopMovies] = useState(false);
const [tvShows, setTVshows] = useState(false);
const [movie, setMovie] = useState([false, 0, []]);
  useEffect(() => {
    async function getdData () {
      try {
        let data = await fetch(url);
        data = await data.json();
        window.localStorage.setItem('movies', JSON.stringify(data.items))
        setData(data.items);
      } catch (error) {
        console.log(error.message);
      }finally {
        setLoading(false);
      }
    }
    getdData()
  }, []);
useEffect(() => {
  const storedData = window.localStorage.getItem('movies');
  if (storedData) {
    setData(JSON.parse(storedData));
    setLoading(false);
  }
}, []);
  return (
    <div className="App">
      <Header setTVShows={setTVshows} setTopMovies={setTopMovies} tvShows={tvShows} topMovies={topMovies} setMovie={setMovie}/>
      {!movie[0] && !tvShows && !topMovies && <Slide data={data} />}
      {!movie[0] && !tvShows && !topMovies && <Main data={data} setMovie={setMovie}/>}
      {movie[0] && <Movie id={movie[1]}  apiKey={apiKey} movie={movie[2]}  />}
      {!movie[0] && !topMovies && tvShows && <TVShows setMovie={setMovie}/>}
      {!movie[0] && !tvShows && topMovies && <Top250Movies setMovie={setMovie}/>}
    </div>
  );
}

export default App;