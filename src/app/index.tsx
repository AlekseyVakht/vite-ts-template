import React from "react";
import ReactDOM from "react-dom/client";
import './styles/index.scss';
import { App } from "./layouts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);