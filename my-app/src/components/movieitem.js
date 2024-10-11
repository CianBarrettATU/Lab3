const MovieItem = (props)=>{
    return(
        <div>
            <h3>
                {props.mymovie.Title}
                {props.mymovie.Year}
                
            </h3>
            <img src={props.mymovie.Poster}></img>
        </div>
    );
}

export default MovieItem;