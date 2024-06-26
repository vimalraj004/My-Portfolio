import React, { useEffect, useState } from 'react'
import style from "./Style.module.css"
import img2 from "./Assets/Picsart_23-12-13_22-32-03-024.png"
import Aos from 'aos'
import "aos/dist/aos.css"
import { Button } from '@mui/material'
import { themevalue } from '../App'
import { createContext,useContext } from 'react'

const About = () => {
  let [readmore,setreadmore]=useState(false)
  useEffect(()=>{
    Aos.init({duration:2000});
  },[])
   let readmorepara=()=>{
   setreadmore(true)
  }
  let {theme}= useContext(themevalue)

  return (
    <div id={style.About} style={{backgroundColor:theme?"white":"black",color:theme?"black":"white"}} >
        <div id={style.Aboutp1} data-aos="fade-down">
            <img src={img2} alt="" style={{height:"600px",width:"400px",borderRadius:"30px",boxShadow:"0px 0px 20px red",marginTop:"40px"}} />
        </div>
        <div id={style.Aboutp2} data-aos="fade-right" >
          <h1><span style={{color:"red"}}>A</span>bout <span style={{color:"red"}}>M</span>e</h1><br/><br/>
          <p>I am Vimalraj , a BCA graduate student from Acharya institute of technology Bengaluru
passed out in the year 2023 with  a CGPA of 8.67.<br/><br/>

After completing my graduation, I joined in Jspiders to pursue MERN full stack development course and to learn industry standard practise. Here, I am learning both on frontend and backend technologies.<br/><br/>

• I am confident working on frontend technologies like Html5, Css3, Javascript, Reactjs<br/>
• I am equially good working on backend like Nodejs, Expressjs<br/>
• I am capable of handling MongoDB and SQL queries also<br/>
• Utilized Tailwind CSS, Bootstrap 5, Material UI frameworks to enhance project aesthetics and functionality</p>
<div id="readmorepara" style={{display:readmore?"block":"none"}}>
  <p style={{fontSize:"20px",marginLeft:"30px",marginTop:"10px",lineHeight:"25px"}}>• I have worked on 6 Projects using these technologies with the guidence of the faculty at Jspiders. I consider myself as a result oriented person, I usually complete the tasks before the deadlines.<br/><br/>• I am adabtable to work in teams, I take the feedback of the seniors positivily. I am willing to work under the guidence of seniors. I am here seeking opportunity to put my education and skills into real-time project work. I want mentorship to groom my skills for the future projects of the company. I will be happy to get this opportunity and I am sure, I will not disappoint my selection.</p>

</div>

<Button id='clickme' variant='contained' color='error' size='small' sx={{width:"180px",height:"40px",marginTop:"40px",marginLeft:"40px",display:readmore?"none":"block"}} onClick={readmorepara}><a style={{color:"white",textDecoration:"none"}}>Read more</a></Button>
        </div>
    </div>
  )
}

export default About