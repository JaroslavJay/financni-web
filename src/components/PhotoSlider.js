import React from "react";
import picture1 from "../images/DSC07933.JPG";
import picture2 from "../images/DSC08433.JPG";
import picture3 from "../images/DSC08526.JPG";
import "../components/PhotoSlider.css";

const PhotoSlider = ({ slides }) => {
  const [activeSlide, setActiveSlide] = useState(0);

  const handleArrowUpClick = () => {
    setActiveSlide((prevSlide) => (prevSlide === 0 ? 0 : prevSlide - 1));
  };

  const handleArrowDownClick = () => {
    setActiveSlide((prevSlide) =>
      prevSlide === slides.length - 1 ? slides.length - 1 : prevSlide + 1
    );
  };

  return (
    <div className="slider">
      <div className="slider-container">
        {/* Map through the array of slides */}
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`slide ${activeSlide === index ? "active" : ""}`}
          >
            <div className="text">
              {/* Text field */}
              <h2>{slide.title}</h2>
              <p>{slide.description}</p>
            </div>
            <div className="image">
              {/* Image */}
              <img src={slide.imageSrc} alt={`Slide ${index + 1}`} />
            </div>
          </div>
        ))}
      </div>
      {/* Arrow up */}
      <div className="arrow-up" onClick={handleArrowUpClick}>
        <i className="fas fa-chevron-up"></i>
      </div>
      {/* Arrow down */}
      <div className="arrow-down" onClick={handleArrowDownClick}>
        <i className="fas fa-chevron-down"></i>
      </div>
    </div>
  );
};

export default PhotoSlider;

// Array of slides data
const slides = [
  {
    title: "Slide 1",
    description: "Description for Slide 1",
    imageSrc: { picture1 },
  },
  {
    title: "Slide 2",
    description: "Description for Slide 2",
    imageSrc: { picture2 },
  },
  {
    title: "Slide 3",
    description: "Description for Slide 3",
    imageSrc: { picture3 },
  },
  // Add more slides as needed
];
