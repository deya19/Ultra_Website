import styled from "styled-components";

export const AboutSection = styled.div`
height: 500px;
background: url(images/creative/about-bg.jpg) no-repeat;
background-size: cover;
background-position: center;
background-attachment: fixed; 


@media screen and (max-width:991px){
    height: 120vh;
}
` 

export const AboutInfo = styled.div`
padding-top: 100px;
width:50%;
float:right;

@media screen and (max-width:991px){
    width: 100%;
    float: none;
    padding-top: 10px;
}
`


export const InfoTitle = styled.h2`
font-weight: bold;
font-size: 50px;
`

export const InfoTitleSpan = styled.span`
font-weight: normal;
`
export const InfoDir = styled.h4`
font-size: 40px;
    color: #eb5424;
    text-transform: uppercase;
    margin-bottom: 20px;

    @media screen and (max-width:991px){
        font-size: 30px;
    }
`

export const InfoDirSpan = styled.span`
font-weight: normal;
`

export const InfoDesc = styled.p`
color: #000;
line-height: 1.8;
margin-bottom: 15px;
`

export const ALink = styled.a`
text-decoration: none;
`

