import "bulmaswatch/superhero/bulmaswatch.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css"
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./Redux";
import CellList from "./components/cell-list";

const HTMLElement = document.querySelector("#root") as HTMLDivElement;

const root = createRoot(HTMLElement);

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <CellList />
      </div>
    </Provider>
  );
};

root.render(<App />);
