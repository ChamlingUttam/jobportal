




import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { Search } from "lucide-react";
// import { jobs } from "../../services/jobs/jobApi"; 
import JobCard from "./JobCard";
import { useEffect, useState } from "react";
import { getAllJob } from "../../features/jobs/jobSlice";
import Loader from "../common/Loader";

const JobList = () => {
  // const handleApply = (jobId: number) => {
  //   console.log("Applied to job:", jobId);
  //   // later: open modal or navigate to apply page
  // };


  const dispatch = useAppDispatch()

  const {jobs,error,loading} = useAppSelector((state)=>state.jobs)

  useEffect(()=>{
    dispatch(getAllJob())
  },[dispatch])


  const [search,setSearch] = useState("")

  
  const filterJobs = jobs.filter((job)=>
    job.title.toLowerCase().includes(search.toLowerCase()) ||
    job.type.toLowerCase().includes(search.toLowerCase()) ||
    job.company.toLowerCase().includes(search.toLowerCase())

  )
  
  console.log("jobs:", jobs, "loading:", loading, "error:", error);
  return (
    <div className="p-6 max-w-350 mx-auto">
      <div className="w-full flex justify-between p-2">
      <span> 
         <h1 className="mb-6 text-2xl md:text-3xl font-bold">
        Open Positions ({filterJobs.length})
      </h1></span>
      <div className=" relative ">
      
         <span>
        <input
        onChange={(e)=>setSearch(e.target.value)}
         type="text" placeholder="search job by comapyn,titl,types..."  className="text-md text-gray-600 p-2 w-sm border border-gray-400 rounded-lg" />
      </span>
      <span className=" absolute right-2  top-2">
        <Search className="text-gray-400"/>
      </span>
      </div>
     
      </div>
      


     <div className="grid grid-cols-2 md:grid-cols-3  gap-4 items-stretch">

      {loading && (
        <Loader/>
      )}

      {error && (
        <p>{error}</p>
      )}

    {!loading && !error && filterJobs.length === 0 && (
  <p className="text-gray-500">No jobs found.</p>
)}

{!loading &&
  !error &&
  filterJobs.map((job) => (
    <JobCard key={job.id} job={job} />
  ))}
</div>
    </div>
  );
};

export default JobList;





























// // import { useAppDispatch, useAppSelector } from "../../app/hooks";
// import { Search } from "lucide-react";
// import { jobs } from "../../services/jobs/jobApi"; 
// import JobCard from "./JobCard";
// import { useEffect, useState } from "react";
// // import { getAllJob } from "../../features/jobs/jobSlice";
// import Loader from "../common/Loader";

// const JobList = () => {
//   // const handleApply = (jobId: number) => {
//   //   console.log("Applied to job:", jobId);
//   //   // later: open modal or navigate to apply page
//   // };


//   // const dispatch = useAppDispatch()

//   // const {jobs,error,loading} = useAppSelector((state)=>state.jobs)

//   // useEffect(()=>{
//   //   dispatch(getAllJob())
//   // },[dispatch])


//   const [search,setSearch] = useState("")

  
//   const filterJobs = jobs.filter((job)=>
//     job.title.toLowerCase().includes(search.toLowerCase()) ||
//     job.type.toLowerCase().includes(search.toLowerCase()) ||
//     job.company.toLowerCase().includes(search.toLowerCase())

//   )
  
//   return (
//     <div className="p-6 max-w-350 mx-auto">
//       <div className="w-full flex justify-between p-2">
//       <span> 
//          <h1 className="mb-6 text-2xl md:text-3xl font-bold">
//         Open Positions ({filterJobs.length})
//       </h1></span>
//       <div className=" relative ">
      
//          <span>
//         <input
//         onChange={(e)=>setSearch(e.target.value)}
//          type="text" placeholder="search job by category,title,types..."  className="text-md text-gray-400 p-2 w-sm border border-gray-400 rounded-lg" />
//       </span>
//       <span className=" absolute right-2  top-2">
//         <Search className="text-gray-400"/>
//       </span>
//       </div>
     
//       </div>
      


//      <div className="grid grid-cols-2 md:grid-cols-3  gap-4 items-stretch">

    

// {
//   filterJobs.map((job) => (
//     <JobCard key={job.id} job={job} />
//   ))}
// </div>
//     </div>
//   );
// };

// export default JobList;