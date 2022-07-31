import React, { Fragment, useState } from 'react'
import Footer from './../Footer';
import {ContactSection,ContactTitle,ContactTitleSpan,Form,FormInput,InputText,InputEmail,InputExp,Textarea, InputSubmit, InputCheck} from './Contact.js' 
import { useDispatch, useSelector } from 'react-redux';
import { addUser } from '../../Redux/api';





function Contact() {
  const[name,setName] = useState("");
  const[email,setEmail] = useState("");
  const[password,setPassword] = useState("");
  const [message,setMessage] = useState("");
  const[passwordShown,setPasswordShown] = useState(false);

  const dispatch = useDispatch();
  const {loading,error} = useSelector(state => state.web)

   
  const handleSubmit = (e) =>{
    e.preventDefault();
    addUser({name,email,password,message}, dispatch)
    setName("");
    setEmail("");
    setPassword("");
    setMessage("")
    }

  const togglePassword = () =>{
    setPasswordShown(!passwordShown);
  }


  return (
    <Fragment>
    <ContactSection>
    <div className="container">
      <ContactTitle><ContactTitleSpan>Drop</ContactTitleSpan> Me A Line</ContactTitle>
      <Form onSubmit={handleSubmit}>
          <FormInput>
              <InputText type="text" 
              value={name}
              placeholder="Your Name"
              onChange={(e) => setName(e.target.value)} />

              <InputEmail type="email"
              value={email}
               placeholder="Youe Email"
               onChange={(e) => setEmail(e.target.value)}/>


          </FormInput>
          <InputExp 
          type={passwordShown ? "text" : "password"}
          value = {password}
            placeholder="Your Password"
            onChange={(e) => setPassword(e.target.value)}/> 
            <InputCheck type="checkbox" onClick={togglePassword}/>

          <Textarea
           cols="30"
            rows="10"
            value={message}
             placeholder="Your Mesaage"
             onChange={(e) => setMessage(e.target.value)}></Textarea>

             {loading ? "Loading..." : <InputSubmit type="submit" value="Send Message"/>}     
             {error && loading == false && "Error !!"}
            

      </Form>
    </div>
  </ContactSection>
  
  <Footer/>
  </Fragment>
  )
}

export default Contact;