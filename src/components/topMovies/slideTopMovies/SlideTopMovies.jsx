import React, { useState, useEffect } from 'react';
import "../../slide/Slide.scss"
import "./SlideTopMovies.scss"

const SlideTopMovies = ({ data }) => {
  const slideDatas = [data[3], data[78], data[7], data[77]];
  const slideData = [
    {
      src: "https://variety.com/wp-content/uploads/2017/01/godfather-part-ii.jpg?w=1000&h=563&crop=1",
      title: 'The Godfather Part II (1974)'
    },
    {
      src: 'https://malditosnerds.com/wp-content/uploads/2022/10/0jpg_1624205154jpg-80.jpg',
      title: 'Avengers: Endgame (2019)'
    },
    {
      src: 'https://i0.wp.com/www.nowverybad.com/wp-content/uploads/pulp-fiction_promo1.jpg',
      title: 'Pulp Fiction (1994)'
    },
    {
      src: 'https://static1.colliderimages.com/wordpress/wp-content/uploads/2022/06/Joker-joaquin-pheonix-social-featured.jpg',
      title: 'Joker (2019)'
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const autoplay = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => {
      clearInterval(autoplay);
    };
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slideData.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1) % slideData.length);
  };

  return (
    <div className="container" style={{backgroundImage: "url(https://wallpapercave.com/wp/aWjfWxD.jpg)", backgroundRepeat: "no-repeat",
    backgroundPosition: "center"}}>
      <div className="left-col">
        {slideData.map((slide, index) => (
          <div
            key={index}
            className={`slide ${index === currentSlide ? 'current' : ''} ${index === (currentSlide + 1) % slideData.length ? 'next' : ''}`}
            style={{ backgroundImage: `url(${slide.src})`}}
          >
            <h1 style={{fontSize: "3 rem"}}>{slide.title}</h1>
          </div>
        ))}
      </div>
      <div className="right-col">
        {slideDatas[0] &&
          slideDatas.map((movie, index) => (
            <div
              key={index}
              className={`movie ${index === currentSlide ? 'current' : ''} ${index === (currentSlide + 1) % slideDatas.length ? 'next' : ''}`}
            >
                <img src={movie.image} style={{ width: "200px", height: "300px" }} />
                <p>{movie.fullTitle}</p>
            </div>
          ))}
      </div>
      <ul className="nav">
        <li className="slide-up">
          <a href="#" onClick={prevSlide}>{'<'}</a>
        </li>
        <li className="slide-down">
          <a href="#" onClick={nextSlide}>
            {'>'}
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SlideTopMovies;