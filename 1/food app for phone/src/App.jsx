import { useState } from 'react'
import { Route, Routes } from 'react-router-dom';
import StartPage from './pasges/StarrPage';
import Login from './pasges/login';
import './App.scss'

function App() {

  return (
    <>
      <Routes>
        {/* <Route path='' element='' /> */}

        <Route path='/' element={<StartPage />} />
        <Route path='/login' element={<Login />} />



      </Routes>
    </>
  )
}

export default App
