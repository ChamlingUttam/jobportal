
import { Navigate } from "react-router-dom";
import { useAppSelector } from "../app/hooks"
import type { ReactNode } from "react"
import Loader from "../components/common/Loader";



type propsType ={
    children:ReactNode
}


export const Protected = ({children}:propsType)=>{
    // const isAuth = useAppSelector((state)=>state.auth.isAuthenticated)

  const { isAuth, isInitialized } = useAppSelector((state) => ({
    isAuth: state.auth.isAuthenticated,
    isInitialized: state.auth.authInitialized
}))

//check whether the user has a saved login from local storage
if(isInitialized ===false){
    return <Loader/>
}

   if(isAuth ==true && isInitialized===true){
    return children
   }


   if(isAuth ==false && isInitialized === true)
        return <Navigate to="/login" />
    

}
