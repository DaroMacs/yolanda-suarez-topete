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

const posters = [
  poster1,
  poster2,
  poster3,
  poster4,
  poster5,
  poster6,
  poster7,
  poster8,
  poster9,
  poster10,
];

export default function SimpleSlider() {
  const [slide, setSlide] = useState(1);

  const afterChange = (i: number) => {
    setSlide(i + 1);
  };

  const handleDownload = () => {
    const imageUrl = posters[slide - 1];
    window.open(imageUrl, "_blank");
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: afterChange,
    centerMode: true,
    centerPadding: "70px",

    responsive: [
      {
        breakpoint: 480,
        settings: {
          centerMode: false,
          centerPadding: "0px",
        },
      },
    ],
  };

  return (
    <div className="image-slider-container">
      <Slider {...settings}>
        {posters.map((poster, index) => (
          <div key={index} className="slide">
            <img src={poster} alt={`poster${index + 1}`} />
          </div>
        ))}
      </Slider>
      <div className="slide-counter">
        <p>{slide}/10</p>
        <button className="download-button" onClick={handleDownload}>
          Descargar/Ampliar
        </button>
        <p className="text">{imageText[slide - 1].text}</p>
      </div>
    </div>
  );
}
