import { Route, Routes } from "react-router-dom"
import Start from "./pages/Start/Start"

function App() {
  
  return (
    <Routes>
      <Route path="/" element={<Start/>}/>
    </Routes>
  )
}

export default App