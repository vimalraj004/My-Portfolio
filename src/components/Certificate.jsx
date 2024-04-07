import React from 'react'
import style from "./Style.module.css"
import { themevalue } from '../App';
import { createContext,useContext } from 'react'
import jsp from "./Assets/JSpiders certificate (80).png"
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';

const Certificate = () => {
    let {theme}= useContext(themevalue)
    let {ltdt}=useContext(themevalue)
  return (
    <div id={style.Certificate} style={{backgroundColor:theme?"white":"black",color:theme?"black":"white"}}>
         <h1 style={{textAlign:"center",fontSize:"40px"}} data-aos="fade-down"><span style={{color:"red"}}>C</span>ERTIFICAT<span style={{color:"red"}}>E</span></h1>
         <div id={style.cardsp1} data-aos="fade-up">
             <div id={style.certicard1}>
                <img src={jsp} alt="" style={{width:"100%",height:"100%"}} />
                <div id={style.certicontent}>
                    <h3>View Certificate<br/><span style={{marginLeft:"50px"}}></span></h3>
                   
                    <a href="https://drive.google.com/file/d/1EIF7AvA4lrJ84Rfsl-O8ynpGf1z4GY2t/view?usp=sharing"><ArrowOutwardIcon id="explore" sx={{height:"50px",width:"60px"}}/></a>
                </div>
             </div>
        </div>

    </div>
  )
}

export default Certificate