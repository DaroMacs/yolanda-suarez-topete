import "./App.css";
import SimpleSlider from "./Carousel";

function App() {
  return (
    <>
      <div className="head">
        <h1 className="line">DIFRACCIÓN-PRODUCCIÓN</h1>
        <h1 className="line2">“De lo personal a lo digital”</h1>
        <h1 className="line3">-Yolanda Suárez Topete-</h1>
      </div>

      <div className="media">
        <SimpleSlider />
      </div>

      <div className="contact">
        Yolanda Suárez Topete
        <br />
        <a href="https://www.instagram.com/yolandasuat/">@yolandasuat</a>
      </div>
    </>
  );
}

export default App;
