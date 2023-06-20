import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App.jsx'
import {BrowserRouter, createBrowserRouter, RouterProvider} from "react-router-dom"

import './index.css'
import ScrollToTop from './components/ScrollTop.jsx'
import LandingPage from './LandingPage.jsx'
import HeaderBar from './HeaderBar.jsx'
import MainPage from './MainPage.jsx'

const router = createBrowserRouter(
  [{
    path: "/",
    element: <HeaderBar/>,
    // <HeaderBar/>,
    children: [{
      path: "LandingPage",
      element: <LandingPage/>
    },{
      path: "MainPage",
      element: <MainPage/>
    }]
  }]
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <RouterProvider router={router}></RouterProvider> */}
    <BrowserRouter>
      <ScrollToTop />
      <App/>
    </BrowserRouter>
  </React.StrictMode>,
)



// return (
//   <>
//     <LandingPage />
//     <Routes>
//       <Route path='/' element={<LandingPage/>}/>
//       <Route path='/MainPage' element={<MainPage/>}/>
//       <Route path='/MemberPage' element={<MemberPage/>}/>
//       <Route path='/LectureNote' element={<LectureNote/>}/>
//     </Routes>
//   </>
// )