
import type { User } from "../../types";


export const saveUser = (newUser:User)=>{
    localStorage.setItem("user",JSON.stringify(newUser))

}

export const getSavedUser = ():User | null =>{
    const getUser = localStorage.getItem("user")

    if(!getUser){
        return null
    }

    return JSON.parse(getUser)
}


export const logout = () =>{

  
    localStorage.removeItem("user")

}