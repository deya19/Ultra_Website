import styled from "styled-components";

export const HomeSection = styled.div`
height: 500px;
background: url(images/Home/home-bg.jpg); 
background-size: cover;
background-position: center;
text-align: center;
position:relative;

` 
export const HomeInformation = styled.div`
position:absolute;
top:50%;
left:50%;
transform: translate(-50%,-50%);
`


export const HomeTitle = styled.h2`
    font-size: 60px;
    font-weight: bold;
    color: #5e5e5e;
    margin-bottom: 20px;


    @media screen and (max-width:768px) {
        font-size: 40px;
    }
`

export const HomeTnfo = styled.h4`
font-size: 35px;
color: #eb5424;
margin-bottom: 20px;


@media screen and (max-width:768px){
    font-size: 25px;
}
`

export const HomeDesc = styled.p`
font-size: 20px;
    line-height: 1.5;
    color: #888;
    margin-bottom: 20px;


    @media screen and (max-width:768px){
        font-size: 15px;
    }
`

export const Span = styled.span`
color: #222;
`

export const HomeBtn = styled.button`
background-color:#eb5424 ;
color:#fff;
font-size: 18px;
width: 150px;
border: none;
padding: 15px;
cursor: pointer;
transition: 0.1s;
font-weight: bold;


&:hover {
    background-color:#fff ;
    color:#eb5424;
}
`
   
//the media query write inside the element tha t needs 

//ewfwefqfe`@media screen and ()`