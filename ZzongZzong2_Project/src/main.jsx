import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App.jsx'
import GoogleDriveFolderPage from './GoogleDriveFolderPage.jsx'
import {BrowserRouter} from "react-router-dom"

import './index.css'
import LectureNote from './LectureNote.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </React.StrictMode>,
)
