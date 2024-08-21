import "./App.css";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

function App() {
  return (
    <>
      <h1 className="line">Yolanda Suárez</h1>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
        perferendis aliquid maiores voluptas officia officiis, odit vero fugit
        repellat esse accusamus. Quasi non maxime ducimus qui fuga architecto,
        ut tempore? Repudiandae nisi, earum impedit provident tempora veritatis
        odit. Fugit et molestias quibusdam dolore fugiat, minima animi numquam
        quia culpa laboriosam nihil porro, deserunt quae labore error sequi
        dicta, voluptatum reiciendis!
      </p>

      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <div className="card">
        {/* <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button> */}
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
