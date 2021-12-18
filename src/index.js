import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import reportWebVitals from './reportWebVitals';
import Home from './components/Home';
import About from './components/about'
import Contact from './components/contact'
import Project from './components/projects'
ReactDOM.render(
  <React.StrictMode>

    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Project" element={<Project />} />
      </Routes>
    </BrowserRouter>

  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
