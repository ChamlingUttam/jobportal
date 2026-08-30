// import React from 'react'
// import type { Job } from '../../types'
// // import { useAppSelector } from '../../app/hooks'
// // import { useAppSelector } from '../../app/hooks'
// // import { jobs } from '../../services/jobs/jobApi'

// type JobDetailProps = {
//   jobs:Job
// }

// const JobDetail = ({jobs}:JobDetailProps) => {
//     // const {jobs} = useAppSelector((state)=>state.jobs)
//   return (
//     <div className=''>
//       hello
//         <h1>{jobs.title}</h1>
      
//     </div>
//   )
// }

// export default JobDetail




import { ArrowLeft, Briefcase, Clock, DollarSign, Map, MapPin, Wallet } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { jobs } from "../../services/jobs/jobApi";
// import { useAppDispatch, useAppSelector } from "../../app/hooks";
// import { applyJob } from "../../features/application/jobApplicationSlice";
// import toast from "react-hot-toast";

const JobDetails = () => {
  const { id } = useParams();

  

  

  const job = jobs.find((job) => job.id === Number(id));


  if (!job) {
    return (
      <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center gap-4">
        <h1 className="text-2xl font-bold">
          Job not found
        </h1>

        <Link
          to="/dashboard"
          className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-lg"
        >
          Back to Jobs
        </Link>
      </div>
    );
  }

  // const formatDate = (date: string) => {
  //   return new Date(date).toLocaleDateString("en-NP", {
  //     year: "numeric",
  //     month: "short",
  //     day: "numeric",
  //   });
  // };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-4 sm:p-6 ">
    <div className="flex p-5">
        <Link to={"/dashboard"}>
      Back to Home 
      </Link>
      <span>
      <ArrowLeft/>
      </span>
    </div>
      <div className="w-full flex flex-col lg:flex-row justify-between gap-6 p-4 sm:p-6 lg:p-10"> 

      {/**left box with descritpin */}
      <div className="w-full lg:w-7/12 border-white rounded-lg flex flex-col gap-6 lg:gap-10 border p-4 sm:p-5">
      <h1 className="text-3xl font-bold">{job.title}</h1>
      <div className="flex flex-col">
        <span><h2 className="text-xl font-semibold">Description</h2></span>
        <span className="mt-6"><p className="text-gray-400 text-sm">{job.longDescription}</p></span>
      </div>
       <div className="flex flex-col">
        <span><h2 className="text-xl font-semibold">Roles and Responsibility</h2></span>
        <span className="mt-6"><p className="text-gray-400 text-sm">{job.Responsibility}</p></span>
      </div>
      <div className="">
        <h2 className="text-xl font-semibold">Minimum Technical skills</h2>
         <div className="flex flex-wrap gap-2 mt-4">
              {job.requirements.map((requirement) => (
                <span
                  key={requirement}
                  className="bg-gray-700 border border-gray-600 px-3 py-2 rounded-lg text-sm"
                >
                  {requirement}
                </span>
              ))}
            </div>
      </div>
      </div>

      {/** right details */}
       <div className="w-full lg:w-4/12 border-gray-400 rounded-lg border p-4">
      <div className="flex flex-col gap-10">
        <div className="">
          <div className="flex  justify-between gap-4">
          <h1 className="text-2xl sm:text-3xl font-bold" >Location</h1>
          <Map  className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10"/>
          </div>
          <h2>{job.location}</h2>
        </div>
        <hr className="border-t border-gray-300"/>
          <div className="">
          <div className="flex  justify-between gap-4">
          <h1 className="text-2xl sm:text-3xl font-bold" >Salary</h1>
          <DollarSign className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10"/>
          </div>
          <h2>{job.salary}</h2>
        </div>
        <hr className="border-t border-gray-300"/>
         <div className="">
          <div className="flex  justify-between gap-4">
          <h1 className="text-2xl sm:text-3xl font-bold" >Experience</h1>
          <Clock className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10"/>
          </div>
          <h2>{"0-2 years"}</h2>
        </div>
        <hr className="border-t border-gray-300"/>
        <div className="">
          <div className="flex  justify-between gap-4">
          <h1 className="text-2xl sm:text-3xl font-bold" >Job Type</h1>
          <Briefcase  className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10"/>
          </div>
          <h2>{job.type}</h2>
        </div>
      </div>

      </div>


      </div>
    </div>
  );
};

export default JobDetails;



// <div className="max-w-5xl mx-auto">

//         <Link
//           to="/dashboard"
//           className="inline-flex items-center gap-2 text-gray-300 hover:text-white mb-6"
//         >
//           <ArrowLeft className="w-5 h-5" />
//           Back to Jobs
//         </Link>

//         <div className="bg-gray-800 border border-gray-700 rounded-xl p-6 sm:p-8 flex">
          

//           <div className="flex flex-col md:flex-row md:justify-between gap-4">

//             <div>
//               <h1 className="text-3xl font-bold">
//                 {job.title}
//               </h1>

//               <p className="text-gray-300 text-lg mt-2">
//                 {job.company}
//               </p>
//             </div>

//             <span className="self-start bg-blue-600 px-3 py-1 rounded-full text-sm font-semibold">
//               {job.type}
//             </span>
//           </div>

//           <div className="flex flex-wrap gap-4 text-gray-300 mt-6">

//             <span className="flex items-center gap-2">
//               <MapPin className="w-5 h-5" />
//               {job.location}
//             </span>

//             <span className="flex items-center gap-2">
//               <Wallet className="w-5 h-5" />
//               NPR {job.salary}/month
//             </span>

//             <span className="flex items-center gap-2">
//               <Clock className="w-5 h-5" />
//               Posted {formatDate(job.postedAt)}
//             </span>

//           </div>

//           <hr className="border-gray-700 my-8" />

//           <div>
//             <h2 className="text-xl font-bold mb-3">
//               Job Description
//             </h2>

//             <p className="text-gray-300 leading-7">
//               {job.description}
//             </p>
//           </div>

//           <div className="mt-8">
//             <h2 className="text-xl font-bold mb-3">
//               Requirements
//             </h2>

            // <div className="flex flex-wrap gap-2">
            //   {job.requirements.map((requirement) => (
            //     <span
            //       key={requirement}
            //       className="bg-gray-700 border border-gray-600 px-3 py-2 rounded-lg text-sm"
            //     >
            //       {requirement}
            //     </span>
            //   ))}
            // </div>
//           </div>

//           {/* <div className="mt-8">
//             <button
//               type="button"
//               onClick={handleApply}
//               className="w-full sm:w-auto bg-blue-500 hover:bg-blue-600 px-8 py-3 rounded-lg font-semibold"
//             >
//               Apply for this job
//             </button>
//           </div> */}

//         </div>



//       </div>