import React from 'react'
import { HomeBtn, HomeDesc, HomeInformation, HomeSection, HomeTitle, HomeTnfo, Span } from "./Home.js"

function Home({homeRef}) {
  return (
    <HomeSection ref={homeRef}>
   <div className="container">
   <HomeInformation>

    <HomeTitle>Deya'a Shaheen</HomeTitle>
    <HomeTnfo>Creative Director</HomeTnfo>
    <HomeDesc>I am a <Span>Junior Front-End Developer</Span> creating modern and responsive designs to <Span >Web</Span> and <Span>Mobile</Span>.
     lets us work togather. Thank you.</HomeDesc>
     <HomeBtn>Let's Begin</HomeBtn>

   </HomeInformation>
   </div>
  </HomeSection>
  )
}

export default Home;