import { createRoot } from "react-dom/client";
import { App } from "./app/App.tsx";

import "./shared/styles/index.scss";

createRoot(document.getElementById("root")!).render(<App />);
