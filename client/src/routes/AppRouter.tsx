import { Route,Routes } from "react-router-dom"
import Login from "../pages/auth/Login"
import { Protected } from "./ProtectedRoute"
import Dashboard from "../pages/dashboard/Dashboard"
import Register from "../pages/auth/Register"
import Setting from "../pages/setting/Setting"
import JobApplication from "../pages/application/JobApplication"
import MainLayout from "../components/layout/MainLayout"
import JobPage from "../pages/job/JobPage"

const AppRouter = () => {
  return (
    <Routes>
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
      <Route element={<MainLayout/>}>
        {/* <Route path="/dashboard" element={<Dashboard/>} /> */}
        <Route path="jobPage" element={<JobPage/>}/>
        <Route path="/setting" element={<Setting/>} />
        <Route path="/application" element={<JobApplication/>}/>
        <Route path="/dashboard" element={
          <Protected>
            <Dashboard/>
          </Protected>
        } />
      </Route>
    </Routes>
  )
}

export default AppRouter
