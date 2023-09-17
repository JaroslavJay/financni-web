import "./PhotoSlider.css";
import data from "../components/DataSlider";
import { useState } from "react";
import { FaArrowCircleLeft } from "react-icons/fa";
import { FaArrowCircleRight } from "react-icons/fa";

const PhotoSlider = () => {
  const [index, setIndex] = useState(2);
  const { image } = data[index];

  const checkSlideNumber = (slideIndex) => {
    if (slideIndex < 0) {
      return data.length - 1;
    } else if (slideIndex > data.length - 1) {
      return 0;
    } else {
      return slideIndex;
    }
  };

  const nextSlide = () => {
    setIndex((index) => {
      const newIndex = index + 1;
      return checkSlideNumber(newIndex);
    });
  };

  const previousSlide = () => {
    setIndex((index) => {
      const newIndex = index - 1;
      return checkSlideNumber(newIndex);
    });
  };

  return (
    <div className="mySliderComponent">
      <div className="mySliderPictures">
        <img src={image} alt=""></img>
      </div>
      <div className="mySliderIcons">
        <div className="leftControl" onClick={previousSlide}>
          <FaArrowCircleLeft size="25px" />
        </div>
        <div className="rightControl" onClick={nextSlide}>
          <FaArrowCircleRight size="25px" />
        </div>
      </div>
    </div>
  );
};

export default PhotoSlider;
