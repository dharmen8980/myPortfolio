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
import {Helmet} from "react-helmet";

function App() {
  return (
    <div>
      <Helmet>
        <title>Dharmendra Sharma</title>
        <link rel="icon" href="logo1.png" />
        <meta name="description" content="Dharmendra Sharma's Portfolio" />
      </Helmet>
      <BrowserRouter>
        <Navbar />
        <div className="content animate-fade">
          <Home />
          <About />
          <Skills />
          <Projects />
          <Awards />
          <Contact />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
