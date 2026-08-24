import { useState } from "react"
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import { loginUser } from "../../features/auth/authSlice"
import { Eye, EyeClosed } from "lucide-react"


const Login = () => {
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")

    const dispatch = useAppDispatch()

    const handleSubmit =(e:React.SubmitEvent<HTMLFormElement>)=>{
        e.preventDefault()

        dispatch(loginUser({
            email,
            password
        }))


    }


    const {loading,error} = useAppSelector(
        (state)=>state.auth
    )


    const [hide,setHide] = useState(false)


  return (
   <div className="min-h-screen w-full flex items-center justify-center bg-slate-50 px-4">
      <div className="w-full max-w-sm bg-white rounded-2xl shadow-sm border border-slate-200 p-8">
        <h1 className="text-2xl font-semibold text-slate-900 text-center">
          Login
        </h1>
        <p className="text-sm text-slate-500 text-center mt-1">
          Sign in to continue
        </p>
 
        <form className="mt-8 space-y-5"  onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-slate-700 mb-1.5"
            >
              Email
            </label>
            <input
            value={email}
              onChange={(e)=>setEmail(e.target.value)}
              type="email"
              id="email"
              placeholder="you@example.com"
              className="w-full rounded-lg border border-slate-300 px-3.5 py-2.5 text-gray-400 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent"
            />
          </div>
 
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-400 mb-1.5"
            >
              Password
            </label>
            <div className="relative">
                 <input
                 id="password"
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
              type={hide ? "text" : "password"}
              placeholder="••••••••"
              className="w-full rounded-lg border border-slate-300 px-3.5 py-2.5 text-gray-400 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent"
            />
            <button type="button" onClick={()=>setHide(!hide)} className="absolute right-4 top-2.5">
                {
                    hide ? <Eye/> : <EyeClosed/>
                }
            </button>
            </div>
           
          </div>

          {
            error &&(
                <p className="text-red-600 text-sm">{error}</p>
            )
          }
 
          <button
         
            type="submit"
            className="w-full rounded-lg cursor-pointer bg-blue-500 text-white font-semibold py-2.5 hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-900 focus:ring-offset-2"
            disabled={loading}
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>
 
        <p className="text-sm text-slate-500 text-center mt-6">
          Don't have an account?{" "}
          <a
            href="#"
            className="text-slate-900 font-medium hover:underline"
          >
            Create one
          </a>
        </p>
      </div>
    </div>
  )
}

export default Login
