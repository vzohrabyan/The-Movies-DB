import React, { useState, useEffect } from 'react';
import "./Slide.scss"

const Slide = ({ data }) => {
  const slideDatas = [data[9], data[24], data[92], data[82]];
  const slideData = [
    {
      src: "https://www.koimoi.com/wp-content/new-galleries/2023/05/its-half-a-century-keanu-reeves-john-wick-chapter-4-completes-50-successful-days-and-still-running-at-the-indian-box-office-001.jpg",
      title: 'John Wick: Chapter 4'
    },
    {
      src: 'https://media.gq-magazine.co.uk/photos/621688bb1feae1d12c8572d1/16:9/pass/230222_oppenheimer_HP.jpg',
      title: 'Oppenheimer'
    },
    {
      src: 'https://pbs.twimg.com/media/FUH9FBvaIAArQA5?format=jpg&name=4096x4096',
      title: 'Bullet Train'
    },
    {
      src: 'https://www.film.ru/sites/default/files/styles/thumb_685x385/public/trailers_frame/50383367-2493993.jpeg',
      title: 'The Mother'
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
    <div className="container">
      <div className="left-col">
        {slideData.map((slide, index) => (
          <div
            key={index}
            className={`slide ${index === currentSlide ? 'current' : ''} ${index === (currentSlide + 1) % slideData.length ? 'next' : ''}`}
            style={{ backgroundImage: `url(${slide.src})`}}
          >
            <h1>{slide.title}</h1>
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

export default Slide;