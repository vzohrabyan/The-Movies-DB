import { useState, useEffect } from "react";
import { AiFillStar } from "react-icons/ai";
import SlideTvShows from "./slideTvShows/SlideTvShows.jsx";
import "./TVShows.scss";

export default function TVShows ({setMovie}) {
    const [page, setPage] = useState([1, 50]);
    const [shows, setShows] = useState([]);
    useEffect(() => {
        async function getdData () {
          try {
            let data = await fetch("https://imdb-api.com/en/API/Top250TVs/k_2egjjb0z");
            data = await data.json();
            window.localStorage.setItem('shows', JSON.stringify(data.items))
            setShows(data.items);
          } catch (error) {
            console.log(error.message);
          }
        }
        getdData()
      }, []);
    useEffect(() => {
        const storedData = window.localStorage.getItem('shows');
        if (storedData) {
          setShows(JSON.parse(storedData));
        }
      }, []);
    return (
        <>
        <SlideTvShows data={shows} />
        <main>
        <div className="movies">
            {shows && shows.map(movie => {
                if (movie.rank >= page[0] && movie.rank <= page[1]) {
                    return (
                        <div className="movie" onClick={() => {setMovie([true ,movie.id , movie])}} key={movie.id}>
                            <img src={movie.image} style={{width: "200px", height: "300px", transition: "transform 0.3s"}} />
                            <p>{movie.fullTitle}</p>
                            {(Number(movie.imDbRating)).toFixed(0) == 1 ? <div className="rating"><AiFillStar className="star" /></div> : <></>}
                            {(Number(movie.imDbRating)).toFixed(0) == 2 ? <div className="rating"><AiFillStar className="star" /><AiFillStar className="star" /></div> : <></>}
                            {(Number(movie.imDbRating)).toFixed(0) == 3 ? <div className="rating"><AiFillStar className="star" /><AiFillStar className="star" /><AiFillStar className="star" /></div> : <></>}
                            {(Number(movie.imDbRating)).toFixed(0) == 4 ? <div className="rating"><AiFillStar className="star" /><AiFillStar className="star" /><AiFillStar className="star" /><AiFillStar className="star" /></div> : <></>}
                            {(Number(movie.imDbRating)).toFixed(0) == 5 ? <div className="rating"><AiFillStar className="star" /><AiFillStar className="star" /><AiFillStar className="star" /><AiFillStar className="star" /><AiFillStar className="star" /></div> : <></>}
                            {(Number(movie.imDbRating)).toFixed(0) == 6 ? <div className="rating"><AiFillStar className="star" /><AiFillStar className="star" /><AiFillStar className="star" /><AiFillStar className="star" /><AiFillStar className="star" /><AiFillStar className="star" /></div> : <></>}
                            {(Number(movie.imDbRating)).toFixed(0) == 7 ? <div className="rating"><AiFillStar className="star" /><AiFillStar className="star" /><AiFillStar className="star" /><AiFillStar className="star" /><AiFillStar className="star" /><AiFillStar className="star" /><AiFillStar className="star" /></div> : <></>}
                            {(Number(movie.imDbRating)).toFixed(0) == 8 ? <div className="rating"><AiFillStar className="star" /><AiFillStar className="star" /><AiFillStar className="star" /><AiFillStar className="star" /><AiFillStar className="star" /><AiFillStar className="star" /><AiFillStar className="star" /><AiFillStar className="star" /></div> : <></>}
                            {(Number(movie.imDbRating)).toFixed(0) == 9 ? <div className="rating"><AiFillStar className="star" /><AiFillStar className="star" /><AiFillStar className="star" /><AiFillStar className="star" /><AiFillStar className="star" /><AiFillStar className="star" /><AiFillStar className="star" /><AiFillStar className="star" /><AiFillStar className="star" /></div> : <></>}
                            {(Number(movie.imDbRating)).toFixed(0) == 10 ? <div className="rating"><AiFillStar className="star" /><AiFillStar className="star" /><AiFillStar className="star" /><AiFillStar className="star" /><AiFillStar className="star" /><AiFillStar className="star" /><AiFillStar className="star" /><AiFillStar className="star" /><AiFillStar className="star" /><AiFillStar className="star" /></div> : <></>}
                        </div>
                    )
                }    
            })}
        </div>
        <div className="page">
        {page[0] === 1 && page[1] === 50 ? (
            <div className="page-number" style={{backgroundColor: "white"}} onClick={() => {
                setPage([1, 50]);
            }}></div>
        ) : (
            <div className="page-number" onClick={() => {
                setPage([1, 50]);
            }}></div>
        )}
        {page[0] === 51 && page[1] === 100 ? (
            <div className="page-number" style={{backgroundColor: "white"}} onClick={() => {
                setPage([51, 100]);
            }}></div>
        ) : (
            <div className="page-number" onClick={() => {
                setPage([51, 100]);
            }}></div>
        )}
        {page[0] === 101 && page[1] === 150 ? (
            <div className="page-number" style={{backgroundColor: "white"}} onClick={() => {
                setPage([101, 150]);
            }}></div>
        ) : (
            <div className="page-number" onClick={() => {
                setPage([101, 150]);
            }}></div>
        )}
        {page[0] === 151 && page[1] === 200 ? (
            <div className="page-number" style={{backgroundColor: "white"}} onClick={() => {
                setPage([151, 200]);
            }}></div>
        ) : (
            <div className="page-number" onClick={() => {
                setPage([151, 200]);
            }}></div>
        )}
         {page[0] === 201 && page[1] === 250 ? (
                <div className="page-number" style={{backgroundColor: "white"}} onClick={() => {
                    setPage([201, 250]);
                }}></div>
            ) : (
                <div className="page-number" onClick={() => {
                    setPage([201, 250]);
                }}></div>
            )}
        </div>            
    </main>
    </>
    )
}