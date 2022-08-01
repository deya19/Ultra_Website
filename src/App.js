import './App.css';
import React, { Component, useRef } from 'react'
import{BrowserRouter ,Route ,Routes} from 'react-router-dom'
import Index from './components/index';
import Contact from './components/Contact';
import Navbar from './components/Navbar';



 function App() {
  const homeRef = useRef(null);
  const workRef = useRef(null);
  const portfolioRef = useRef(null);
  const resumeRef = useRef(null);
  const aboutRef = useRef(null);
  const socialMediaRef = useRef(null);


    return (
      <div>
        <BrowserRouter>
        <Navbar homeRef={homeRef} workRef={workRef} portfolioRef = {portfolioRef} resumeRef = {resumeRef} aboutRef={aboutRef} socialMediaRef = {socialMediaRef}/>
        <Routes>
          <Route path='/' element={<Index homeRef={homeRef} workRef={workRef} portfolioRef = {portfolioRef} resumeRef = {resumeRef} aboutRef={aboutRef} socialMediaRef ={socialMediaRef}/>}></Route>
          <Route path='/contact' element={<Contact/>}></Route>
        </Routes>
        </BrowserRouter>
      </div>
    )
  }



export default App;