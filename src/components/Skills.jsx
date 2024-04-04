import {React,useEffect, useRef} from 'react'
import style from "./Style.module.css"
import HtmlIcon from '@mui/icons-material/Html';
import html from "./Assets/html5.svg"
import css from "./Assets/css3-alt.svg"
import javascript from "./Assets/js.svg"
import react from "./Assets/react.svg"
import nodejs from "./Assets/node-js.svg"
import mongodb from "./Assets/leaf-solid.svg"
import sql from "./Assets/database-solid.svg"
import Aos from 'aos'
import "aos/dist/aos.css"
import {useSpring,animated} from "react-spring"
import { themevalue } from '../App';
import { createContext,useContext } from 'react'

function Number({n}){
  const{number}=useSpring({
    from:{number:0},
    number:n,
    delay:1000,
    config:{mass:1,tension:20,friction:10}

  });
  return <animated.div>{number.to((n)=>n.toFixed(0))}</animated.div>
}

const Skills = () => {
  let {theme}= useContext(themevalue)
  useEffect(()=>{
    Aos.init({duration:2000});
  },[])
 

  let couterlayer1=useRef(null)
  let countper1=useRef(null)
  useEffect(()=>{
    console.log(couterlayer1,countper1);
    let startvalue=0;
    let endvalue=80;
    let speed=20;
    let animation=setInterval(() => {
      startvalue++;
      countper1.current.textContent =`${startvalue}%`;
      couterlayer1.current.style.background=`conic-gradient(
        #FF0000 ${startvalue * 3.6}deg,
        #ededed 0deg)`;
      if(startvalue==endvalue){
        clearInterval(animation)
      }
    }, speed);
  },[])
  // ----------------------------------------------------------------------------

  let couterlayer2=useRef(null)
  let countper2=useRef(null)
  useEffect(()=>{
    console.log(couterlayer2,countper2);
    let startvalue=0;
    let endvalue=85;
    let speed=20;
    let animation=setInterval(() => {
      startvalue++;
      countper2.current.textContent =`${startvalue}%`;
      couterlayer2.current.style.background=`conic-gradient(
        #FF0000 ${startvalue * 3.6}deg,
        #ededed 0deg)`;
      if(startvalue==endvalue){
        clearInterval(animation)
      }
    }, speed);
  },[])
  // ----------------------------------------------------------------------------
  let couterlayer3=useRef(null)
  let countper3=useRef(null)
  useEffect(()=>{
    console.log(couterlayer3,countper3);
    let startvalue=0;
    let endvalue=90;
    let speed=20;
    let animation=setInterval(() => {
      startvalue++;
      countper3.current.textContent =`${startvalue}%`;
      couterlayer3.current.style.background=`conic-gradient(
        #FF0000 ${startvalue * 3.6}deg,
        #ededed 0deg)`;
      if(startvalue==endvalue){
        clearInterval(animation)
      }
    }, speed);
  },[])
  // ----------------------------------------------------------------------------
  let couterlayer4=useRef(null)
  let countper4=useRef(null)
  useEffect(()=>{
    console.log(couterlayer4,countper4);
    let startvalue=0;
    let endvalue=75;
    let speed=20;
    let animation=setInterval(() => {
      startvalue++;
      countper4.current.textContent =`${startvalue}%`;
      couterlayer4.current.style.background=`conic-gradient(
        #FF0000 ${startvalue * 3.6}deg,
        #ededed 0deg)`;
      if(startvalue==endvalue){
        clearInterval(animation)
      }
    }, speed);
  },[])
  // ----------------------------------------------------------------------------

  
 
  return (
    <div id={style.skills} style={{backgroundColor:theme?"white":"black",color:theme?"black":"white"}}>
      <div id={style.heading} style={{display:"flex",justifyContent:"center"}} data-aos="fade-down"><h1 style={{fontSize:"50px",marginTop:"60px"}}><span style={{color:"red"}}>S</span>kill<span  style={{color:"red"}}>s</span></h1></div>
      <div id={style.wrapup}>
      <div id={style.skillsp1}>
        <h1 style={{marginLeft:"180px"}} data-aos="fade-right"><span style={{color:"red"}}>T</span>echnical Skill<span style={{color:"red"}}>s</span></h1>
        <section id={style.containers} data-aos="fade-right" style={{marginLeft:"60px"}}>
               <div id={style.text}>
                <img src={html} style={{backgroundColor:"black",height:"40px",width:"40px"}} alt="" />
                  <h1 style={{marginTop:"10px"}}>HTML</h1>

               </div>
               <div id={style.prograssbar}>
                        <div id={style.outlayer}>
                          <div id={style.innerlayer1}></div>
                        </div>
                        <h4 style={{marginLeft:"20px"}}><Number n={90}/></h4>
               </div>
        </section>
        <section id={style.containers} data-aos="fade-right" style={{marginLeft:"60px"}}>
               <div id={style.text}>
                <img src={css} style={{backgroundColor:"black",height:"40px",width:"40px"}} alt="" />
                  <h1 style={{marginTop:"10px"}}>Css</h1>

               </div>
               <div id={style.prograssbar}>
                        <div id={style.outlayer}>
                          <div id={style.innerlayer2}></div>
                        </div>
                        <h4 style={{marginLeft:"20px"}}><Number n={90} /></h4>
               </div>
        </section>
        <section id={style.containers} data-aos="fade-right" style={{marginLeft:"60px"}}>
               <div id={style.text}>
                <img src={javascript} style={{backgroundColor:"black",height:"40px",width:"40px"}} alt="" />
                  <h1 style={{marginTop:"10px"}}>Javascript</h1>

               </div>
               <div id={style.prograssbar}>
                        <div id={style.outlayer}>
                          <div id={style.innerlayer3}></div>
                        </div>
                        <h4 style={{marginLeft:"20px"}}><Number n={80} /></h4>
               </div>
        </section>
        <section id={style.containers} data-aos="fade-right" style={{marginLeft:"60px"}}>
               <div id={style.text}>
                <img src={react} style={{backgroundColor:"black",height:"40px",width:"40px"}} alt="" />
                  <h1 style={{marginTop:"10px"}}>Reactjs</h1>

               </div>
               <div id={style.prograssbar}>
                        <div id={style.outlayer}>
                          <div id={style.innerlayer4}></div>
                        </div>
                        <h4 style={{marginLeft:"20px"}}><Number n={80} /></h4>
               </div>
        </section>
        <section id={style.containers} data-aos="fade-right" style={{marginLeft:"60px"}}>
               <div id={style.text}>
                <img src={nodejs} style={{backgroundColor:"black",height:"40px",width:"40px"}} alt="" />
                  <h1 style={{marginTop:"10px"}}>Nodejs</h1>

               </div>
               <div id={style.prograssbar}>
                        <div id={style.outlayer}>
                          <div id={style.innerlayer5}></div>
                        </div>
                        <h4 style={{marginLeft:"20px"}}><Number n={75} /></h4>
               </div>
        </section>
        <section id={style.containers} data-aos="fade-right" style={{marginLeft:"60px"}}>
               <div id={style.text}>
                <img src={mongodb} style={{backgroundColor:"black",height:"40px",width:"40px"}} alt="" />
                  <h1 style={{marginTop:"10px"}}>Mongodb</h1>

               </div>
               <div id={style.prograssbar}>
                        <div id={style.outlayer}>
                          <div id={style.innerlayer6}></div>
                        </div>
                        <h4 style={{marginLeft:"20px"}}><Number n={70} /></h4>
               </div>
        </section>
        <section id={style.containers} data-aos="fade-right" style={{marginLeft:"60px"}}>
               <div id={style.text}>
                <img src={sql} style={{backgroundColor:"black",height:"40px",width:"40px"}} alt="" />
                  <h1 style={{marginTop:"10px"}}>SQL</h1>

               </div>
               <div id={style.prograssbar}>
                        <div id={style.outlayer}>
                          <div id={style.innerlayer7}></div>
                        </div>
                        <h4 style={{marginLeft:"20px"}}><Number n={85} /></h4>
               </div>
        </section>
      </div>
      <div id={style.skillsp2}>
      <h1 style={{marginLeft:"190px"}} data-aos="fade-right"><span style={{color:"red"}}>P</span>rofessional Skill<span style={{color:"red"}}>s</span></h1>
      <section id={style.circlepart1}  data-aos="fade-down">
      <div id={style.circleprograssbar}>
        <div ref={couterlayer1}  id={style.couterlayer}>
             <div ref={countper1} id={style.countper}>0%</div>
        </div>
        <h3 style={{marginTop:"20px"}}>Quick Learner</h3>
      </div>
      <div id={style.circleprograssbar}>
        <div ref={couterlayer2}  id={style.couterlayer}>
             <div ref={countper2} id={style.countper}>0%</div>
        </div>
        <h3 style={{marginTop:"20px"}}>Team Worker</h3>
      </div>
      </section>
      <section id={style.circlepart2}  data-aos="fade-down">
      <div id={style.circleprograssbar}>
        <div ref={couterlayer3}  id={style.couterlayer}>
             <div ref={countper3} id={style.countper}>0%</div>
        </div>
        <h3 style={{marginTop:"20px"}}>Communication</h3>
      </div>
      <div id={style.circleprograssbar}>
        <div ref={couterlayer4}  id={style.couterlayer}>
             <div ref={countper4} id={style.countper}>0%</div>
        </div>
        <h3 style={{marginTop:"20px"}}>Problem Solving</h3>
      </div>
      </section>
      </div>
        
      </div>
    </div>
  )
}

export default Skills