import Parser from "html-react-parser";
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
    id: 1,
    text: "Todas somos parte de la historia contemporánea y dignas herederas de las feministas que nos precedieron en la lucha. Si bien cada una de nosotras aporta reflexiones y acciones desde su propia trinchera, no todas compartimos las mismas experiencias, ni nos hemos formado bajo las mismas circunstancias. Sin embargo, todas nos vemos afectadas por la estructura patriarcal sobre la que se basa la sociedad. En el marco de mi maestría en Estudios Visuales, esta serie de carteles digitales surge como una contribución a los activismos feministas, fusionando mi interpretación personal de los feminismos, desde la perspectiva de una mujer que recientemente ha integrado este movimiento a su identidad. Inspirada en los conceptos de contravisualidad y difracción, propuestos por Nicholas Mirzoeff y Donna Haraway, que se desarrollan en cada pieza. <br /> <br /> Con este proyecto, busco facilitar el acceso a información significativa y alentar a mujeres, especialmente aquellas con poca o ninguna experiencia en el feminismo, a adentrarse al movimiento y descubrir el poder de convocatoria de los medios digitales. Mi objetivo es motivarlas a expresar sus vivencias sin temor al juicio externo o a la errónea idea de que ya todo ha sido dicho. Toda práctica adquiere relevancia cuando ofrece una nueva visión y una interpretación distinta de la realidad, fundamentada desde la singularidad de quien la realiza.",
    title: "Introducción",
  },
  {
    id: 2,
    text: 'Hasta hace algunos años, el feminismo estaba envuelto en una cierta negatividad, estigmatizado por estereotipos que distorsionaban su principal objetivo: dar voz a las demandas de las mujeres. Aunque hoy en día identificarse como feminista sigue generando reacciones adversas, el panorama ha cambiado. Al mirar al pasado, podemos reconocer las huellas que nos marcaron, así como el miedo que sentíamos al expresar nuestras opiniones sobre el feminismo por temor a ser etiquetadas como "radicales", "caóticas" o, más recientemente, "feminazis", incluso dentro de nuestro círculo familiar. Hoy, gracias a la apertura que han brindado los medios digitales, más mujeres nos sentimos libres de expresar nuestras ideas sin temor al juicio, lo que representa un avance significativo hacia una sociedad más igualitaria que valora y respeta la diversidad de perspectivas y experiencias.',
    title: "Detonante",
  },
  {
    id: 3,
    text: '"¿Será que para reconocerse feminista es necesario comenzar por reconocer un daño personal?" (Guillermoprieto, 2020). En la actualidad, la mayoría de nosotras ha enfrentado alguna forma de violencia y discriminación vinculadas al sexismo; la misoginia; el acoso; los micromachismos; la desigualdad; el mansplaining; la cosificación; entre otras. Cada mujer tiene una historia personal que la lleva a identificarse con un determinado feminismo. En mi caso, después de años de observar desde la distancia y al tomar conciencia de mis propias experiencias, decidí adoptar una postura más comprometida, ya que los activismos feministas nos invitan a participar de manera más activa.<br /> <br />Porque como menciona bell hooks (2017): "una no se convierte en defensora de la política feminista simplemente por tener el privilegio de haber nacido mujer. Como en todos los posicionamientos políticos, una se vuelve partidaria de la política feminista por elección y acción".',
    title: "Reconocimiento",
  },
  {
    id: 4,
    text: "En México y el resto de América Latina, la diversidad de experiencias y realidades que vivimos las mujeres nos impulsa a hablar de feminismos en plural, reconociendo que no todas nos identificamos con un único enfoque, sino que existe una amplia diversidad de feminismos, cuyas demandas y perspectivas varían según factores como: clase social; cosmovisiones; contextos culturales y geográficos. No es lo mismo el activismo feminista en el Estado de México, que el que se practica en otras partes de México y del mundo.",
    title: "Feminismos en plural",
  },
  {
    id: 5,
    text: 'A lo largo de la historia se nos han asignado una serie de roles y estereotipos que, gracias a los activismos feministas, la academia y el desarrollo del pensamiento crítico, hoy son sumamente cuestionados, como: la maternidad; la responsabilidad del trabajo doméstico; el servicio a la familia; la sumisión; la preocupación por la apariencia física; los referentes de belleza impuestos; las expectativas de ser "buenas esposas" y "buenas madres"; la dependencia emocional y económica a la pareja, entre muchos otros. Asimismo, el acceso a mayor información ha permitido el surgimiento de roles y estereotipos de género no convencionales, donde observamos a mujeres que desafían activamente las normas tradicionales que, durante generaciones, han dictado su comportamiento tanto en el ámbito familiar como social.',
    title: "Estereotipos que nacen en casa",
  },
  {
    id: 6,
    text: '"No tiendo la cama de mis hermanos, no permito que mi padre se acueste conmigo en mi cama, que en la calle me griten cosas, que en el metro se restrieguen contra mi cuerpo, que sientan que soy de su propiedad, que no me dejen estudiar medicina, no acepto que la violación no pueda ser castigada con la ley" (Graciela Hierro, 2002).<br /><br />La violencia de género ha sido un mecanismo para mantener y reforzar el poder patriarcal, normalizando la dominación y limitando las capacidades de las mujeres. No es un fenómeno aislado, sino una estrategia política que perpetúa la vulnerabilidad femenina, agravada por la inacción de las autoridades. Esta violencia abarca desde agresiones verbales y acoso, hasta la negación de derechos y el uso de la fuerza, manifestándose en diversas formas de violencia, como: económica, política, ideológica, moral, psicológica, sexual y física.',
    title: "Violencia silenciosa: Micromachismos cotidianos",
  },
  {
    id: 7,
    text: 'La teórica Carole Pateman (1995) habla de la existencia de un "contrato original", el cual describe cómo el patriarcado se constituye a través de un pacto que, simultáneamente, legitima la libertad masculina y la subordinación femenina. Este acuerdo posee una doble dimensión: sexual y social. En el ámbito sexual, se refiere al derecho político que los hombres ejercen sobre las mujeres, estableciendo un orden que permite y naturaliza el acceso a sus cuerpos. En el ámbito social, el contrato se materializa en un entramado de leyes y normas que regulan todo lo que está permitido y prohibido para las mujeres, restringiendo su libertad y autonomía.<br /><br />Los estándares de belleza son una manifestación del control patriarcal sobre los cuerpos de las mujeres, dictando cómo deben verse y comportarse para ser aceptadas y valoradas socialmente, imponiéndoles ideales inalcanzables que limitan su autonomía, sustentados en las exigencias del capitalismo.',
    title: "Miradas de poder: Capitalismo y patriarcado",
  },
  {
    id: 8,
    text: "Los feminismos han evolucionado en respuesta a demandas como el derecho a la autonomía; la toma de decisiones sobre nuestros cuerpos; la preservación de la integridad física y psicológica; la igualdad salarial; la redistribución de las responsabilidades domésticas; la crianza compartida; la participación política y la equidad, entre otras. Cuestionar el control patriarcal no solo implica desmantelar la dominación que ejerce sobre las mujeres y las limitaciones impuestas a su desarrollo personal en comparación con los hombres, sino también reconocer que este desafío se extiende a un sistema más complejo, como el capitalismo, que refuerza y perpetúa estas desigualdades.",
    title: "Amas de casa y la economía invisible",
  },
  {
    id: 9,
    text: 'Fragmento tomado del poema "Chapa" de Jimena González (2019) -¿Por qué me dijeron: "Una llave que abre muchas chapas es una llave maestra, pero una chapa que se abre con cualquier llave es una chapa chafa" y me besaron?-<br /><br />Desde la física clásica, la difracción se entiende como el fenómeno que ocurre cuando la luz se desvía al encontrar obstáculos casi imperceptibles. En el contexto del feminismo, Donna Haraway propone a la difracción como una metáfora de una nueva forma de conciencia, útil para los activismos, ya que ofrece una alternativa a la reflexión. La principal diferencia entre la reflexión y la difracción es que, mientras la primera busca representar, la segunda busca generar algo nuevo. Estas diferencias influyen en nuestras prácticas de creación de conocimiento y la manera en que interpretamos nuestras vidas y cuerpos.',
    title: "Chapa",
  },
  {
    id: 10,
    text: "La difracción actúa como un lente valioso en el proceso de análisis conceptual y de creación de la producción, revelando diversas facetas del proceso como expectativas, dudas, afirmación de identidades, asimetrías, estereotipos, conceptos, entre otros.",
    title: "Una mirada difractada",
  },
  {
    id: 11,
    text: "El feminismo interseccional analiza cómo las identidades de género se entrelazan con categorías como raza, clase social y orientación sexual, entre otras, con el propósito de comprender de manera más completa y diversa las experiencias de las mujeres. Además de explorar las conexiones entre las luchas de diversas culturas y corrientes feministas, es necesario abordar la persistencia histórica del patriarcado en todas ellas. Esto implica entender los mandatos que han sustentado este sistema a lo largo de los siglos a nivel mundial y en todas las culturas y analizar cómo sigue ejerciendo influencia en la sociedad contemporánea.",
    title: "Diversas pero unidas: Feminismo interseccional",
  },
  {
    id: 12,
    text: "Finalmente, la difracción nos invita a leernos a nosotros mismos junto a nuestros mundos y creencias. En el proceso de producción de estos carteles, no fui una observadora externa (un reflector), sino que estuve íntimamente vinculada a él, aprendiendo de la experiencia. En este sentido, la producción no es solo el resultado de mi trabajo, sino que yo misma soy el resultado de mi propia producción. <br /><br />El objetivo de esta galería virtual es permitir la descarga libre de los carteles expuestos, creando un punto de encuentro donde otras mujeres puedan colaborar y compartir sus experiencias. Este espacio de conexión busca generar situaciones participativas que transformen la creación de objetos estéticos, culturales y políticos en la producción artística contemporánea. Así, las experiencias personales y colectivas se convierten en prácticas significativas. Este espacio, junto con las creaciones de otras activistas que se sumen, formará una constelación de prácticas feministas que se reconfiguran con cada nueva interpretación que les otorgamos.",
    title: "Difractando fronteras: Prácticas que importan",
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
        <p className="text">{Parser(imageText[slide - 1].text)}</p>
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
