import { createRoot } from "react-dom/client";
import "./styles/style.css";
import App from "./pages/App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(<App />);
