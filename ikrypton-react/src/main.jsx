import React from "react";
import ReactDOM from "react-dom/client";
import Nav from "./Nav";
import Home from "./Home";
import Content from "./Content";
import Footer from "./Footer";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Nav />
    <Home />
    <Content />
    <Footer />
  </React.StrictMode>
);
