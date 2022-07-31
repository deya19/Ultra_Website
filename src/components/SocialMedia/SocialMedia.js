import styled from "styled-components";

export const SocialMediaSection = styled.div`
height: auto;
overflow: hidden;
`

export const Social = styled.div`
width: 33.33%;
float: left;
padding: 100px 0 100px 60px;

background-color: ${props => props.element === 1 && "#3b5998"};
background-color: ${props => props.element  === 2 && "#498cbf"};
background-color: ${props => props.element  === 3 && "#cc2127"};


@media screen and (max-width:991px) {
    width:100%;
    float: none;
    padding-bottom : 180px
}
`


export const SocialIcon = styled.i`
width: 50px;
height: 50px;
background-color:#fff;
text-align: center;
line-height: 50px;
float: left;
margin-right: 10px;
margin-top:8px;
color: #888;
cursor: pointer;
`

export const SocialPara = styled.p`
font-weight: bold;
font-size: 20px;
color: #fff;
text-transform: uppercase;
float:left;
`

export const SocialParaSpan = styled.span`
display: block;
margin-bottom: 8px;

font-weight:${props => props.info2 && "normal"}
`

