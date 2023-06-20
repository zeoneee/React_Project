import {useState} from 'react'
import './App.css'
import {Routes, Route} from "react-router-dom"

import HeaderBar from './HeaderBar'
import MainPage from './MainPage'
import LectureNote from './LectureNote'
import Error from './Error'
import About from "./About.jsx";
// import Landing from './Landing.jsx'
import SimpleSlider from "./Landing.jsx";

function App() {
    const [count, setCount] = useState(0)

    return (
        <>
            <HeaderBar/>
            <Routes>
                <Route path='/MainPage' element={<MainPage/>}/>
                <Route path='/LectureNote' element={<LectureNote/>}/>
                <Route path='/About' element={<About/>}/>
                <Route path='/' element={<SimpleSlider/>}/>
                <Route path='/*' element={<Error/>}/>
            </Routes>
        </>
    )
}

export default App
