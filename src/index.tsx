import "bulmaswatch/superhero/bulmaswatch.min.css";
import { createRoot } from "react-dom/client";
import CodeCell from "./components/code-cell";

const HTMLElement = document.querySelector("#root") as HTMLDivElement;

const root = createRoot(HTMLElement);

const App = () => {
  return (
    <div>
      <CodeCell />
    </div>
  );
};

root.render(<App />);
