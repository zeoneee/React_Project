import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import GoogleDriveFolderPage from './GoogleDriveFolderPage.jsx'

import './index.css'
import MainPage from './MainPage.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <GoogleDriveFolderPage/> */}
    <MainPage/>
  </React.StrictMode>,
)
