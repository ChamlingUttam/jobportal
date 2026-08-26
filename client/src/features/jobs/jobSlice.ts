// import { getAllJobs } from "../../services/jobs/jobApi";
// import { jobs } from "../../services/jobs/jobApi";
import { createSlice } from "@reduxjs/toolkit";
import type { shapeOfJobs } from "./jobType";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { getAllJobs} from "../../services/jobs/jobApi";


const initialState : shapeOfJobs = {
    jobs : [],
    error:null,
    loading:false  
}

export const getAllJob = createAsyncThunk(
    "jobs/getall",

    async()=>{
        return getAllJobs()
    }

)

export const jobSlice = createSlice({
    name:"jobs",
    initialState,
    reducers:{

    },
    extraReducers:(builder)=>{
        builder.addCase(getAllJob.pending,(state)=>{
            state.loading = true
            state.error = null
        })

        builder.addCase(getAllJob.fulfilled,(state,action)=>{
            state.error = null
            state.loading = false
            state.jobs = action.payload

            // saveJob(action.payload)

        })

        builder.addCase(getAllJob.rejected,(state,action)=>{
            state.error = action.error.message || "failed to load jobs"
            state.loading = false
        })


    }
})

export default jobSlice.reducer