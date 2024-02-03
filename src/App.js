import React from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from "react-router-dom"
import Home from './Componants/Home/Home';
import Pview from './Componants/Productview/Pview';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path='/:title' element={ <Home/>}></Route>
        <Route path='/products/:id' element={ <Pview/>}></Route>
      </Routes>
    </>
  )
}

export default App