import { useState } from 'react'
import { Route, Routes } from 'react-router-dom';
import './App.scss'
import start from './page';

function App() {

  return (
    <>

       <Routes>
         {/* <Route path='' element='' />  */}
         <Route path='/' element={<start/>} />  




      </Routes>  
    </>
  )
}

export default App
