import React, { useEffect, useState } from 'react'
import {PortfolioSection ,PortfolioTitle ,PortfolioSpan ,PortfolioUl ,PortfolioItem ,ImageWrapper ,Image ,Overlay ,OverlaySpan } from "./Portfolio.js"
import axios from 'axios'

function Porfolio() {

  const [images ,setImages] = useState([]);

  useEffect(() => {
    axios.get("js/data.json").then(res => {setImages(res.data.portfolio)})
  },[])
  
  const PortfolioImages = images.map(imageItem => {
    return(
      <ImageWrapper key={imageItem.id}>
        <Image src={imageItem.image} alt=""/>
        <Overlay>
           <OverlaySpan>
           show Image
           </OverlaySpan>
        </Overlay>
     </ImageWrapper>
    )
  })

  return (
    <PortfolioSection>
    <PortfolioTitle><PortfolioSpan>My</PortfolioSpan> Portfolio</PortfolioTitle>
    <PortfolioUl>
        <PortfolioItem active >All</PortfolioItem>
        <PortfolioItem >HTML</PortfolioItem>
        <PortfolioItem>Photoshop</PortfolioItem>
        <PortfolioItem>Wordpress</PortfolioItem>
        <PortfolioItem>Mobile</PortfolioItem>
    </PortfolioUl>

    <div className="box">

    {PortfolioImages}
    
    </div>
  </PortfolioSection>
  )
}

export default Porfolio