import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.css";
import "./CommonResource/css/YoutubeVideos.css"
import "bootstrap/dist/js/bootstrap.js";
import {BrowserRouter} from "react-router-dom"



let root = ReactDOM.createRoot(document.getElementById("root"))
  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  );
