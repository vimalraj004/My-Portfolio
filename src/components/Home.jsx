import React from 'react'
import style from "./Style.module.css"
import img1 from "./Assets/Picsart_23-12-11_23-33-18-485.png"
import resume from "./Assets/Vimalraj Resume.pdf"
import { useTypewriter,Cursor, Typewriter } from 'react-simple-typewriter'
import { Button } from '@mui/material'
import { themevalue } from '../App'
import { createContext,useContext } from 'react'

const Home = () => {
  const[Typewriter]=useTypewriter({
    words:['Front-End-Developer','Mern-Full stack Developer'],
    loop:{},
    typeSpeed:100,
    deleteSpeed:40
  })
  let {theme}= useContext(themevalue)
 let {ltdt}=useContext(themevalue)
  return (
    <div id={style.home} style={{backgroundColor:theme?"white":"black",color:theme?"black":"white"}}>
      <div id={style.home2}>
            <img className={style.img}  src={img1} alt="" />
         </div>
         <div id={style.home1}>
        <h1> Hi !  I'm <span style={{color:"red"}}>V</span>imalra<span style={{color:"red"}}>j</span></h1>  
        <span style={{color:"red"}}>{Typewriter}</span>
        <p>Fresh out of my MERN Full Stack Development training, as a fresher, I've honed my skills through hands-on
projects. Now, I'm eager to jump into the IT industry as a MERN Full Stack Developer or Front End Developer. Ready to soak
up real-world project experiences and contribute my all to company growth with dedication and enthusiasm.
</p>
<Button variant='contained' color='error' size='small' sx={{width:"180px",height:"40px",marginTop:"40px",marginLeft:{md:"300px"}}}><a style={{color:"white",textDecoration:"none"}} href={resume} download="Vimalraj Resume">Download resume</a></Button>
         </div>
         
    </div>

    
  )
}

export default Home