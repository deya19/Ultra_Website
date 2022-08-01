import styled from "styled-components";

export const PortfolioSection = styled.div`
background-color: #f8f8f8;
padding-top: 20px;
overflow: hidden;
`
export const PortfolioTitle = styled.h2`
text-align: center;
font-size: 35px;
}
`

export const PortfolioSpan = styled.span`
font-weight: normal;
`
   
export const PortfolioUl = styled.ul`
list-style: none;
text-align: center;
margin: 20px 0;
`

export const PortfolioItem = styled.li`
display: inline-block;
width: 100px;
padding: 10px;
background-color : ${props => props.active ? '#eb5424' : ''};
color: ${props => props.active ? '#fff' : '#000'};

@media screen and (max-width:575px) {
        display: block; 
        margin: auto;
       }
`

export const ImageWrapper = styled.div`
width: 25%;
float: left;
font-size: 0;
position: relative;

&:hover > p {
    opacity:1;
}

@media screen  and (max-width: 768px) {
        width: 50%;
    }

@media screen and (max-width:575px){
    width: 100%;
}
`

export const Image = styled.img`
 width:100%;
`


export const Overlay = styled.p`
position: absolute;
top:0;
left: 0;
bottom:0;
right: 0;
background-color: rgba(0,0,0,0.7);
font-size: 15px;
opacity: 0;
color:#fff;
`




