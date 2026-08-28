import type { Application } from "../../types";


export type shapeOfJobApplication = {
    application: Application[],
    loading:boolean,
    error:null | string
}