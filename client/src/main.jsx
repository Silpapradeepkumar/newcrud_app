import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Details from './Details.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import Update from './Update.jsx'

const root = ReactDOM.createRoot(document.getElementById('root'));
 root.render(
  <>
  {
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<App/>}/>
    <Route path='/details' element={<Details/>}/>
    <Route path='/update/:id' element={<Update />} />
    </Routes>
    </BrowserRouter>
  }
  </>
 )
