import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { shapeOfJobApplication } from "./jobApplicationTypes";
import { getAllJobApplication, getUserApplication } from "../../services/application/jobApplicationApi";




const initialState :shapeOfJobApplication={
    application: [],
    loading:false,
    error:null

} 


export const getAllApplication = createAsyncThunk(
    "job/application",
    async ()=>{
        return getAllJobApplication()
    }
    )

//get the current login user application details

export const getMyApplication = createAsyncThunk(
"job/getMyApplication",
   async({userId}:{userId:number})=>{
    const userApplication = getUserApplication(userId)
    return userApplication
   }
)




export const jobApplicationSlice = createSlice({
    name:"application",
    initialState,

    

    reducers:{

    },

    extraReducers:(builder)=>{
        builder.addCase(getAllApplication.pending,(state)=>{
            state.loading = true
            state.error = null
        })

        builder.addCase(getAllApplication.fulfilled,(state,action)=>{
            state.loading = false
            state.error = null
            state.application = action.payload 
        })

        builder.addCase(getAllApplication.rejected,(state,action)=>{
            state.loading=false
            state.error = action.error.message || "failed to load application"
        })

        {/**get the current user application details */}
        builder.addCase(getMyApplication.pending,(state)=>{
            state.loading = true
            state.error = null
        })

        builder.addCase(getMyApplication.fulfilled,(state,action)=>{
             state.loading = false
            state.error = null
            state.application = action.payload
        })
           builder.addCase(getMyApplication.rejected,(state,action)=>{
            state.loading=false
            state.error = action.error.message || "failed to load application"
        })
    }

})

export default jobApplicationSlice.reducer