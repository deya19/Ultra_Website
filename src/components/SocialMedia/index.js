import React, { Component } from 'react'
import {SocialMediaSection, Social,SocialIcon, SocialPara, SocialParaSpan,  } from './SocialMedia.js'
import axios from "axios"





class SocialMedia extends Component {

  state = {
    elements : []
  }

  componentDidMount(){
    axios.get("js/data.json").then(res => {this.setState({elements : res.data.social})})
  }

  

  render(){
    const {elements} = this.state;

    const socialList = elements.map(elementItem => {
      return(
        <Social key={elementItem.id} element ={elementItem.id} >
        <SocialIcon  className={elementItem.icon}></SocialIcon>
        <SocialPara>
            <SocialParaSpan >{elementItem.title}</SocialParaSpan>
            <SocialParaSpan info2>{elementItem.body}</SocialParaSpan>
        </SocialPara>
        </Social>
      )
     })

  return (
    <SocialMediaSection>

    {socialList}

   </SocialMediaSection>
  )
  }
}

export default SocialMedia