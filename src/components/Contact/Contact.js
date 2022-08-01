import styled from "styled-components";

export const ContactSection = styled.div`
padding: 67px;
hight:auto;
text-align: center;
background: url(images/Home/home-bg.jpg); 
background-size: cover;
background-position: center;
color:#fff;
`

export const ContactTitle = styled.h2`
font-size: 60px;
margin-bottom: 30px;

@media screen and (max-width:575px) {
        font-size: 40px;
}   
`

export const ContactTitleSpan = styled.span`
font-weight: normal;
`

export const Form = styled.form`
width: 90%;
margin: auto;
`

export const Input = styled.input`
margin-bottom: 10px;
padding: 5px;
outline: none;
border-radius:15px;
box-shadow:1px 1px 3px;
`


export const FormInput = styled.div`
overflow: hidden;
`



export const InputText = styled(Input)`
float: left;
width: 49%;

@media screen and (max-width:575px){
    width: 100%;
}
`
export const InputEmail = styled(Input)`
float: right;
width: 49%;

@media screen and (max-width:575px){
    width: 100%;
}
`

export const InputExp = styled(Input)`
width: 100%;
`
export const InputCheck = styled(Input)`
margin-left : 5px;

`

export const Textarea = styled.textarea`
width: 100%;
background-color: #fff;
outline: none;
border-radius:15px;
box-shadow:1px 1px 3px;
padding:10px
`

export const InputSubmit = styled(Input)`
width: 60%;
background-color: #000;
border: 1px solid #ccc;
color: #fff;
cursor: pointer;
border-radius:15px;
box-shadow:1px 1px 5px;

&:hover {
    background-color:#fff ;
    color:#000;
}
`
export const SpanLoading = styled.span`
color:#000;
text-weight:bold;
`

export const SpanError = styled.span`
color:#FF0000;
text-weight:bold;
`
