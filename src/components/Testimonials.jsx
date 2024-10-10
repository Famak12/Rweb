import React, { useState } from "react";
import { slides } from "./Data/CarouselData.json";
import "./Testimonials.css";
import {BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import 'animate.css';


function Testimonials( ) {

    const [slide, setSlide] = useState(0);

    const nextSlide = () => {
      setSlide(slide === slides.length - 1 ? 0 : slide + 1);
    };
  
    const prevSlide = () => {
      setSlide(slide === 0 ? slides.length - 1 : slide - 1);
    };

    return (
        <section className="testimonials-main">
            <h1 className="heading1" style={{marginTop: "10rem"}}>Testimonials from Our Clients</h1>
       
        <div className="carousel">
                <BsArrowLeftCircleFill onClick={prevSlide} className="arrow arrow-left" />
            {slides.map((item, idx) => 
                { return <div className={slide === idx ? "slide animate__animated animate__fadeIn animate__slower" : "slide slide-hidden "}>
                    <div className="card">
                     <div className="top">
                        <h2 className="name">{item.name}</h2>
                      <img className="circle-img" src={item.imageURL} alt="avatar_img"/>
                      </div>
                        <div className="bottom">
                        <p className="info">{item.testimony}</p>
                      </div>
                      </div>
                    </div> }
            )}
               <BsArrowRightCircleFill onClick={nextSlide} className="arrow arrow-right animate__animated animate__heartBeat"/>
               <span className="indicators">
        {slides.map((_, idx) => {
          return (
            <button key={idx} className={slide === idx ? "indicator" : "indicator indicator-inactive"} onClick={() => setSlide(idx)}>
            </button>
          );
        })}
      </span>
        </div>
        </section>
    )
}

export default Testimonials;