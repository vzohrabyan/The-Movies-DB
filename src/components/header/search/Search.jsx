import "./Search.scss";
import SearchedMovies from "./searchedMovies/SearchedMovies";
import { useState, useEffect } from "react";
//icon
import { CiSearch } from "react-icons/ci";

export default function ({setMovie, isSearched, setIsSearched}) {
    const [inputText, setInputText] = useState("");
    const [searchedText, setSearchedText] = useState(inputText);
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const apiKey = 'k_njz4b8cp';

    useEffect(() => {
        const url = `https://imdb-api.com/en/API/SearchMovie/${apiKey}/${searchedText};`;
        async function searchMovie () {
            try {
                let data = await fetch(url);
                data = await data.json();
                if (data) {
                    setData(data.results);
                } else {
                    setData(null)
                }
            } catch (error) {
                console.log(error.message);
            } finally {
                setLoading(false);
            }
        }

        if (searchedText.trim() !== "") {
            searchMovie();
        }
    }, [searchedText, apiKey]);

    
    return(
        <>
            <form>
                <input type="text" placeholder="Search" value={inputText} onChange={(e) => {setInputText(e.target.value);}} />
                <CiSearch className="button"
                    onClick={() => {
                        inputText.trim() 
                        setSearchedText(inputText.trim().toLowerCase());
                        if (inputText.trim()) {
                            setIsSearched(true); 
                        }
                        setLoading(true)
                        setInputText("");
                    }} />
            </form>
            {isSearched && <SearchedMovies data={data} setData={setData} setMovie={setMovie} setIsSearched={setIsSearched} loading={loading}/>}
        </>
    )
}