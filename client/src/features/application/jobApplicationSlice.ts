import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { shapeOfJobApplication } from "./jobApplicationTypes";
import { applyForJob, getAllJobApplication, getUserApplication } from "../../services/application/jobApplicationApi";




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
    const userApplication =await getUserApplication(userId)
    return userApplication
   }
)

// Apply for a job
export const applyJob = createAsyncThunk(
  "jobApplication/applyForJob",
  async ({
    userId,
    jobId,
  }: {
    userId: number;
    jobId: number;
  }) => {
    const application = await applyForJob(userId, jobId);
    return application;
  })



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

         // APPLY FOR JOB
    builder.addCase(applyJob.pending, (state) => {
      state.loading = true;
      state.error = null;
    });

    builder.addCase(applyJob.fulfilled, (state, action) => {
      state.loading = false;
      state.error = null;

      state.application.push(action.payload);
    });

    builder.addCase(applyJob.rejected, (state, action) => {
      state.loading = false;
      state.error =
        action.error.message || "Failed to apply for job";
    })
}

})

export default jobApplicationSlice.reducer