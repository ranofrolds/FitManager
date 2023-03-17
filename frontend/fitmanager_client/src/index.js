import { createRoot } from "react-dom/client";
import "./styles/style.css";
import Login from "./pages/Login";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(<Login />);
