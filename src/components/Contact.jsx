import React, { useState,useEffect } from 'react'
import style from "./Style.module.css"
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { TextField } from '@mui/material';
import { Button } from "@mui/material";
import { themevalue } from '../App';
import { createContext,useContext } from 'react'
import axios from 'axios';
import Aos from 'aos'
import "aos/dist/aos.css"
const Contact = () => {
  let {theme}= useContext(themevalue)
  let {ltdt}=useContext(themevalue)
  useEffect(()=>{
    Aos.init({duration:2000});
  },[])
  let[name,setname]=useState("")
  let[mailid,setmailid]=useState("")
  let[message,setmessage]=useState("")

  let getname=(e)=>{
     setname(e.target.value)
  }
  let getmailid=(e)=>{
    setmailid(e.target.value)
 }
 let getmessage=(e)=>{
  setmessage(e.target.value)
}
let payload={
  name,
  mailid,
  message
}
let submit=()=>{
  axios.post("https://formspree.io/f/mjvnayqv",payload)
  .then(()=>{alert("Message sent successfully")})
  .catch(()=>{alert("Failed to send the Message")}) 
}

  return (
    <div id={style.Contact} style={{backgroundColor:theme?"white":"black",color:theme?"black":"white"}}>
         <div id={style.Contactp1} data-aos="fade-right">
       
          <h1 style={{fontSize:"60px",marginLeft:"90px"}}><span style={{color:"red"}}>C</span>ontact <span style={{color:"red"}}>M</span>e</h1>
          <div id={style.phone} style={{display:"flex",marginLeft:"70px",marginTop:"20px"}}>
          <PhoneAndroidIcon style={{marginLeft:"20px",marginRight:"20px",fontSize:"30px",fill:"red"}}/>
          <h2> 9791549578</h2>
           </div>
         
          <div id={style.email} style={{display:"flex",marginLeft:"70px",marginTop:"20px"}}>
          <EmailIcon style={{marginLeft:"20px",marginRight:"20px",fontSize:"30px",fill:"red"}}/>
          <h2 >vimalrajvj1048@gmail.com</h2>
          </div>
         
           <div id={style.media} style={{display:"flex",marginLeft:"70px",marginTop:"20px"}}>
           <h2 style={{marginLeft:"18px"}}><a href='https://www.linkedin.com/in/vimalrajj04' target='_blank'><LinkedInIcon style={{fontSize:"40px",fill:"red"}}/></a></h2>
           <h2 style={{marginLeft:"30px"}}><a href='https://github.com/vimalraj004' target='_blank'><GitHubIcon style={{fontSize:"40px",fill:"red"}}/></a></h2>
           </div>
         </div>
         <div id={style.Contactp2} data-aos="fade-down" >
         <TextField value={name} onChange={getname} id="filled-basic" label="Enter your Name" variant="filled" sx={{backgroundColor:"white",borderRadius:"2px",border:"none",width:{md:"300px",lg:"400px"}}} />
         <TextField value={mailid} onChange={getmailid} id="filled-basic" label="Enter your mailid" variant="filled" sx={{backgroundColor:"white",borderRadius:"2px",border:"none",width:{md:"300px",lg:"400px"},marginTop:"30px"}} />
         <TextField value={message} onChange={getmessage} id="filled-multiline-flexible" label="Your Message" multiline  rows={7} variant="filled" sx={{backgroundColor:"white",borderRadius:"2px",border:"none",height:{sm:"200px"},width:{sm:"200px",md:"300px",lg:"400px"},marginTop:"30px"}}/>
         <Button onClick={submit} variant='contained' size="large" sx={{backgroundColor:"red",color:"white",marginTop:"50px"}}>Submit</Button>
         </div>
    </div>
  )
}

export default Contact