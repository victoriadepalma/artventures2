import { useState, useEffect } from "react";
import "./Carousel.css";
import img1 from "../../assets/imagenes/biblioteca.jpg";
import img2 from "../../assets/imagenes/cara1.png";
import img3 from "../../assets/imagenes/gandhi.png";
import img4 from "../../assets/imagenes/escultura.png";

export const Carousel = ({ obras }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const autoScroll = true;
  let slideInterval;
  let intervalTime = 3000;
  const nextSlide = () => {
    setCurrentSlide(currentSlide === obras.length - 1 ? 0 : currentSlide + 1);
  };

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? obras.length - 1 : currentSlide - 1);
    console.log("prev");
  };
  function auto() {
    slideInterval = setInterval(nextSlide, intervalTime);
  }

  useEffect(() => {
    setCurrentSlide(0);
  }, []);

  useEffect(() => {
    if (autoScroll) {
      auto();
    }
    return () => clearInterval(slideInterval);
  }, [currentSlide]);

  return (
    <div className="slider">
      <div className="slides">
        {obras.map((obra, index) => {
          <input
            type="radio"
            name="radio-btn"
            id={`radio${index + 1}`}
            checked={currentSlide == index}
          />;
        })}

        {obras.map((obra, index) => {
          if (index == 0) {
            return (
              <div
                className={
                  currentSlide == 0
                    ? "slide first"
                    : currentSlide == 1
                    ? "slide second"
                    : currentSlide == 2
                    ? "slide third"
                    : "slide fourth"
                }
              >
                <img src={obra.img} />
              </div>
            );
          } else {
            return (
              <div className="slide">
                {" "}
                <img src={obra.img} />
              </div>
            );
          }
        })}
      </div>

      {/* <div className="navigation-auto">
          <div className="auto-btn1"></div>
          <div className="auto-btn2"></div>
          <div className="auto-btn3"></div>
          <div className="auto-btn4"></div>
        </div> */}

      {/* <div className="navigation-manual">
          <label
            for="radio1"
            className="manual-btn"
            onClick={() => {
              setCurrentSlide(0);
            }}
          ></label>
          <label
            for="radio2"
            className="manual-btn"
            onClick={() => {
              setCurrentSlide(1);
            }}
          ></label>
          <label
            for="radio3"
            className="manual-btn"
            onClick={() => {
              setCurrentSlide(2);
            }}
          ></label>
          <label
            for="radio4"
            className="manual-btn"
            onClick={() => {
              setCurrentSlide(3);
            }}
          ></label>
        </div> */}
    </div>
  );
};
