import React, { useState, useEffect } from 'react';
import "../../slide/Slide.scss"
import "./SlideTvShows.scss"

const SlideTvShows = ({ data }) => {
  const slideDatas = [data[12], data[1], data[81], data[20]];
  const slideData = [
    {
      src: "https://wallpaperaccess.com/full/25496.jpg",
      title: 'Game of Thrones (2011)'
    },
    {
      src: 'https://occ-0-2433-778.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABbFI2wcwiGkHDdGWaw58hWgLETOBsbqqv6GbKnZFn3s_Y4fjw0Ys9DNYD5txnfV3oj9tgsBeaSnPcBOwQqQnpHVqHeQr9FtvVzaL.jpg?r=776',
      title: 'Breaking Bad (2008)'
    },
    {
      src: 'https://dnm.nflximg.net/api/v6/BvVbc2Wxr2w6QuoANoSpJKEIWjQ/AAAAQdeP6cIoCgEuvTVxzeCYE_m_lyCcLLjh5Zgg4dJWG_JVaO2QV6yistA8kSiqHRFUdMQXWzzroBoK0EpHtPvLgk2sUBW2n_cO6fqXk5b6Kekvd867rQ_hQbIWr97ijOmhy8Yxsu-HFEgPl1tRVElpwwW6GWs.jpg?r=f7e',
      title: 'Peaky Blinders (2013)'
    },
    {
      src: 'https://m.media-amazon.com/images/M/MV5BMjIzNTU4NDQ2MF5BMl5BanBnXkFtZTgwMzEwNTI5MDI@._V1_.jpg',
      title: 'Sherlock (2010)'
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
    <div className="container" style={{backgroundImage: "url(https://wallpaperaccess.com/full/5338806.jpg)", 
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

export default SlideTvShows;