import React, { useEffect, useState } from "react";
import "./Rowposter.css";
import axios from "axios";
import YouTube from "react-youtube";
import { API_KEY, IMG_EXTENTION, UPCOMING } from "../TmdbGlobels/Tmdb";
function Rowposter(props) {
  const [urlId, setUrlId] = useState('')
  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 0,
    },
  };
  const [newMovies, setNewMovies] = useState([]);
  useEffect(() => {
    axios.get(props.apiurl).then((upcomin) => {
      console.log("list", upcomin.data.results);
      setNewMovies(upcomin.data.results);
    });
  }, []);
  const handleMovieTrailer = (id) => {
    axios.get(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}&language=en-US`)
      .then((response) => {
        console.log("movie",response.data.results);
        
        setUrlId(response.data.results[0])
      })
      .catch((error) => {
        console.error('Error fetching movie trailer:', error);
      });
  };
  
  return (
    <div className="poster">
      <h2>{props.title} </h2>

      <div className={props.isSmall ? "poster-small" : "poster-imgs"}>
        {newMovies.map((posters,index) => {
          return (
           <div style={{display:'flex',justifyContent:'center',alignItems:'center',textAlign:'center'}} key={index} >
             <img
              onClick={() => handleMovieTrailer(posters.id)}
              src={IMG_EXTENTION + posters.backdrop_path}
              alt=""
              
            />
            <p style={{display:'block',fontFamily:'cursive',fontWeight:'bolder'}}  >{posters.original_title} </p>

           </div>
          );
        })}
      </div>
     { urlId &&  <YouTube opts={opts} videoId={urlId.key} />}
    </div>
  );
}

export default Rowposter;
