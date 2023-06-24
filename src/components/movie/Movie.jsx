import { useEffect, useState } from "react";
import { BiArrowBack } from "react-icons/bi";
import { AiFillStar } from "react-icons/ai";
import "./Movie.scss"

const Movie = ({id, apiKey, movie}) => {
    const [movieVideo, setMovieVideo] = useState("");
    const [movieDescription, setMovieDescription] = useState("");
    useEffect(() => {
        async function getMovie () {
            try {
                let movie =  await fetch(`https://imdb-api.com/en/API/YouTubeTrailer/k_2egjjb0z/${id}`);
                let movieTitle = await fetch(`https://imdb-api.com/en/API/Wikipedia/k_2egjjb0z/${id}`);
                movie = await movie.json();
                movieTitle = await movieTitle.json();
                let equalIndex = movie.videoUrl.indexOf('=');
                setMovieVideo(movie.videoUrl.slice(equalIndex + 1));
                setMovieDescription(movieTitle.plotShort.plainText);
                window.localStorage.setItem('movieVideo', JSON.stringify(movieVideo))
                window.localStorage.setItem('movieDescripition', JSON.stringify(movieDescription))
            } catch (error) {
                console.log(error.message);
            }
        }
        getMovie();
    }, []);
    useEffect(() => {
        const storedVideo = window.localStorage.getItem('movieVideo');
        const storedDescripition = window.localStorage.getItem('movieDescripition');
        if (storedVideo && storedDescripition) {
            setMovieDescription(storedDescripition);
            setMovieVideo(storedVideo);
        }
      }, []);
    return (
        <main style={{height: "100%"}}>
            <a href=""><BiArrowBack style={{color: "white", position: "absolute", left: "0",top: "100px", width: "5%", height: "5%"}} /></a>
            <div className="movie-main" style={{backgroundImage: `url(${movie.image})`}}>
            <div className="movie-main-video">
            <div className="movie" key={movie.id}>
                <img src={movie.image} style={{width: "200px", height: "300px"}} />
                <p>{movie.title}</p>
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
            {movieVideo && <iframe style={{border: "none"}} src={`https://www.youtube.com/embed/${movieVideo}`} 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"     
                title="YouTube video player"
                allowFullScreen >
            </iframe>}
            </div>
            {movieDescription && <p style={{color: "white", backgroundColor: "rgba(41, 41, 68, 0.788)", padding: "10px"}}>
                {movieDescription}
            </p>
            }</div>
        </main>
    )
}

export default Movie