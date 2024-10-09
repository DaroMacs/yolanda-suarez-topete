import "./App.css";
import SimpleSlider from "./Carousel";
//  import poster3 from "./assets/3.webp";
//  import poster4 from "./assets/4.webp";
// import poster5 from "./assets/5.webp";
//  import poster6 from "./assets/6.webp";
//   import poster7 from "./assets/7.webp";
//   import poster8 from "./assets/8.webp";
//   import poster9 from "./assets/9.webp";
//   import poster10 from "./assets/10.webp";

function App() {
  return (
    <>
      <div className="head">
        <h1 className="line">DIFRACCIÓN-PRODUCCIÓN</h1>
        <h1 className="line2">“De lo personal a lo digital”</h1>
        <h1 className="line3">-Yolanda Suárez Topete-</h1>
      </div>

      {/* <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
        perferendis aliquid maiores voluptas officia officiis, odit vero fugit
        repellat esse accusamus. Quasi non maxime ducimus qui fuga architecto,
        ut tempore? Repudiandae nisi, earum impedit provident tempora veritatis
        odit. Fugit et molestias quibusdam dolore fugiat, minima animi numquam
        quia culpa laboriosam nihil porro, deserunt quae labore error sequi
        dicta, voluptatum reiciendis!
      </p> */}

      <div className="media">
        {/* <div className="text">text</div> */}
        {/* <img src={poster1} alt="poster1" />
        <img src={poster2} alt="poster2" /> */}
        <SimpleSlider />
      </div>

      <div className="contact">Contacto: @yolandasuat</div>
    </>
  );
}

export default App;
