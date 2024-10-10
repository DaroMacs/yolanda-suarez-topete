import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "./Carousel.css";
import poster0 from "./assets/0.png";
import poster1 from "./assets/1.png";
import poster10 from "./assets/10.png";
import poster11 from "./assets/11.png";
import poster2 from "./assets/2.png";
import poster3 from "./assets/3.png";
import poster4 from "./assets/4.png";
import poster5 from "./assets/5.png";
import poster6 from "./assets/6.png";
import poster7 from "./assets/7.png";
import poster8 from "./assets/8.png";
import poster9 from "./assets/9.png";

const imageText = [
  {
    id: 0,
    text: "Lorem 1 ipsum dolor sit amet consectetur adipisicing elit. Maxime temporibus nam assumenda, perferendis eum eos sequi aliquid vero ratione. Nulla asperiores autem alias tenetur eaque saepe qui quae, consequatur consectetur!Lorem 1 ipsum dolor sit amet consectetur adipisicing elit. Maxime temporibus nam assumenda, perferendis eum eos sequi aliquid vero ratione. Nulla asperiores autem alias tenetur eaque saepe qui quae, consequatur consectetur!Lorem 1 ipsum dolor sit amet consectetur adipisicing elit. Maxime temporibus nam assumenda, perferendis eum eos sequi aliquid vero ratione. Nulla asperiores autem alias tenetur eaque saepe qui quae, consequatur consectetur!Lorem 1 ipsum dolor sit amet consectetur adipisicing elit. Maxime temporibus nam assumenda, perferendis eum eos sequi aliquid vero ratione. Nulla asperiores autem alias tenetur eaque saepe qui quae, consequatur consectetur!",
    title: "intro",
  },
  {
    id: 1,
    text: "Lorem 1 ipsum dolor sit amet consectetur adipisicing elit. Maxime temporibus nam assumenda, perferendis eum eos sequi aliquid vero ratione. Nulla asperiores autem alias tenetur eaque saepe qui quae, consequatur consectetur!Lorem 1 ipsum dolor sit amet consectetur adipisicing elit. Maxime temporibus nam assumenda, perferendis eum eos sequi aliquid vero ratione. Nulla asperiores autem alias tenetur eaque saepe qui quae, consequatur consectetur!Lorem 1 ipsum dolor sit amet consectetur adipisicing elit. Maxime temporibus nam assumenda, perferendis eum eos sequi aliquid vero ratione. Nulla asperiores autem alias tenetur eaque saepe qui quae, consequatur consectetur!Lorem 1 ipsum dolor sit amet consectetur adipisicing elit. Maxime temporibus nam assumenda, perferendis eum eos sequi aliquid vero ratione. Nulla asperiores autem alias tenetur eaque saepe qui quae, consequatur consectetur!",
    title: "title 1",
  },
  {
    id: 2,
    text: "Lorem 2 ipsum dolor sit amet consectetur adipisicing elit. Maxime temporibus nam assumenda, perferendis eum eos sequi aliquid vero ratione. Nulla asperiores autem alias tenetur eaque saepe qui quae, consequatur consectetur!",
    title: "title 2",
  },
  {
    id: 3,
    text: "Lorem 3 ipsum dolor sit amet consectetur adipisicing elit. Maxime temporibus nam assumenda, perferendis eum eos sequi aliquid vero ratione. Nulla asperiores autem alias tenetur eaque saepe qui quae, consequatur consectetur!",
    title: "title 3",
  },
  {
    id: 4,
    text: "Lorem 4 ipsum dolor sit amet consectetur adipisicing elit. Maxime temporibus nam assumenda, perferendis eum eos sequi aliquid vero ratione. Nulla asperiores autem alias tenetur eaque saepe qui quae, consequatur consectetur!",
    title: "title 4",
  },
  {
    id: 5,
    text: "Lorem 5 ipsum dolor sit amet consectetur adipisicing elit. Maxime temporibus nam assumenda, perferendis eum eos sequi aliquid vero ratione. Nulla asperiores autem alias tenetur eaque saepe qui quae, consequatur consectetur!",
    title: "title 5",
  },
  {
    id: 6,
    text: "Lorem 6 ipsum dolor sit amet consectetur adipisicing elit. Maxime temporibus nam assumenda, perferendis eum eos sequi aliquid vero ratione. Nulla asperiores autem alias tenetur eaque saepe qui quae, consequatur consectetur!",
    title: "title 6",
  },
  {
    id: 7,
    text: "Lorem 7 ipsum dolor sit amet consectetur adipisicing elit. Maxime temporibus nam assumenda, perferendis eum eos sequi aliquid vero ratione. Nulla asperiores autem alias tenetur eaque saepe qui quae, consequatur consectetur!",
    title: "title 7",
  },
  {
    id: 8,
    text: "Lorem 8 ipsum dolor sit amet consectetur adipisicing elit. Maxime temporibus nam assumenda, perferendis eum eos sequi aliquid vero ratione. Nulla asperiores autem alias tenetur eaque saepe qui quae, consequatur consectetur!",
    title: "title 8",
  },
  {
    id: 9,
    text: "Lorem 9 ipsum dolor sit amet consectetur adipisicing elit. Maxime temporibus nam assumenda, perferendis eum eos sequi aliquid vero ratione. Nulla asperiores autem alias tenetur eaque saepe qui quae, consequatur consectetur!",
    title: "title 9",
  },
  {
    id: 10,
    text: "Lorem 10 ipsum dolor sit amet consectetur adipisicing elit. Maxime temporibus nam assumenda, perferendis eum eos sequi aliquid vero ratione. Nulla asperiores autem alias tenetur eaque saepe qui quae, consequatur consectetur!",
    title: "title 10",
  },
  {
    id: 11,
    text: "Lorem 11 ipsum dolor sit amet consectetur adipisicing elit. Maxime temporibus nam assumenda, perferendis eum eos sequi aliquid vero ratione. Nulla asperiores autem alias tenetur eaque saepe qui quae, consequatur consectetur!",
    title: "title 11",
  },
];

const posters = [
  poster0,
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
  poster11,
];

export default function SimpleSlider() {
  const [slide, setSlide] = useState(1);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  const afterChange = (i: number) => {
    setSlide(i + 1);
  };

  const handleDownload = () => {
    const imageUrl = posters[slide - 1];
    window.open(imageUrl, "_blank");
  };

  const openModal = (imageUrl: string) => {
    setSelectedImage(imageUrl);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
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
        },
      },
    ],
  };

  return (
    <div className="image-slider-container">
      <Slider {...settings}>
        {posters.map((poster, index) => (
          <div key={index} className="slide">
            <img
              src={poster}
              alt={`poster${index + 1}`}
              onClick={() => openModal(poster)}
            />
          </div>
        ))}
      </Slider>
      <div className="slide-counter">
        <p>
          {slide}/{posters.length}
        </p>
        <button className="download-button" onClick={handleDownload}>
          Descargar
        </button>
        <p>{imageText[slide - 1].title} </p>
        <p className="text">{imageText[slide - 1].text}</p>
      </div>

      {modalOpen && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            <img src={selectedImage} alt="Full size" className="modal-image" />
          </div>
        </div>
      )}
    </div>
  );
}
