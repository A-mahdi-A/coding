import { Route, Routes } from "react-router-dom"
import Start from "./pages/Start/Start"
import Login from "./pages/Login/login"
import signUp from "./pages/sign-up/sign-up"
import Home from "./pages/HOME/home"
import Pagehistory from "./pages/Historys/historysPage"
import Order from "./pages/orderPage/order"
import InFood from "./pages/informatin food/InFood"
import Profile from "./pages/profile/profile"
function App() {
  
  return (
    <Routes>
      <Route path="/" element={<Start/>}/>
      <Route path="/Login" element={<Login/>}/>
      <Route path="/signUp" element={<signUp/>}/>
      <Route path="/Home" element={<Home/>}/>
      <Route path="/history" element={<Pagehistory/>}/>
      <Route path="/Order" element={<Order/>}/>
      <Route path="/InFood" element={<InFood/>}/>
      <Route path="/profile" element={<Profile/>}/>

    
    </Routes>
  )
}

export default App
