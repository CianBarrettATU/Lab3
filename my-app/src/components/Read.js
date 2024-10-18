import Movies from "./movies";
import { useEffect, useState } from "react";
import axios from "axios";

//used to read and display movie data
const Read = ()=> {
//data array stores movie info
    const [movies, setMovies] = useState([])

    //life cycle hook detects events
    useEffect(() => {
        axios.get("https://jsonblob.com/api/jsonblob/1287718524221775872")
          .then((response) => {
            setMovies(response.data.movies);
          })
          .catch((error) => {
            console.log(error);
          });
      }, []);

    return(
        <div>
            <h3>hello from from read component</h3>
            <Movies myMovies={movies}/>
        </div>
        
    );
}
export default Read;