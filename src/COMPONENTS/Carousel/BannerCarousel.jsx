import React, { useEffect, useState } from "react";
import { Carousel } from "react-bootstrap";
import axios from "axios";
import { IMG_EXTENTION } from "../TmdbGlobels/Tmdb";
import './BannerCarousel.css' 
function BannerCarousel(props) {
  const [images, setImages] = useState([]);
  console.log("banner-id-in-carousel", props.id);

  useEffect(() => {
    axios
      .get(`https://api.themoviedb.org/3/movie/${props.id}/images?api_key=41bb6dd168471471a2bcdb651c26a79c`)
      .then((response) => {
        console.log("props id receiving", props.id);
        console.log("images", response.data);
        setImages(response.data.backdrops);
      });
  }, [props]); // Include props.id in the dependency array

  // useEffect(() => {
  //   setTimeout(() => {
  //     // Your code here for rendering the Carousel after the delay
  //   }, 4000);
  // }, [images]); // Include images in the dependency array

  return (
    <div className="carousel-shadow">
      <div
        className="carousel"
        style={{
          width: "500px",
          position: "absolute",
          top: "30%",
          left: "60%",
        }}
      >
        <Carousel data-bs-theme="dark" className="carousel-div">
          {images.map((img, index) => (
            <Carousel.Item key={index}>
              <img
                style={{ borderRadius: "20px" }}
                className="d-block w-100"
                src={IMG_EXTENTION + img.file_path}
                alt={`Carousel Image ${index}`}
              />
              {/* <Carousel.Caption>
                <h5>Slide {index + 1} label</h5>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </Carousel.Caption> */}
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </div>
  );
}

export default BannerCarousel;
