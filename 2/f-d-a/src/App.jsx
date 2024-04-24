import { Route, Routes } from "react-router-dom"
import Start from "./pages/Start/Start"
import Login from "./pages/Login/login"
import signUp from "./pages/sign-up/sign-up"
function App() {
  
  return (
    <Routes>
      <Route path="/" element={<Start/>}/>
      <Route path="/Login" element={<Login/>}/>
      <Route path="/signUp" element={signUp}/>
    
    </Routes>
  )
}

export default App
