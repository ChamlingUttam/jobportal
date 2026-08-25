
import { Navigate } from "react-router-dom";
import { useAppSelector } from "../app/hooks"
import type { ReactNode } from "react"


type propsType ={
    children:ReactNode
}


export const Protected = ({children}:propsType)=>{
    const isAuth = useAppSelector((state)=>state.auth.isAuthenticated)


    if(isAuth === true){
        return children
    }

    return <Navigate to="/login" />

}
