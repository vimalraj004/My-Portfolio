import React from 'react'
import style from "./Style.module.css"
import { themevalue } from '../App';
import { createContext,useContext } from 'react'
const Copyrights = () => {
    let {theme}= useContext(themevalue)
    let {ltdt}=useContext(themevalue)
  return (
    <div id={style.Copyrights} style={{backgroundColor:theme?"whitesmoke":"rgb(38, 38, 38)",color:theme?"black":"white",height:"10vh",display:"flex",justifyContent:"center",alignItems:"center"}}>
        <h3 style={{textAlign:"center"}}>Copyrights © 2024 by vimalraj | All rights Reserved</h3>
    </div>
  )
}

export default Copyrights