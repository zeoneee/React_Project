import { useState } from 'react'
import './App.css'
import {Routes, Route} from "react-router-dom"

import HeaderBar from './HeaderBar'
import LandingPage from './LandingPage'
import MainPage from './MainPage'
import MemberPage from './MemberPage'
import LectureNote from './LectureNote'
import Error from './Error'
import About from "./About.jsx";
import Landing from './Landing.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <LandingPage />
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/MainPage' element={<MainPage/>}/>
        <Route path='/MemberPage' element={<MemberPage/>}/>
        <Route path='/LectureNote' element={<LectureNote/>}/>
          <Route path='/Error' element={<Error/>}/>
          <Route path='/About' element={<About/>}/>
          <Route path='/Landing' element={<Landing/>}/>
      </Routes>
    </>
  )
}

export default App
