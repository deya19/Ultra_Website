import React from 'react'

import {AboutSection , AboutInfo,InfoTitle,InfoTitleSpan,InfoDir,InfoDirSpan,InfoDesc,ALink} from './About.js'


function About() {
  return (
    <AboutSection>
    <div className="container">
        <AboutInfo>
            <InfoTitle><InfoTitleSpan>This is</InfoTitleSpan> Me</InfoTitle>
            <InfoDir><InfoDirSpan>Creative</InfoDirSpan> Director</InfoDir>
            <InfoDesc>Lorem ipsum dolor sit amet consectetur <ALink href="#">adipisicing</ALink> elit. Dolores tempora provident eos
                 amet nisi! Ipsum inventore, 
                odio sunt eum rem itaque quia harum vitae nam.
            </InfoDesc>
            <InfoDesc>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores tempora <ALink href="#">provident </ALink>eos
                amet nisi! Ipsum inventore, 
               odio sunt eum rem itaque quia harum vitae nam.
           </InfoDesc>
        </AboutInfo>
    </div>
   </AboutSection>
  )
}

export default About