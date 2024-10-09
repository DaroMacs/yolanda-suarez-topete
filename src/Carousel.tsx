import { useState } from "react";
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

const imageText = [
  {
    id: 1,
    text: "Lorem 1 ipsum dolor sit amet consectetur adipisicing elit. Maxime temporibus nam assumenda, perferendis eum eos sequi aliquid vero ratione. Nulla asperiores autem alias tenetur eaque saepe qui quae, consequatur consectetur!",
  },
  {
    id: 2,
    text: "Lorem 2 ipsum dolor sit amet consectetur adipisicing elit. Maxime temporibus nam assumenda, perferendis eum eos sequi aliquid vero ratione. Nulla asperiores autem alias tenetur eaque saepe qui quae, consequatur consectetur!",
  },
  {
    id: 3,
    text: "Lorem 3 ipsum dolor sit amet consectetur adipisicing elit. Maxime temporibus nam assumenda, perferendis eum eos sequi aliquid vero ratione. Nulla asperiores autem alias tenetur eaque saepe qui quae, consequatur consectetur!",
  },
  {
    id: 4,
    text: "Lorem 4 ipsum dolor sit amet consectetur adipisicing elit. Maxime temporibus nam assumenda, perferendis eum eos sequi aliquid vero ratione. Nulla asperiores autem alias tenetur eaque saepe qui quae, consequatur consectetur!",
  },
  {
    id: 5,
    text: "Lorem 5 ipsum dolor sit amet consectetur adipisicing elit. Maxime temporibus nam assumenda, perferendis eum eos sequi aliquid vero ratione. Nulla asperiores autem alias tenetur eaque saepe qui quae, consequatur consectetur!",
  },
  {
    id: 6,
    text: "Lorem 6 ipsum dolor sit amet consectetur adipisicing elit. Maxime temporibus nam assumenda, perferendis eum eos sequi aliquid vero ratione. Nulla asperiores autem alias tenetur eaque saepe qui quae, consequatur consectetur!",
  },
  {
    id: 7,
    text: "Lorem 7 ipsum dolor sit amet consectetur adipisicing elit. Maxime temporibus nam assumenda, perferendis eum eos sequi aliquid vero ratione. Nulla asperiores autem alias tenetur eaque saepe qui quae, consequatur consectetur!",
  },
  {
    id: 8,
    text: "Lorem 8 ipsum dolor sit amet consectetur adipisicing elit. Maxime temporibus nam assumenda, perferendis eum eos sequi aliquid vero ratione. Nulla asperiores autem alias tenetur eaque saepe qui quae, consequatur consectetur!",
  },
  {
    id: 9,
    text: "Lorem 9 ipsum dolor sit amet consectetur adipisicing elit. Maxime temporibus nam assumenda, perferendis eum eos sequi aliquid vero ratione. Nulla asperiores autem alias tenetur eaque saepe qui quae, consequatur consectetur!",
  },
  {
    id: 10,
    text: "Lorem 10 ipsum dolor sit amet consectetur adipisicing elit. Maxime temporibus nam assumenda, perferendis eum eos sequi aliquid vero ratione. Nulla asperiores autem alias tenetur eaque saepe qui quae, consequatur consectetur!",
  },
];

export default function SimpleSlider() {
  const [slide, setSlide] = useState(1);

  const afterChange = (i: number) => {
    setSlide(i + 1);
  };

  console.log(slide);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: afterChange,
    centerMode: true,
    centerPadding: "70px",
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
      <div className="slide-counter">
        <p>{slide}/10</p>
        <p className="text">{imageText[slide - 1].text}</p>
      </div>
    </div>
  );
}
