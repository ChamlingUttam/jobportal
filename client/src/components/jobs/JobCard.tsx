
// import React from "react";
// import type { Job } from "../../types"; // adjust path if needed
// import { Clock,  MapPin, Wallet } from "lucide-react";

// interface JobCardProps {
//   job: Job;
// }

// const formatDate = (dateStr: string) => {
//   const date = new Date(dateStr);
//   return date.toLocaleDateString("en-NP", {
//     year: "numeric",
//     month: "short",
//     day: "numeric",
//   });
// };

// const typeColor: Record<string, string> = {
//   "Full-time": "#16a34a",
//   Contract: "#d97706",
//   "Part-time": "#2563eb",
// };

// const JobCard: React.FC<JobCardProps> = ({ job }) => {
//   return (
//     <article className="flex flex-col min-w-sm min-h-xs rounded-lg border">
//       <div className="p-2 flex justify-between">
//         <div className="text-xl font-bold">{job.title}</div>
//         <div className="flex gap-1 items-center">
//           <span><Wallet className="w-4 h-4"/></span>
//           <span>NPR {""}{job.salary}/month</span>
//         </div>
//       </div>

//       {/**comapny name */}
//        <div className="p-2 flex" >
//           <span>Comapny:</span>
//           <span className="font-bold">{job.company}</span>
//         </div>

//       {/**description name */}
//         <div className="p-2 ">
//           <p className="font-bold text-sm text-gray-600">{job.description}</p>
//         </div>

//       {/**requirements */}
//       <div className="flex gap-1 mb-3 mt-4">
//         {
//           job.requirements.map((req)=>(
//             <span key={req}  className="rounded-md border border-gray-300 bg-white px-2 py-1 text-sm font-medium text-black">
//               {req}
//             </span>
//           ))
//         }
      
//       </div>

//       <hr className="w-full h-1 border-0 bg-gray-300 rounded-full" />
//       <div className="flex justify-between items-center p-2">
//         <div className="flex gap-1 items-center">
//           {/* <div className="flex gap-1"> */}
//             <span>
//               <MapPin className="text-red-400 w-4 h-4" width={10} height={10}/>
//             </span>
//             <span className="text-sm">
//             {job.location}
//             </span>
//             {/* </div> */}
//           <span
//             style={{
//               backgroundColor: typeColor[job.type] || "#6b7280",
//               color: "white",
//             }}
//             className="px-2 py-1 rounded-full text-xs font-medium"
//           >
//             {job.type}
//           </span>
//         </div>
//         <div className="text-sm flex items-center gap-1">
//           <span>
//             <Clock className="w-4 h-4 text-gray-400" />
//           </span>
//           <span>Posted {formatDate(job.postedAt)}</span>
//         </div>
//       </div>
//       <button
//         className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-lg p-2 mt-2"
//         type="button"
//       >
//         Apply
//       </button>
//     </article>
//   );
// };

// export default JobCard;




import React from "react";
import type { Job } from "../../types"; // adjust path if needed
import { Clock, MapPin, Wallet } from "lucide-react";

interface JobCardProps {
  job: Job;
}

const formatDate = (dateStr: string) => {
  const date = new Date(dateStr);
  return date.toLocaleDateString("en-NP", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
};

const typeColor: Record<string, string> = {
  "Full-time": "bg-green-600",
  Contract: "bg-amber-600",
  "Part-time": "bg-blue-600",
};

const JobCard: React.FC<JobCardProps> = ({ job }) => {
  return (
    // h-full: fills the grid cell (grid rows must stretch, see note below)
    // flex flex-col: lets the footer/button anchor to the bottom via mt-auto
    <article className="flex flex-col  h-full rounded-lg border overflow-hidden">
      <div className="p-3 flex flex-col md:flex-row justify-between items-start gap-2">
        <div className="text-xl font-bold line-clamp-2">{job.title}</div>
        <div className="flex gap-1 items-center shrink-0 whitespace-nowrap">
          <Wallet className="w-4 h-4" />
          <span className="text-sm">NPR {job.salary}/month</span>
        </div>
      </div>

      {/* company name */}
      <div className="px-3 pb-1 flex flex-col md:flex-row  gap-1">
        <span>Company:</span>
        <span className="font-bold truncate">{job.company}</span>
      </div>

      {/* description */}
      <div className="px-3 pb-2">
        <p className="text-sm text-gray-600 line-clamp-2">{job.description}</p>
      </div>

      {/* requirements — flex-1 pushes everything below it down,
          so the footer + button always sit at the bottom of the card */}
      <div className="flex flex-wrap gap-1 px-3 pb-3 flex-1 content-start">
        {job.requirements.map((req) => (
          <span
            key={req}
            className="rounded-md border border-gray-300 bg-white px-2 py-1 text-xs font-medium text-black"
          >
            {req}
          </span>
        ))}
      </div>

      <hr className="border-t border-gray-300" />

      <div className="flex flex-wrap justify-between items-center gap-2 p-3">
        <div className="flex gap-2 items-center flex-wrap">
          <span className="flex items-center gap-1 text-sm">
            <MapPin className="text-red-400 w-4 h-4" />
            {job.location}
          </span>
          <span
            className={`px-2 py-1 rounded-full text-xs font-medium text-white ${
              typeColor[job.type] || "bg-gray-500"
            }`}
          >
            {job.type}
          </span>
        </div>
        <div className="text-sm flex items-center gap-1 text-gray-500">
          <Clock className="w-4 h-4" />
          <span>Posted {formatDate(job.postedAt)}</span>
        </div>
      </div>

      <button
        className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-b-lg p-2"
        type="button"
      >
        Apply
      </button>
    </article>
  );
};

export default JobCard;