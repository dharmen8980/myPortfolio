import "./App.scss";
import React from "react";
import Navbar from "./components/navbar";
import Home from "./pages/home";
import About from "./pages/about";
import Awards from "./pages/awards";
import Contact from "./pages/contact";
import Skills from "./pages/skills";
import { BrowserRouter } from "react-router-dom";
import Projects from "./pages/projects";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Navbar />
        <div className="content animate-fade">
          <Home />
          <About />
          <Skills />
          <Projects />
          {/* <Awards /> */}
          <Contact />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
