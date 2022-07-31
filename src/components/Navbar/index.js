import React from 'react'
import './Navbar.js'
import { Anchour, ListItem, Logo, UlList, NavbBarSection , LogoText, NavbarLink, Input, Label,MainNavBarSection} from './Navbar.js';


function Navbar() {
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
            <ListItem className="list-item"><NavbarLink to="/">Home</NavbarLink></ListItem>
            <ListItem className="list-item"><Anchour href="#">Work</Anchour></ListItem>
            <ListItem className="list-item"><Anchour href="#">Portfolio</Anchour></ListItem>
            <ListItem className="list-item"><Anchour href="#">Resume</Anchour></ListItem>
            <ListItem className="list-item"><Anchour href="#">About</Anchour></ListItem>
            <ListItem className="list-item"><NavbarLink to="/contact">Contact</NavbarLink></ListItem>
        </UlList>
        
    </div>
    
</NavbBarSection>
</MainNavBarSection>
  )
}

export default Navbar;