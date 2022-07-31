import styled from "styled-components";

export const ProfileSkillsSection = styled.div`
padding: 50px 0;
overflow: hidden;
`

export const Profile1 = styled.div`
width: 50%;
float: left;

@media screen and (max-width:630px){
    width: 100%;
    float:none;
    margin-bottom: 20px;
}
`


export const ProfileList = styled.ul`
list-style: none;
`

export const ProfileItem =styled.li`
margin-bottom: 8px;
`

export const ProfileItemSpan = styled.span`
display: inline-block;
width:100px;
font-weight: bold;
font-weight : ${props => props.web ? "normal" : "bold"};
color : ${props => props.web === 6 ? "#eb5424" : "#000"};
`


export const Skills = styled.div`
width: 50%;
float: right;

@media screen and (max-width:630px){
    width: 100%;
    float:none;
    margin-bottom: 20px;
`


export const SkillsDesc = styled.p`
font-size: 15px;
color:#888;
line-height: 1.5;
margin-bottom: 20px;
`

export const Bar = styled.div
   ` margin-bottom: 10px;
    overflow: hidden;
    padding: 10px`



export const BarTilte = styled.span`
float:left
`

export const Perc = styled.span`
float: right;
margin-right: 100px;
`

export const Parent = styled.div`
height: 2px;
background-color: #f8f8f8;
clear: both;
position: relative;
top:5px;
`

export const ParentSpan = styled.span`
background-color: #eb5424;
position: absolute;
display: block;
top: 0;
left: 0;
bottom: 0;
`



export const ProfileTitle = styled.h2`
font-size: 40px;
`

export const SkillsTitle = styled.h2`
font-size: 40px;
`

export const ProfileTilteSpan = styled.span`
font-weight: normal;
`

export const SkillsTitleSpan = styled.span`
font-weight: normal;
`



