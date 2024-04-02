import React, { useState,useEffect } from 'react'
import style from "./Style.module.css"
import img1 from "./Assets/Happy-Workforce.jpg"
import img2 from "./Assets/68747470733a2f2f692e6962622e636f2f6d4668326b475a2f5468756d626e61696c2d322e706e67.png"
import img3 from "./Assets/d7874679-bd47-4092-a610-f870036afdf9.jpeg"
import img4 from "./Assets/24ee85ea-bad6-4dce-ae49-e2ea5d8b1f81-cover.png"
import img5 from "./Assets/d98cc7c6c40c1c937d84727c1e3b8d0f.jpg"
import img6 from "./Assets/96b9d9189189813.Y3JvcCwxNDM4LDExMjUsMzIsMA.jpg"
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import { Button } from '@mui/material'
import Aos from 'aos'
import "aos/dist/aos.css"
import { themevalue } from '../App';
import { createContext,useContext } from 'react'

const Project = () => {
  let {theme}= useContext(themevalue)
  let {ltdt}=useContext(themevalue)
  let[seemore,setseemore]=useState(false)
  let getseemore=()=>{
       setseemore(true)
  }
  useEffect(()=>{
    Aos.init({duration:2000});
  },[])
  return (
    <div id={style.Project} style={{ height:seemore?"130vh":"84.5vh", overflow: "hidden",backgroundColor:theme?"white":"black",color:theme?"black":"white"}}>
        <h1 style={{textAlign:"center",fontSize:"40px",marginTop:"70px"}} data-aos="fade-down"><span style={{color:"red"}}>P</span>ROJECT<span style={{color:"red"}}>S</span></h1>
        <div id={style.cardsp1} data-aos="fade-up">
             <div id={style.card1}>
                <img src={img1} alt="" style={{width:"100%",height:"100%"}} />
                <div id={style.content}>
                    <h3>Employee Management<br/><span style={{marginLeft:"50px"}}>Mern project</span></h3>
                    <h4 style={{marginTop:"20px",fontSize:"20px"}}>Explore this</h4>
                    <a href="https://github.com/vimalraj004/Employee-Management-Mern-Project"><ArrowOutwardIcon id="explore" sx={{height:"50px",width:"60px"}}/></a>
                </div>
             </div>
             <div id={style.card2}>
                <img src={img2} alt="" style={{width:"100%",height:"100%"}} />
                <div id={style.content}>
                <h3>Spotify-Webpage<br/></h3>
                <h4>UI/UX Project</h4>
                    <h4 style={{marginTop:"20px",fontSize:"20px"}}>Explore this</h4>
                    <a href="https://github.com/vimalraj004/Spotify-play-free-mobile"><ArrowOutwardIcon sx={{height:"50px",width:"60px"}}/></a>
                </div>
             </div>
             <div id={style.card3}>
                <img src={img3}alt="" style={{width:"100%",height:"100%"}} />
                <div id={style.content}>
                <h3>Netflix-Webpage<br/></h3>
                <h4>UI/UX Project</h4>
                    <h4 style={{marginTop:"20px",fontSize:"20px"}}>Explore this</h4>
                    <a href="https://github.com/vimalraj004/Netflix-webpage"><ArrowOutwardIcon sx={{height:"50px",width:"60px"}}/></a>
                </div>
             </div>
             </div>
             <Button onClick={getseemore} varient="contained" sx={{bgcolor:"red",color:"white",marginTop:"60px",marginLeft:{lg:"700px",md:"300px"},display:seemore?"none":"block"}}>See More</Button>
        <div id={style.cardsp2}>
          <div id={style.card1}>
                <img src={img4} alt="" style={{width:"100%",height:"100%"}} />
                <div id={style.content}>
                <h3>Discord-Webpage<br/></h3>
                <h4>UI/UX Project</h4>
                    <h4 style={{marginTop:"20px",fontSize:"20px"}}>Explore this</h4>
                    <a href="https://github.com/vimalraj004/Discord-WebPage"><ArrowOutwardIcon sx={{height:"50px",width:"60px"}}/></a>
                </div>
          </div>
           <div id={style.card2}>
                <img src={img5} alt="" style={{width:"100%",height:"100%"}} />
                <div id={style.content}>
                <h3>Prime-Webpage<br/></h3>
                <h4>UI/UX Project</h4>
                    <h4 style={{marginTop:"20px",fontSize:"20px"}}>Explore this</h4>
                    <a href="https://github.com/vimalraj004/Prime-webpage"><ArrowOutwardIcon sx={{height:"50px",width:"60px"}}/></a>
                </div>
             </div>
             <div id={style.card3}>
                <img src={img6}alt="" style={{width:"100%",height:"100%"}} />
                <div id={style.content}>
                <h3>Profile cards<br/></h3>
                <h4>UI/UX Project</h4>
                    <h4 style={{marginTop:"20px",fontSize:"20px"}}>Explore this</h4>
                    <a href="https://github.com/vimalraj004/Profilecard-with-Reactjs-Tailwindcss"><ArrowOutwardIcon sx={{height:"50px",width:"60px"}}/></a>
                </div>
             </div>
        </div>

           
    

        
    </div>
  )
}

export default Project