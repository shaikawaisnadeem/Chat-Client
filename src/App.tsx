import Home from "./Pages/Home/Home"
import { BrowserRouter, Routes,Route } from "react-router"
import Login from "./Pages/Login/Login"
import Signup from "./Pages/Signup/Signup"
function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path="/sign-in" element={<Login/>}/>
      <Route path="/sign-up" element={<Signup/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
