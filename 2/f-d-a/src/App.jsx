import { Route, Routes } from "react-router-dom"
import Start from "./pages/Start/Start"
import Login from "./pages/Login/login"
import signUp from "./pages/sign-up/sign-up"
import Home from "./pages/HOME/home"
function App() {
  
  return (
    <Routes>
      <Route path="/" element={<Start/>}/>
      <Route path="/Login" element={<Login/>}/>
      <Route path="/signUp" element={<signUp/>}/>
      <Route path="/Home" element={<Home/>}/>
    
    </Routes>
  )
}

export default App
