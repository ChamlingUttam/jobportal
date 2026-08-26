import type { Job } from "../../types"


export type shapeOfJobs = {
    jobs : Job[] 
    loading:boolean,
    error:string | null 
}