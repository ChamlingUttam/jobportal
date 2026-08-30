import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
// import Login from "../../pages/auth/Login";



const MainLayout = () => {
  return (
    <>
    {/* <Login/> */}
    <div className="flex flex-col">
        <Navbar/>
        <main>
            <Outlet/>
            </main>  
    </div>
    </>
  )
}

export default MainLayout
