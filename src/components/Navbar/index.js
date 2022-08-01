import React, { useRef } from 'react'
import './Navbar.js'
import { Anchour, ListItem, Logo, UlList, NavbBarSection , LogoText, NavbarLink, Input, Label,MainNavBarSection} from './Navbar.js';


function Navbar({homeRef , workRef , portfolioRef , resumeRef ,aboutRef , socialMediaRef}) {

  const handleScroll = (ref) => {
    window.scrollTo({
      top: ref.offsetTop,
      left: 0,
      behavior: "smooth",
    });

  };
  return (
    <MainNavBarSection>
    <NavbBarSection>
            
    <div className="container">
        
        <Logo>
            <LogoText>Ultra Profile</LogoText>
        </Logo>

        <Input type="checkbox" id="nav"/>
        <Label htmlFor="nav"></Label>

        
        <UlList className="ul-list">
            <ListItem className="list-item"><NavbarLink to="/" onClick={() => {handleScroll(homeRef.current);}}>Home</NavbarLink></ListItem>
            <ListItem className="list-item"><Anchour onClick={() => {handleScroll(workRef.current);}}>Work</Anchour></ListItem>
            <ListItem className="list-item"><Anchour onClick={() => {handleScroll(portfolioRef.current);}}>Portfolio</Anchour></ListItem>
            <ListItem className="list-item"><Anchour  onClick={() => {handleScroll(resumeRef.current);}}>Resume</Anchour></ListItem>
            <ListItem className="list-item"><Anchour  onClick={() => {handleScroll(aboutRef.current);}}>About</Anchour></ListItem>
            <ListItem className="list-item"><Anchour  onClick={() => {handleScroll(socialMediaRef.current);}}>SocialMedia</Anchour></ListItem>
            <ListItem className="list-item"><NavbarLink to = "/contact">Contact</NavbarLink></ListItem>
        </UlList>
        
    </div>
    
</NavbBarSection>
</MainNavBarSection>
  )
}

export default Navbar;