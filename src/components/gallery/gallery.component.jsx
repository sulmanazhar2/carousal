import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./gallery.styles.scss"; // Include your custom CSS
import useWindowDimensions from "../../hooks/useWindowDimensions";

function CarouselComponent({ images }) {
  const { width } = useWindowDimensions();
  const CustomPrevArrow = (props) => {
    const { onClick } = props;
    return <button className="slick-prev" onClick={onClick} />;
  };

  const CustomNextArrow = (props) => {
    const { onClick } = props;
    return <button className="slick-next" onClick={onClick} />;
  };

  const settings = {
    dots: true,
    infinite: width > 480 ? true : false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {images.map((img, index) => (
          <div key={index} className="slider-item">
            <div className="slider-content">
              <div className="slider-body">
                <img src={img} alt="" />
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default CarouselComponent;
