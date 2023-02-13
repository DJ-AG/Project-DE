import * as esbuild from 'esbuild-wasm'
import { useState } from "react";
import {createRoot} from "react-dom/client";

const HTMLElement = document.querySelector("#root") as HTMLDivElement

const root = createRoot(HTMLElement)

const App = () => {
  const [input, setInput] = useState("");
  const [code, setCode] = useState("");

  const startService = async() => {
    const service = await esBuild.startService({
        worker:true,
        wasmURL:'/esbuild.wasm'
    })
  }

  const onCLick = () => {
    console.log(input);
  };

  return (
    <div>
      <textarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
      ></textarea>
      <div>
        <button onClick={onCLick}>Submit</button>
      </div>
      <pre></pre>
    </div>
  );
};

root.render(<App/>)
