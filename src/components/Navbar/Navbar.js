import styled from "styled-components";
import { Link } from 'react-router-dom';

export const MainNavBarSection = styled.div`
position: relative;
height: 80px;
`

export const NavbBarSection = styled.div`
padding: 20px 0;
overflow: hidden;
background-color: #fff;
position: fixed;
top: 0;
left: 0;
right: 0;
z-index: 99;
border-bottom: 1px solid #222;
`

export const Logo = styled.div`
width: 40%;
float: left;


@media screen and (max-width:991px) {
    width: 100%;
    float: none;
}

`


export const LogoText = styled.h2`
font-size: 30px;
 font-weight: bold;
`

export const UlList = styled.ul`
    width:60%;
    float: right;
    list-style: none;
    padding: 0;



    @media screen and (max-width:991px){
        width: 100%;
        float: none;
        margin-top: 20px;
        display: none
    }
`



export const ListItem = styled.li`
display : inline-block;


@media screen and (max-width:991px) {
    display : block;
    text-align: center;
}
`


export const Anchour = styled.a`
display: block;
color: #222;
text-decoration: none;
padding: 10px 15px;
font-weight: bold;
cursor:pointer;
transition: 0.1s;

&:hover {
    color: #eb5424
}
`
export const NavbarLink = styled(Link)`
display: block;
color: #222;
text-decoration: none;
padding: 10px 15px;
font-weight: bold;
transition: 0.1s;

&:hover {
    color: #eb5424
}
`


//..................................................................
export const Label = styled.label`
position: absolute;
top: 13px;
right: 25px;
display: block;
    width: 15px;
    height: 15px;
    background: url(images/Navbar/open.png) no-repeat;
    background-size: cover;
    padding: 20px;
    cursor: pointer;

 

    @media  screen and (min-width: 992px){
        display: none;
    }
`

export const Input = styled.input`
position: absolute;
top: 13px;
right: 25px;
display: none;

&:checked ~ ul{
    display: block;   
}

&:checked ~ label{
    background: url(images/Navbar/close.png) no-repeat;
    background-size: cover;
}
`





