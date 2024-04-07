import React, { useContext,useEffect } from 'react'
import { Icon, IconButton } from '@mui/material';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
// import MenuIcon from '@mui/icons-material/Menu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import {faXmark} from '@fortawesome/free-solid-svg-icons';

import style from "./Style.module.css"
import { Link } from 'react-scroll'

import About from './About'
import { themevalue } from '../App'

import Aos from 'aos'
import "aos/dist/aos.css"

const Nav = () => {
 let {theme}= useContext(themevalue)
 let {ltdt}=useContext(themevalue)
 useEffect(()=>{
  Aos.init({duration:9000});
},[])

  return (
    <div id={style.nav} style={{background:theme?"white":"black",color:theme?"black":"white"}}>
        <div id={style.navp1}>
            <h1 style={{marginLeft:"70px"}}><span style={{color:"red"}}>P</span>ORTFOLI<span style={{color:"red"}}>O</span></h1>
        </div>
        <div id={style.navp2}>
            <input type="checkbox" id="click"/>
              <label for="click" id={style.openmenubar}>
                  
                    <FontAwesomeIcon icon={faBars} />
             </label>
          
             
            <ol  style={{background:theme?"white":"black",color:theme?"black":"white"}} >
               
                <li><Link to={style.home} spy={true} smooth={true}offset={0} duration={50} style={{textDecoration:"none",fontSize:"20px",position:"relative"}} >Home</Link></li>
                <li><Link to={style.About} spy={true} smooth={true}offset={0} duration={50} style={{textDecoration:"none",fontSize:"20px",position:"relative"}} >About</Link></li>
                <li><Link to={style.skills} spy={true} smooth={true}offset={0} duration={50} style={{textDecoration:"none",fontSize:"20px",position:"relative"}} >Skills</Link></li>
                <li><Link to={style.Project} spy={true} smooth={true}offset={0} duration={50}  style={{textDecoration:"none",fontSize:"20px",position:"relative"}}>Projects</Link></li>
                <li><Link to={style.Certificate} spy={true} smooth={true}offset={0} duration={50}  style={{textDecoration:"none",fontSize:"20px",position:"relative"}}>Certificate</Link></li>
                <li><Link to={style.Contact} spy={true} smooth={true}offset={0} duration={50}  style={{textDecoration:"none",fontSize:"20px",position:"relative"}}>Contact</Link></li>
                <Link style={{textDecoration:"none",fontSize:"20px",position:"relative"}}><IconButton onClick={ltdt}>{theme?<DarkModeIcon sx={{fill:theme?"black":"white"}}/>:<LightModeIcon sx={{fill:theme?"black":"white"}}/>}</IconButton></Link>
                
            </ol>
          
        </div>

    </div>
  )
}

export default Nav