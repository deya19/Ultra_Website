import styled from "styled-components";

export const ContactSection = styled.div`
padding: 50px;
text-align: center;
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
width: 98%;
`
export const InputCheck = styled(Input)`
margin-left : 5px;

`

export const Textarea = styled.textarea`
width: 100%;
background-color: #ccc;
outline: none;
`

export const InputSubmit = styled(Input)`
width: 60%;
background-color: transparent;
border: 1px solid #ccc;
color: #888;
cursor: pointer;
`
