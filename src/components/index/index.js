import React, { Component } from 'react'
import About from './../About';
import Footer from './../Footer';
import Home from './../Home';
import Porfolio from './../Portfolio';
import Profile from './../Profile';
import SocialMedia from './../SocialMedia';
import Work from './../Work';




 function Index({homeRef ,workRef , portfolioRef , resumeRef , aboutRef , socialMediaRef}) {
  
    return (
      <div>
        <Home homeRef={homeRef}/>
        <Work workRef = {workRef}/>
        <Porfolio portfolioRef={portfolioRef}/>
        <Profile resumeRef = {resumeRef}/>
        <About aboutRef = {aboutRef}/>
        <SocialMedia socialMediaRef = {socialMediaRef}/>
        <Footer/>
      </div>
    )
  }



export default Index;