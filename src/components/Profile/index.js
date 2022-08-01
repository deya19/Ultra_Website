import React, { useEffect, useState } from 'react'
import axios from 'axios';

import {ProfileSkillsSection ,Profile1,ProfileTitle,ProfileTilteSpan,ProfileList,ProfileItem,ProfileItemSpan, 
  Skills,SkillsTitle,SkillsTitleSpan,SkillsDesc,Bar,BarTilte,Perc,Parent,ParentSpan} from "./Profile.js"




function Profile({resumeRef}) {

  const [Informations , setInformation] = useState([]);
  const [Levels,setLevels] = useState([]);

  useEffect(() => {
    axios.get("js/data.json").then(res => {setInformation(res.data.profile)})
  },[])

  useEffect(() => {
    axios.get("js/data.json").then(res => {setLevels(res.data.skills)})
  },[])

  const getInfo = Informations.map(InformationItem => {
    return(
      <ProfileItem key={InformationItem.id} >
      <ProfileItemSpan>{InformationItem.type}</ProfileItemSpan>
      <ProfileItemSpan web = {InformationItem.id} >{InformationItem.write}</ProfileItemSpan>
      </ProfileItem>
      
    )
  })

  const getLev = Levels.map(LevelItem =>{
    return(
      <Bar key={LevelItem.id}>
      <BarTilte>{LevelItem.name}</BarTilte>
      <Perc>{LevelItem.persantage}</Perc>
      <Parent>
          <ParentSpan style={{width:LevelItem.persantage}}></ParentSpan>
      </Parent>
  </Bar>
    )
  })


  
  return (
   <ProfileSkillsSection ref={resumeRef} >
    <div className="container">
        <Profile1>
            <ProfileTitle><ProfileTilteSpan>My</ProfileTilteSpan> Profile</ProfileTitle>
            <ProfileList>
               
               {getInfo}

              
            </ProfileList>
        </Profile1>



         <Skills>
            <SkillsTitle>Some <SkillsTitleSpan>Skills</SkillsTitleSpan></SkillsTitle>
            <SkillsDesc>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Inventore voluptas minus impedit. Cum, 
                facilis at.
            </SkillsDesc>
            {getLev}
        </Skills>

    </div>
  </ProfileSkillsSection>
  )
}

export default Profile;