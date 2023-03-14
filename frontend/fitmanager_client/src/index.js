import { createRoot } from "react-dom/client";
import "./styles/style.css";
import landingPage from "./pages/landingPage";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(<landingPage />);
