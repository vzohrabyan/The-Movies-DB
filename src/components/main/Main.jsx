import { useState } from "react"
import "./Main.scss"
import { AiFillStar } from "react-icons/ai";

export default function Main ({data, setMovie}) {
    const [page, setPage] = useState([1, 25]);
    data = data.filter(movie => {
        return movie.image
    })
    return (
        <main>
            <div className="movies">
                {data && data.map(movie => {
                    if (movie.rank >= page[0] && movie.rank <= page[1]) {
                        return (
                            <div className="movie" onClick={() => {setMovie([true,movie.id, movie])}} key={movie.id}>
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
            {page[0] === 1 && page[1] === 25 ? (
                <div className="page-number" style={{backgroundColor: "white"}} onClick={() => {
                    setPage([1, 25]);
                }}></div>
            ) : (
                <div className="page-number" onClick={() => {
                    setPage([1, 25]);
                }}></div>
            )}
            {page[0] === 26 && page[1] === 50 ? (
                <div className="page-number" style={{backgroundColor: "white"}} onClick={() => {
                    setPage([26, 50]);
                }}></div>
            ) : (
                <div className="page-number" onClick={() => {
                    setPage([26, 50]);
                }}></div>
            )}
            {page[0] === 51 && page[1] === 75 ? (
                <div className="page-number" style={{backgroundColor: "white"}} onClick={() => {
                    setPage([51, 75]);
                }}></div>
            ) : (
                <div className="page-number" onClick={() => {
                    setPage([51, 75]);
                }}></div>
            )}
            {page[0] === 76 && page[1] === 100 ? (
                <div className="page-number" style={{backgroundColor: "white"}} onClick={() => {
                    setPage([76, 100]);
                }}></div>
            ) : (
                <div className="page-number" onClick={() => {
                    setPage([76, 100]);
                }}></div>
            )}
            </div>            
        </main>
    )
}