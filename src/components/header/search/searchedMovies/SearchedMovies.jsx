import "./SearchedMovies.scss";
import { RxCross1 } from "react-icons/rx";
import { TbFaceIdError } from "react-icons/tb";
export default function SearchedMovies ({data, setData, setMovie, setIsSearched, loading}) {
    if (!loading && Array.isArray(data) && data.length) {
        return <div className="searchedMovies">
                <h3>{data.length} results were found</h3>
                <RxCross1 className="delete" onClick={() => {setIsSearched(false);setData([])}} />
                <div className="searchedMovies-card">
                    {data.map(movie => {
                        if (movie.image) {
                            return (
                                <div className="searchedMovie" onClick={() => {setMovie([true ,movie.id , movie]);setIsSearched(false)}} key={movie.id}>
                                    <img src={movie.image} style={{width: "150px", height: "225px"}} />
                                    <p>{movie.title}</p>
                                </div>
                            )
                        } 
                    })}
                </div>
            </div>
    } else if(!loading) {
        return (
            <div style={{height: "20vh", overflow: "hidden"  }} className="searchedMovies">
                <RxCross1 className="delete" style={{top: "8px"}} onClick={() => {setIsSearched(false); setData([])}} />
                <TbFaceIdError style={{width: "80px", height: "80px", color: "gray", marginTop: "10px"}} />
               <h2 style={{color: "white", fontFamily: 'Ysabeau Office'}}>Not Found </h2> 
            </div>
        )
    } 
    if(loading) {
        return (
            <div style={{height: "20vh", overflow: "hidden" }} className="searchedMovies">
                <div className="loading" style={{marginTop: "30px"}}>
                    <div></div><div></div><div></div>
                </div>
            </div>
        )    
    }
}