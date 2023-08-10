import React, { useEffect, useState } from "react";
import "./Banner.css";
import axios from "axios";
import Button from "react-bootstrap/Button";
import { API_KEY, IMG_EXTENTION, TMBD_LINK } from "../TmdbGlobels/Tmdb";
import BannerCarousel from "../Carousel/BannerCarousel";

function Banner() {
  const [poster, setPoster] = useState(null); 

  useEffect(() => {
    axios
      .get(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`)
      .then((response) => {
        const randomMovieIndex = Math.floor(Math.random() * response.data.results.length);
        setPoster(response.data.results[randomMovieIndex]);
      })
      .catch((error) => {
        console.error("Error fetching movie data:", error);
      });
  }, []);
  // console.log("posterIdPassing",poster.id);

  return (
    <div>
      <div className="banner" style={{ backgroundImage: `url(${IMG_EXTENTION + poster?.backdrop_path})` }}>
        <div className="content">
          {poster && (
            <>
              <h1>{poster.title}</h1>
              <div className="banner-buttons">
                <Button variant="secondary">Play</Button>
                <Button variant="secondary">Next</Button>
              </div>
              <h5>{poster.overview}</h5>
            </>
          )}
        </div>
        {poster?.id && <BannerCarousel id={poster.id} />}
      </div>
      <div className="gradient-banner"></div>
    </div>
  );
}

export default Banner;
