import "./App.css";
import SimpleSlider from "./Carousel";

function App() {
  return (
    <>
      <div className="head">
        <h1 className="line">
          EXPOSICIÓN VIRTUAL:
          <br />
          <span className="line3">
            Una práctica de contravisualidad y difracción
          </span>
        </h1>
        {/* <h1 className="line3">-Yolanda Suárez Topete-</h1> */}
      </div>

      <div className="media">
        <SimpleSlider />
      </div>

      <div className="contact">
        <b>Yolanda Suárez Topete</b>
        <br />
        <a href="https://www.instagram.com/yolandasuat/">@yolandasuat</a>
      </div>
    </>
  );
}

export default App;
