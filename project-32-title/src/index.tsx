import { StrictMode } from "react";
import * as ReactDOMClient from "react-dom/client";

import "./index.css";
import App from "./App";

const rootElement = document.getElementById("root") as HTMLElement;
const root = ReactDOMClient.createRoot(rootElement);

root.render(
    <StrictMode>
        <App />
    </StrictMode>
);
