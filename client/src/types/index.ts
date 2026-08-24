type User = {
    id:number,
    name:string,
    email:string,
    password:string
}

type Job = {
    id:number
title:string
company:string
location:string
category:string
type:string
salary:number
description:string
requirements:string[]
postedAt: string
}

type Application ={
    status : "Pending" | "Shortlisted" | "Rejected",
    id:number,
    jobId:number,
    userId:number,
    appliedAt: string
}


export type {Job,Application,User}