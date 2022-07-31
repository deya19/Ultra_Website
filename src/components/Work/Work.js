import styled from "styled-components";

export const WorkSection = styled.div`
height: auto;
padding: 50px 0;
background-color: #fff;
overflow: hidden;
`

export const WorkTitle = styled.h2`
font-size: 60px;
margin-bottom: 20px;
`
export const WorkSpan = styled.span`
font-weight: normal;
`

export const WorkPart = styled.div`
width: 30%;
float: left;
height: auto;
padding: 100px 0px;
border: 1px solid #888;
text-align: center;
margin-left: 5%;
margin-left : ${props => props.first=== 1 ? "0" : "5%"};

@media screen and (max-width:768px) {
        width: 47%;
        margin-left: ${props =>props.last === 3 && "0"};
        margin-top:  ${props =>props.last === 3 &&"20px"};
    }

 @media screen and (max-width:575px) {
        width: 100%;
        float: none;
        margin-left: 0;
        margin-bottom: ${props => props.first === 1 && "20px"}
    }





`



export const Icon = styled.i`
color: #888;
margin-bottom: 20px;
`

export const PartTitle = styled.h4`
font-size: 25px;
color: #eb5424;
margin-bottom: 20px;
`

export const Line = styled.hr`
width: 60%;
margin: auto;
margin-bottom: 20px;
`

export const PartDesc = styled.p`
font-size: 14px;
color: #888;
padding: 20px;
`

