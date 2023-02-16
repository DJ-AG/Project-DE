import * as esbuild from "esbuild-wasm";
import { useState, useEffect, useRef } from "react";
import { createRoot } from "react-dom/client";
import { unpkgPathPlugin } from "./plugin/unpkg-path-plugin";
import { fetchPlugin } from "./plugin/fetch-plugin";

const HTMLElement = document.querySelector("#root") as HTMLDivElement;

const root = createRoot(HTMLElement);

const App = () => {
  const ref = useRef<any>();
  const [input, setInput] = useState("");
  const [code, setCode] = useState("");

  const startingService = async () => {
    ref.current = await esbuild.startService({
      worker: true,
      wasmURL: 'https://unpkg.com/esbuild-wasm@0.8.27/esbuild.wasm',
    });
  };

  useEffect(() => {
    startingService();
  }, []);

  const onCLick = async () => {
    if (!ref.current) return;

    //bundle process | build bundle
    const result = await ref.current.build({
      entryPoints: ["index.js"],
      bundle: true,
      write: false,
      plugins: [unpkgPathPlugin(), fetchPlugin(input)],
      define: {
        "process.env.NODE_ENV": '"production"',
        global: "window",
      },
    });
    setCode(result.outputFiles[0].text);
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
      <pre>{code}</pre>
    </div>
  );
};

root.render(<App />);
