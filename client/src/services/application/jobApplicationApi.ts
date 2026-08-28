import type { Application } from "../../types";

export const mockApplications: Application[] = [
  {
    id: 1,
    jobId: 3,
    userId: 2,
    status: "Pending",
    appliedAt: "2026-08-10T09:15:00.000Z",
  },
  {
    id: 2,
    jobId: 7,
    userId: 1,
    status: "Shortlisted",
    appliedAt: "2026-08-11T10:45:00.000Z",
  },
  {
    id: 3,
    jobId: 1,
    userId: 3,
    status: "Rejected",
    appliedAt: "2026-08-12T08:30:00.000Z",
  },
  {
    id: 4,
    jobId: 9,
    userId: 2,
    status: "Pending",
    appliedAt: "2026-08-13T11:20:00.000Z",
  },
  {
    id: 5,
    jobId: 5,
    userId: 1,
    status: "Shortlisted",
    appliedAt: "2026-08-14T14:00:00.000Z",
  },
  {
    id: 6,
    jobId: 2,
    userId: 3,
    status: "Pending",
    appliedAt: "2026-08-15T09:50:00.000Z",
  },
  {
    id: 7,
    jobId: 10,
    userId: 1,
    status: "Rejected",
    appliedAt: "2026-08-16T13:10:00.000Z",
  },
  {
    id: 8,
    jobId: 6,
    userId: 2,
    status: "Shortlisted",
    appliedAt: "2026-08-17T10:05:00.000Z",
  },
  {
    id: 9,
    jobId: 4,
    userId: 3,
    status: "Pending",
    appliedAt: "2026-08-18T12:40:00.000Z",
  },
  {
    id: 10,
    jobId: 8,
    userId: 1,
    status: "Shortlisted",
    appliedAt: "2026-08-19T15:25:00.000Z",
  },
];



export const getAllJobApplication = async ():Promise<Application[]>=>{
    return mockApplications

}


//get the specific user job-application

export const getUserApplication = async (userId:number):Promise<Application[]>=>{
    return mockApplications.filter((application)=>application.userId === userId )
}


// apply the job  note=>we are only taking single job so Application

export const applyForJob = async (userId:number,jobId:number):Promise<Application>=>{
    const jobApplied = mockApplications.find((application)=>application.userId ===userId && application.jobId ===jobId)

    if(jobApplied){
        throw new Error("job already applied")
    }

    const newJobApplication:Application ={
        id:mockApplications.length+1,
        userId,
        jobId,
        status:"Pending",
        appliedAt: new Date().toISOString()
    } 

    mockApplications.push(newJobApplication)
    return newJobApplication
}