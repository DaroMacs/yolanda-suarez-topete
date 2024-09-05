import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "./Carousel.css";
import poster1 from "./assets/1.webp";
import poster10 from "./assets/10.webp";
import poster2 from "./assets/2.webp";
import poster3 from "./assets/3.webp";
import poster4 from "./assets/4.webp";
import poster5 from "./assets/5.webp";
import poster6 from "./assets/6.webp";
import poster7 from "./assets/7.webp";
import poster8 from "./assets/8.webp";
import poster9 from "./assets/9.webp";

export default function SimpleSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="image-slider-container">
      <Slider {...settings}>
        <div className="slide">
          <img src={poster1} alt="poster1" />
        </div>
        <div className="slide">
          <img src={poster2} alt="poster2" />
        </div>
        <div className="slide">
          <img src={poster3} alt="poster3" />
        </div>
        <div className="slide">
          <img src={poster4} alt="poster4" />
        </div>
        <div className="slide">
          <img src={poster5} alt="poster5" />
        </div>
        <div className="slide">
          <img src={poster6} alt="poster6" />
        </div>
        <div className="slide">
          <img src={poster7} alt="poster7" />
        </div>
        <div className="slide">
          <img src={poster8} alt="poster8" />
        </div>
        <div className="slide">
          <img src={poster9} alt="poster9" />
        </div>
        <div className="slide">
          <img src={poster10} alt="poster10" />
        </div>
      </Slider>
    </div>
  );
}
