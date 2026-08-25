
import type { User } from "../types";
// import { error } from "console";

export const mockUser:User[] =[
{

  id: 1,

  email: "test@example.com",

  name: "Test1",

  password :"12345678"

},
{

  id: 2,

  email: "test2@example.com",

  name: "Test2",

  password :"12345678"

},
{

  id: 3,

  email: "test3@example.com",

  name: "Test3",

  password :"12345678"

}

] 



export const login =  (email:string,password:string)=>{


    if(!email || !password){
        throw new Error("please fill the form")
    }
  
        const validUser = mockUser.find((user)=>user.email === email)

        if(!validUser){
            throw new Error("invalid crediential")
        }

        const checkPassword = validUser.password

        if(checkPassword !== password){
            throw new Error("Invalid credential");
        }

        return validUser

       
    }


    export const register = (name:string,email:string,password:string)=>{

        if(!email || !password || !name){
        throw new Error("please fill the form")
    }

    const existUser = mockUser.find((user)=>user.email === email)

    if(existUser){
        throw new Error("user with email already exist")
    }

    const  id  = mockUser.length+1


    const newUserDetail = {
        id,
        name,
        email,
        password
    }

     mockUser.push(newUserDetail)

    return newUserDetail
    


    }


    // export const logout = ()=>{

    // }