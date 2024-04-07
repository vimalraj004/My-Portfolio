import React, { useState } from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Nav from './components/Nav'
import Home from './components/Home'
import About from './components/About'
import Skills from './components/Skills'
import { createContext,useContext } from 'react'
import Contact from './components/Contact'
import { Copyright } from '@mui/icons-material'
import Copyrights from './components/Copyrights'
import Project from './components/Project'
import Certificate from './components/Certificate'


export let themevalue=createContext()

const App = () => {
  let[theme,settheme]=useState(false)
let ltdt=()=>{
  if(theme==false){
    settheme(true)
  }
  else{
    settheme(false)
  }
}
 
  return (
    <div>
       <themevalue.Provider value={{theme,ltdt}}>
       <Nav/>
         <Home/>
        <About/>
         <Skills/>
        <Project/>
        <Certificate/>
        <Contact/>
        <Copyrights/> 
       </themevalue.Provider>
       
        
     
        
    </div>
  )
}

export default App