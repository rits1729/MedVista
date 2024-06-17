import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import {Route, Routes } from 'react-router-dom';

import './App.css'
import Login from './screens/Login.jsx'
import Homepage from './screens/Homepage.jsx'
import Patients_list from './screens/Patients-List/Patients_list.jsx';

function App() {

  return (
    <div id="App">


      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/homepage" element={<Homepage />} />
        <Route path="/appointments" element={<Homepage />} />
        <Route path="/patients-list" element={<Patients_list />} />
      </Routes>

        {/* <Login /> */}



    </div>
  )
}

export default App
