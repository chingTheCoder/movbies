import React , {useEffect, useState } from "react";
import Card from "./Card";
import SearchBar from "./SearchBar";


const Movies = () => {

    const [movies , setMovies] = useState([])

    useEffect(()=> {

        const myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ODczYmI2OWI5MmY1NDNlNjM0YjMzNmZmOGY3NTI1YyIsInN1YiI6IjYzNzY5ZmU0MjU1ZGJhMDBjZDNlODdiOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.TdR4sS3-c8UVey57mWqcz8fKD1_RLlqslN1g-GxDZyI");

        const requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };
        
          fetch("https://api.themoviedb.org/3/trending/movie/week", requestOptions)
            .then(response => response.json())
            .then(result => {
                setMovies(result.results)
            })
            .catch(error => console.log('error', error));

    }, [])
    return (
        <div className="list">
              <SearchBar></SearchBar>
              <div className="track">
                    {
                        movies.filter((item, index) => index < 12).map((card) => (
                            <Card className="card" key={card.id} 
                                title={card.title}
                                image={card.poster_path}
                                description={card.overview}
                                release={card.release_date}
                                rating={card.rating}
                                ></Card>
                        ) )
                    }
                </div>
        </div>
    )
}




export default Movies