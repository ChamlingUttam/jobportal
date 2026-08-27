


import { Briefcase, Home, Settings, User } from "lucide-react"
import { useAppSelector } from "../../app/hooks"
import Logout from "../common/Logout"
import { Link } from "react-router-dom"
// import { useAppDispatch } from "../../app/hooks"
// import { loginUser } from "../../features/auth/authSlice"


const Navbar = () => {
    // const dispatch = useAppDispatch()

    const {user} = useAppSelector((state)=>state.auth)

  return (
    <nav className='w-full h-13 bg-gray-400 flex justify-between rounded-sm'>
        {/** left side - */}
        <div className="hidden md:flex items-center p-2 gap-2">
            <span><Briefcase className="text-white" /></span>
            <span><h1 className="font-bold text-white text-2xl">Job Portal</h1></span>
        </div>
        {/** right side -*/}
       <div className="flex items-center justify-between w-full md:w-2xl">
         <div>
            <ul className="flex md:gap-8 gap-4 pr-16 p-2 items-center text-white">
                    <Link to={"/jobPage"}>
                <div className="cursor-pointer gap-1 flex items-center">
                <li><Home className="w-4 h-4"/></li><span className="text-xl  hidden md:block ">Home</span>
                </div>
                    </Link>


                <Link to={"/application"}>
                 <div className="cursor-pointer gap-1 flex items-center">
                <li><Briefcase className="w-4 h-4"/></li><span className="text-xl   hidden md:block">Applications</span>
                </div>
                </Link>
                

                <Link to={"/setting"}>
                 <div className="cursor-pointer gap-1 flex items-center">
                <li><Settings className="w-4 h-4"/></li><span className="text-xl   hidden md:block">Setting</span>
                </div>
                </Link>
                
                 <div className="cursor-pointer gap-1 flex items-center">
    <li className="h-10 w-10 rounded-full bg-blue-400 text-white flex items-center justify-center list-none">
        <User className="w-5 h-5"/>
    </li>
    <span className="text-xl">{user?.name ?? "Profile"}</span>
</div>
            </ul>
        </div>   
        <div className="p-4">
            <Logout/>
        </div>
        </div>   
    </nav>
  )
}

export default Navbar