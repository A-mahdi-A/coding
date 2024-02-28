import { useState } from 'react'
import { Route, Routes } from 'react-router-dom';
import StartPage from './pasges/StarrPage';
import SingnUp from './pasges/signUp';
import loginPage  from './pasges/loginPage';
import './App.scss'

function App() {

  return (
    <>
      <Routes>
        {/* <Route path='' element='' /> */}

        <Route path='/' element={<StartPage />} />
        <Route path='/login' element={<loginPage/>} />



      </Routes>
    </>
  )
}

export default App
