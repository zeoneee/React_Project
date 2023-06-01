import { useState } from 'react'
import './App.css'
import {Routes, Route} from "react-router-dom"

import LandingPage from './LandingPage'
import MainPage from './MainPage'
import MemberPage from './MemberPage'
import LectureNote from './LectureNote'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <LandingPage />
      <Routes>
        {/* <Route path='/' element={<LandingPage/>}/> */}
        <Route path='/MainPage' element={<MainPage/>}/>
        <Route path='/MemberPage' element={<MemberPage/>}/>
        <Route path='/LectureNote' element={<LectureNote/>}/>
      </Routes>
    </>
  )
}

export default App
