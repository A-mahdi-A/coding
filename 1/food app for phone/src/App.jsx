import { useState } from 'react'
import { Route, Routes } from 'react-router-dom';
import StartPage from './pasges/StarrPage';
import Login from './pasges/login';
import PageSignUp from './pasges/Signup';

import './App.scss'

function App() {

  return (
    <>

      <Routes>
        {/* <Route path='' element='' /> */}

        <Route path='/' element={<StartPage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/Sign-Up' element={<PageSignUp />
        } />



      </Routes>
    </>
  )
}

export default App
