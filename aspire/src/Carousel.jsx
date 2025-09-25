import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle.min.js";

import carousel1 from "./assets/asp1.jpg";
import carousel2 from "./assets/asp2.jpg";
import carousel3 from "./assets/asp3.jpg";
import carousel4 from "./assets/asp4.jpg";
import carousel5 from "./assets/asp5.jpg";
import carousel6 from "./assets/asp6.jpg";
import carousel7 from "./assets/asp7.jpg";
import carousel8 from "./assets/asp8.jpg";

import "./Carousel.css";


function BootstrapCarousel() {
  const images = [
    carousel1,
    carousel2,
    carousel3,
    carousel4,
    carousel5,
    carousel6,
    carousel7,
    carousel8
  ];

  return (
    <div className="container my-5">
      {/* <h1 className="text-center mb-4"></h1> */}

      <div
        id="aspireCarousel"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        {/* Indicators */}
        <div className="carousel-indicators">
          {images.map((_, index) => (
            <button
              key={index}
              type="button"
              data-bs-target="#aspireCarousel"
              data-bs-slide-to={index}
              className={index === 0 ? "active" : ""}
              aria-current={index === 0 ? "true" : "false"}
              aria-label={`Slide ${index + 1}`}
            ></button>
          ))}
        </div>

        {/* Slides */}
        <div className="carousel-inner">

          
          {images.map((img, index) => (
            <div
              key={index}
              className={index === 0 ? "carousel-item active" : "carousel-item"}
              data-bs-interval="1500" // ✅ interval for each slide
            >
              {/* <img
                src={img}
                className="d-block w-80 h-50 mx-auto"
                alt={`Slide ${index + 1}`}
              /> */}

<img
  src={img}
  className="d-block mx-auto carousel-img"
  alt={`Slide ${index + 1}`}
/>



            </div>
          ))}
        </div>

        {/* Controls */}
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#aspireCarousel"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>

        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#aspireCarousel"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default BootstrapCarousel;
