import { Route,Routes } from "react-router-dom"
import Home from "../pages/home/Home"
import Login from "../pages/auth/Login"
import { Protected } from "./ProtectedRoute"
import Dashboard from "../pages/dashboard/Dashboard"

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/login" element={<Login/>} />
      {/* <Route path="/dashboard" element={<Dashboard/>} /> */}
      
      <Route path="/dashboard" element={
        <Protected>
          <Dashboard/>
      </Protected>} />
    </Routes>
    
  )
}

export default AppRouter
