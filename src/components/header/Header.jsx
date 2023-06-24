import Search from "./search/Search";
import "./Header.scss";
import { useState } from "react";
//Logo
import { SiThemoviedatabase } from "react-icons/si";


export default function Header ({setTVShows, setTopMovies, tvShows, topMovies, setMovie}) {
    const [isSearched, setIsSearched] = useState(false);
    return (
        <header>
            <a href=""><SiThemoviedatabase className="logo" /></a> 
            <h1>THE MOVIES DB</h1>
            <ul>
                <li onClick={() => {
                    setTopMovies(false);
                    setTVShows(false);
                    setMovie([false, 0, []])
                    setIsSearched(false)
                    }}><a style={{textDecoration: "none"}}>Home</a></li>
                {topMovies ?  (<li style={{color: 'white'}} onClick={() => {
                    setTopMovies(true);
                    setMovie([false, 0, []])
                    setIsSearched(false)
                    setTVShows(false)
                    }}>
                        Movies
                </li>) : (<li onClick={() => {
                    setTopMovies(true);
                    setMovie([false, 0, []])
                    setIsSearched(false)
                    setTVShows(false)
                    }}>
                        Movies
                </li>) }
                {tvShows ? (<li style={{color: 'white'}} onClick={() => {
                    setTVShows(true);
                    setMovie([false, 0, []])
                    setIsSearched(false)
                    setTopMovies(false)
                    }}>
                        TVShows
                </li>) : (<li onClick={() => {
                    setTVShows(true);
                    setMovie([false, 0, []])
                    setIsSearched(false)
                    setTopMovies(false)
                    }}>
                        TVShows
                </li>) }
                
            </ul>
            <Search className="search" setMovie={setMovie} isSearched={isSearched} setIsSearched={setIsSearched} />
        </header>
    )
}