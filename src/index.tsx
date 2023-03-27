import "bulmaswatch/superhero/bulmaswatch.min.css";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./Redux";
import TextEditor from "./components/text-editor";

const HTMLElement = document.querySelector("#root") as HTMLDivElement;

const root = createRoot(HTMLElement);

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <TextEditor />
      </div>
    </Provider>
  );
};

root.render(<App />);
